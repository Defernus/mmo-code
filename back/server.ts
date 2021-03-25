const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = process.env.PORT;

interface Change {
  rangeLength: number;
  rangeOffset: number;
  text: string;
}

let text = "";

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit("text", text);
  socket.on("changes", (changes: Change[]) => {
    const newText = changes.reduce((acc: string, { rangeLength, rangeOffset, text }: Change) => (
      `${acc.slice(0, rangeOffset)}${text}${acc.slice(rangeLength + rangeOffset)}`
    ), text);
    text = newText;
    io.emit("changes", changes);
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
