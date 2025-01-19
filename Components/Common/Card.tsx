import type { ReactNode } from "react"
import styled from "styled-components"

type Card = {
  children: ReactNode
}

export const StyledCard = styled.div`
  max-width: 75rem;
  margin: auto;
`

const Card = ({ children }: Card) => {
  return <StyledCard>{children}</StyledCard>
}

export default Card
