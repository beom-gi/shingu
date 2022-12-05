import Header from "../Component/Header";
import Footer from "../Component/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BestSeller from "../Component/BestSeller";

const Seciton_main = styled.div`
    background-color: #ecfbcc;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 770px;
    
    #Section_main_Layout {
        width: 1024px;

        #title {
            position: relative;
            top: 30%;
            #main_title {
                font-size: 48px;
                line-height: 130%;
                white-space: pre-line;
            }
            #sub_title {
                margin-top: 30px;
            }
        }

        img {
            width: 450px;
            float: right;
            position: relative;
            top: 5%;
            right: 5%;
        }
    }
`
const Section_buy = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 770px;

    #Section_buy_Layout {
        text-align: center;
        width: 1024px;
        /* margin-top: 5%; */
        /* display: flex; */

        #img_buy {
            margin-left: 110px;
            position: relative;
            top: 30%;
        }

        #buy_button {
            width: 25%;
            height: 10%;
            border-style: none;
            border-radius: 5px;
            margin-right: 110px;
            background-color: #97c72f;
            box-shadow: 5px 5px 5px #999;
            position: relative;
            top: 24%;

            p {
                font-size: 20px;
                color: white;
            }
        }
    }

`
const Section_sell = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 770px;

    #Section_sell_Layout {
        text-align: center;
        width: 1024px;
        /* margin-top: 10%; */
        /* display: flex; */

        #img_sell {
            margin-right: 110px;
            position: relative;
            top: 30%;
        }

        #sell_button {
            width: 25%;
            height: 10%;
            border-style: none;
            border-radius: 5px;
            margin-left: 110px;
            background-color: #97c72f;
            box-shadow: 5px 5px 5px #999;
            position: relative;
            top: 24%;

            p {
                font-size: 20px;
                color: white;
            }
        }
    }

`

function Home() {

    return (
        <div>
            <Header />
            <div id="main">
                <Seciton_main>
                    <div id="Section_main_Layout">
                        <div id="title">
                            <div id="main_title">전공책 비싸게 사지말고{"\n"}저렴하게 구입하세요.</div>
                            <div id="sub_title">선배들의 손길이 담긴 중고 전공책 프로젝트</div>
                        </div>
                        <img src="img/img-main.png" />
                    </div>
                </Seciton_main>
                <Section_buy>
                    <div id="Section_buy_Layout">
                        <button id="buy_button"><Link to = {'/buy'} className="btnLink"><p>전공책 구매하기</p></Link></button>
                        <img id="img_buy" src="img/img-buy.png" />
                    </div>
                </Section_buy>
                <Section_sell>
                    <div id="Section_sell_Layout">
                        <img id="img_sell" src="img/img-sell.png" />
                        <button id="sell_button"><Link to = {'/sell'} className="btnLink"><p>전공책 판매하기</p></Link></button>
                    </div>
                </Section_sell>
                <BestSeller />
            </div>
            <Footer />
        </div>
    )
}

export default Home;