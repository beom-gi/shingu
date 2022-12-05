import styled from 'styled-components';
import Header from './Component/Header';
import { createGlobalStyle } from 'styled-components';
import Login from './Route/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Route/Home';
import Division from './Route/Division';
import Buy from './Route/PageBuy';
import Sell from './Route/PageSell';


const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
::-webkit-scrollbar {
  display: none;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
a {
	text-decoration: none;
	color: #333;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* @font-face {
	font-family: 'Noto Sans CJK KR';
	font-style: normal;
	font-weight: 100;
	src: url("fonts/NotoSansKR-Light.woff2") format('woff2'),
	url("fonts/NotoSansKR-Light.woff") format('woff'),
	url("fonts/NotoSansKR-Light.otf") format('truetype')
	}

	@font-face {
	font-family: 'Noto Sans CJK KR';
	font-style: normal;
	font-weight: normal;
	src: url("fonts/NotoSansKR-Regular.woff2") format('woff2'),
	url("fonts/NotoSansKR-Regular.woff") format('woff'),
	url("fonts/NotoSansKR-Regular.otf") format('truetype')
	}


	@font-face {
	font-family: 'Noto Sans CJK KR';
	font-style: normal;
	font-weight: 500;
	src: url("fonts/NotoSansKR-Medium.woff2") format('woff2'),
	url("fonts/NotoSansKR-Medium.woff") format('woff'),
	url("fonts/NotoSansKR-Medium.otf") format('truetype')
	}

	@font-face {
	font-family: 'Noto Sans CJK KR';
	font-style: normal;
	font-weight: bold;
	src: url("fonts/NotoSansKR-Bold.woff2") format('woff2'),
	url("fonts/NotoSansKR-Bold.woff") format('woff'),
	url("fonts/NotoSansKR-Bold.otf") format('truetype')
	} */
`

function App() {
  return (
    <>
      <GlobalStyle />
	  <Router>
	  	<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />}/>
			<Route path='/home/:division' element={<Division />}/>
			<Route path='/buy' element={<Buy />}/>
			<Route path='/sell' element={<Sell />}/>
	  	</Routes>
	  </Router>
   

    </>
  );
}

export default App;
