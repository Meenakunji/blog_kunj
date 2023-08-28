import cookie from "js-cookie";

function auth(update = false) {
  var email;
  var userName;
  var userId;
  var token;

  if (typeof window !== "undefined") {
    email = localStorage.getItem("userEmailID");
    userName = localStorage.getItem("userName");
    userId = localStorage.getItem("userId");
    token = localStorage.getItem("aToken");
  }

  return {
    token: token,
    email: email,
    userName: userName,
    userId: userId,
  };
}
export default auth;
