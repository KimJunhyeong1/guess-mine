(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./login");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNTIyNGQwNjMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIjtcbiJdfQ==
},{"./login":2}],2:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  // eslint-disable-next-line no-undef
  window.socket = io("/");
  window.socket.emit(window.events.setNickname, {
    nickname: nickname
  });
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  localStorage.setItem(NICKNAME, value);
  input.value = "";
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwid2luZG93Iiwic29ja2V0IiwiaW8iLCJlbWl0IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDSCxRQUFELEVBQWM7QUFDMUI7QUFDQUksRUFBQUEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCQyxFQUFFLENBQUMsR0FBRCxDQUFsQjtBQUNBRixFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0UsSUFBZCxDQUFtQkgsTUFBTSxDQUFDSSxNQUFQLENBQWNDLFdBQWpDLEVBQThDO0FBQUVULElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUE5QztBQUNELENBSkQ7O0FBTUEsSUFBSUEsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCUixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWixVQUFqQjtBQUNELENBRkQsTUFFTztBQUNMTixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWCxTQUFqQjtBQUNBSSxFQUFBQSxLQUFLLENBQUNILFFBQUQsQ0FBTDtBQUNEOztBQUVELElBQU1XLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzlCQSxFQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFNQyxLQUFLLEdBQUduQixTQUFTLENBQUNELGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLE1BQVFxQixLQUFSLEdBQWtCRCxLQUFsQixDQUFRQyxLQUFSO0FBQ0FkLEVBQUFBLFlBQVksQ0FBQ2UsT0FBYixDQUFxQm5CLFFBQXJCLEVBQStCa0IsS0FBL0I7QUFDQUQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBdkIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlgsU0FBakI7QUFDQUksRUFBQUEsS0FBSyxDQUFDWSxLQUFELENBQUw7QUFDRCxDQVJEOztBQVVBLElBQUlwQixTQUFKLEVBQWU7QUFDYkEsRUFBQUEsU0FBUyxDQUFDc0IsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLGdCQUFyQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xuXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcbmNvbnN0IExPR0dFRF9PVVQgPSBcImxvZ2dlZE91dFwiO1xuY29uc3QgTE9HR0VEX0lOID0gXCJsb2dnZWRJblwiO1xuXG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE5JQ0tOQU1FKTtcblxuY29uc3QgbG9nSW4gPSAobmlja25hbWUpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHdpbmRvdy5zb2NrZXQgPSBpbyhcIi9cIik7XG4gIHdpbmRvdy5zb2NrZXQuZW1pdCh3aW5kb3cuZXZlbnRzLnNldE5pY2tuYW1lLCB7IG5pY2tuYW1lIH0pO1xufTtcblxuaWYgKG5pY2tuYW1lID09PSBudWxsKSB7XG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX09VVDtcbn0gZWxzZSB7XG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xuICBsb2dJbihuaWNrbmFtZSk7XG59XG5cbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCB2YWx1ZSk7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gIGxvZ0luKHZhbHVlKTtcbn07XG5cbmlmIChsb2dpbkZvcm0pIHtcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XG59XG4iXX0=
},{}]},{},[1])