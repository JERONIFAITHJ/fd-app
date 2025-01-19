import "@/styles/globals.css"
import type { AppProps } from "next/app"

import Layout from "../../Components/HOC/Layout"
import HeadAndMeta from "../../Components/Head"

export default function App({
  Component,
  pageProps: { siteParameters, ...props },
}: AppProps) {
  return (
    <Layout siteParameters={siteParameters}>
      <HeadAndMeta />
      <Component {...props} />
    </Layout>
  )
}
