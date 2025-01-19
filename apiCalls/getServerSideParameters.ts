import { GetServerSidePropsContext } from "next"
import { getSiteTheme, setSiteTheme } from "../cookies"

const getServerSideParameters = (ctx: GetServerSidePropsContext) => {
  const siteTheme = getSiteTheme(ctx)
  if (!siteTheme) {
    setSiteTheme("normal", ctx)
  }
  return {
    theme: {
      siteTheme: getSiteTheme(ctx),
    },
  }
}

export default getServerSideParameters
