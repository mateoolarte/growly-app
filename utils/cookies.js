import Cookies from 'js-cookie';

export function getCookie(name) {
  return Cookies.get(name);
}

export function setCookie(name, value, days) {
  return Cookies.set(name, value, { expires: days });
}

export function deleteCookie(name) {
  return Cookies.remove(name, { path: '' });
}
