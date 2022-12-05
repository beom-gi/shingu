import styled from "styled-components";
import { Link } from "react-router-dom"

const Container = styled.div`
    height: 15vh;
`
const Layout = styled.div`
    width: 1024px;
`

function Footer() {
    return (
        <Container>
            <Layout></Layout>
        </Container>
    )
}

export default Footer;