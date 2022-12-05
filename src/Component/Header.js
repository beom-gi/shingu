import styled from "styled-components";
import { Link } from "react-router-dom"


const Container = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 3;
    background-color: #fff;
`
const Header_Layout = styled.div`
    margin: auto;
    width: 1024px;
    height: 100%;
    display: flex;

    img {
        width: 150px;
        margin-top: 5%;
    }
    ul {
        margin-top: 3%;
        #NgbMenu {
            /* float: left; */
            margin-left: 35px;
        }
    }

    #SerchBox {
        margin: 2% 0 0 auto;
    }
    #serch {
        background-color: #f2f3f6;
        height: 30px;
        padding: 1px 5px;
        border-style: none;
        border-radius: 3px;
    }
    #LoginBtn {
        margin-left: 30px;
    }
`


function Header() {
    const HeaderMenu = ["전공책 구매하기", "전공책 판매하기"];
    return (
        <Container>
            <Header_Layout>
                <Link to={'/'}><img src="/img/logo-main.png" /></Link>
                <ul>
                    {HeaderMenu.map((item, index) => (
                        <Link to={`/home/${item}`} id="NgbMenu" key={index}>{item}</Link>
                    ))}
                </ul>
                <div id="SerchBox">
                    <input type="text" placeholder="검색하기" id="serch"></input>
                    <Link to={'/login'} id="LoginBtn">login</Link>
                </div>
            </Header_Layout>
        </Container>
    )
}

export default Header;