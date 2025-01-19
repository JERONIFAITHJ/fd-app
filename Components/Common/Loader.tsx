import styled, { css, keyframes } from "styled-components"
import usePreventBgScroll from "../../customHooks/usePreventBackgroundScroll"
import flex from "../../utils/theme"
import { BORDER_RADIUS } from "../../constants/theme"

const LoaderWrapper = styled.div`
  ${flex()}
  gap: 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.76);
`
const dotsAnimation = keyframes`
  0%, 100% {
    transform: translateY(-1rem);
  }
  50%, 25%, 75% {
    transform: translateY(0);
  }
`
const commonStyle = css`
  animation: ${dotsAnimation} 1s ease infinite;
  width: 1rem;
  height: 1rem;
  border-radius: ${BORDER_RADIUS.round};
  background-color: ${({ theme }) => theme.colors?.oppTheme};
`
const Dot = styled.div<{ index: number }>`
  ${commonStyle}
  animation-delay: 0.${({ index }) => index}s;
`

const Loader = () => {
  usePreventBgScroll()
  return (
    <LoaderWrapper>
      <Dot index={1} />
      <Dot index={2} />
      <Dot index={3} />
    </LoaderWrapper>
  )
}

export default Loader
