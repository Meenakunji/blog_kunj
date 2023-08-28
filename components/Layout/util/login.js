import cookie from "js-cookie";
import eventBus from "../../../utils/eventBus";
const loginfunc = async (jwt, userName, email, userId) => {
  cookie.remove("aToken");
  cookie.set("aToken", jwt, { expires: 360 });
  localStorage.setItem("userId", userId);
  localStorage.setItem("userName", userName);
  localStorage.setItem("userEmailID", email);
  localStorage.setItem("aToken", jwt);

  eventBus.dispatch("userLoggedIn", {
    jwt,
    userName,
    email,
    userId,
  });
};
export default loginfunc;
