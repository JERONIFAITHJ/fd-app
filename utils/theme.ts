import { css } from "styled-components"

const flex = (
  direction = "row",
  justifyContent = "center",
  alignItems = "center",
  wrap = "nowrap",
) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${wrap};
`

export default flex
