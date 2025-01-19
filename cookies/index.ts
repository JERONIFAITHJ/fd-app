import { getCookie, setCookie } from "cookies-next"

export const setSiteTheme = (value: string, ctx = {}) =>
  setCookie("siteTheme", value, ctx)

export const getSiteTheme = (ctx = {}) => {
  return getCookie("siteTheme", ctx) || null
}
