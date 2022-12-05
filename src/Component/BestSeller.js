import styled from "styled-components";

const Container = styled.div`
    height: 770px;
    background-color: #eee;
    display: flex;
    justify-content: center;
`
const Layout = styled.div`
    width: 1024px;
`

function BestSeller() {
    return (
        <Container>
            <Layout>
                <h1>Best Seller</h1>
            </Layout>
        </Container>
    )
}

export default BestSeller;