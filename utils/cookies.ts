import Cookies from "js-cookie";

function getCookie(name) {
  return Cookies.get(name);
}

function setCookie(name, value, days) {
  return Cookies.set(name, value, { expires: days });
}

function deleteCookie(name) {
  return Cookies.remove(name, { path: "" });
}

export { getCookie, setCookie, deleteCookie };
