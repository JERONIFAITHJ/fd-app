import { useEffect } from "react"

let openModalsCount = 0
let isFixed = false

const usePreventBgScroll = () => {
  useEffect(() => {
    // Prevent Page Jumping due to Modals.
    // https://stackoverflow.com/a/13891717
    const shouldPreserveScrollBar =
      document.documentElement.scrollHeight > window.innerHeight
    const { scrollTop } = document.documentElement

    openModalsCount += 1
    if (shouldPreserveScrollBar && !isFixed) {
      isFixed = true
      document.body.style.position = "fixed"
      document.body.style.overflowY = "scroll"
      document.body.style.top = `-${scrollTop}px`
      document.body.style.width = "100%"
    }
    return () => {
      openModalsCount -= 1
      if (isFixed && openModalsCount < 1) {
        isFixed = false
        document.body.style.position = "static"
        document.body.style.overflowY = "unset"
        document.documentElement.scrollTop = scrollTop
        document.body.style.width = ""
      }
    }
  }, [])
}

export default usePreventBgScroll
