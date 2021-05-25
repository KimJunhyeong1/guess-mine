import events from "./event";

const socketController = (socket) => {
  socket.on(events.setNickname, ({ nickname }) => {
    console.log(nickname);
    socket.nickname = nickname;
  });
};

export default socketController;
