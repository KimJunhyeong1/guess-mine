import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls,
  resetCanvas,
} from "./paint";
import { disableChat, enableChat } from "./chat";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");
const timer = document.getElementById("jsTimer");

let interval = null;
let time = 0;

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.points} `;
    board.appendChild(playerElement);
  });
};

const setNotifs = (text) => {
  notifs.innerText = "";
  notifs.innerText = text;
};

const clearTimer = () => {
  time = 0;
  timer.innerText = "";
  timer.style.display = "none";
  clearInterval(interval);
};

const enableTimer = (timeSet) => {
  if (timeSet > 0) {
    time = timeSet;
    timer.style.display = "block";

    interval = setInterval(() => {
      timeSet -= 1;
      timer.innerText = `남은시간: ${timeSet}초`;
    }, 1000);
  } else {
    clearTimer();
  }
};
export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = ({ timeSet }) => {
  setNotifs("");
  disableCanvas();
  hideControls();
  enableChat();
  enableTimer(timeSet);
};

export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showControls();
  disableChat();
  notifs.innerText = `그림을 그려 단어를 설명하세요, 단어: ${word}`;
};

export const handleGameEnded = () => {
  setNotifs("게임 종료.");
  disableCanvas();
  hideControls();
  resetCanvas();

  clearTimer();
};

export const handleGameStarting = () => {
  setNotifs("게임이 곧 시작됩니다.");
};
