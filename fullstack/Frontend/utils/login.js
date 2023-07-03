import cookie from "js-cookie";
import eventBus from "../../../util/eventBus";
const login = async (jwt, userName, email, mobile, userId, role, roles) => {
  cookie.remove("aToken");
  cookie.remove("guestAccessToken");
  cookie.set("aToken", jwt, { expires: 360 });
  localStorage.setItem("userId", userId);
  localStorage.setItem("userName", userName);
  localStorage.setItem("userEmailID", email);
  localStorage.setItem("aToken", jwt);
  localStorage.setItem("userRole", role);
  localStorage.setItem("role", JSON.stringify(roles));
  localStorage.removeItem("guestAccessToken");
  Moengage.add_unique_user_id(userId);
  Moengage.add_first_name(userName);
  Moengage.add_email(email);
  Moengage.add_mobile(mobile);
  Moengage.add_user_name(userName);
  // Moengage.add_user_attribute("Pankaj_Name", 1);

  // window.location.reload();
  // window.location.href='/'
  eventBus.dispatch("userLoggedIn", {
    jwt,
    userName,
    email,
    userId,
  });
};
export default login;
