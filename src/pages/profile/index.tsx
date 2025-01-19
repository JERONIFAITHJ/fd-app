import styled from "styled-components"
import type { GetServerSidePropsContext } from "next"
import getServerSideParameters from "../../../apiCalls/getServerSideParameters"

const Wrapper = styled.div``

const Profile = ({ username }: { username: string }) => {
  return <Wrapper>{username}</Wrapper>
}
export default Profile

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const username = "Jeroni"
  return { props: { siteParameters: getServerSideParameters(ctx), username } }
}
