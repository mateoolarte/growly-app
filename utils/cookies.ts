import Cookies from 'js-cookie';

export function getCookie(name: string) {
  return Cookies.get(name);
}

export function setCookie(
  name: string,
  value: boolean | string | number,
  days: number
) {
  return Cookies.set(name, value, { expires: days });
}

export function deleteCookie(name: string) {
  return Cookies.remove(name, { path: '' });
}
