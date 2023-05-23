import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Header from './components/Header';
import Main from './screens/Main';
import Footer from './components/Footer';
import Login from './screens/Login';
import Join from './screens/Join';
import MyPage from './screens/MyPage';
import Finder from './screens/Finder';
import Board from './screens/Board';
import BoardDetail from './screens/BoardDetail';
import RegStory from './screens/RegStory';

function App() {
  // common css
  const GlobalStyled = createGlobalStyle`
    ${reset}
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 10px;
    }

    body {
      font-family: Malgun Gothic;
    }

    input,
    label,
    select,
    textarea {
      font-family: Malgun Gothic;
    }

    ul li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    button {
      border: none;
      background-color: inherit;
    }
  `


  return (
    <Router>
      <GlobalStyled />

      <Header />

      <Routes>
        {/* Main */}
        <Route path='/' element={<Main />} />

        {/* Login */}
        <Route path='/login' element={<Login />} />

        {/* Join */}
        <Route path='/join' element={<Join />} />

        {/* MyPage */}
        <Route path='/mypage' element={<MyPage />} />

        {/* 여행지 찾기 */}
        <Route path='/finder' element={<Finder />} />

        {/* 게시판 */}
        <Route path='/board' element={<Board />} />

        {/* 게시판 디테일 */}
        <Route path='/board-detail/:seq' element={<BoardDetail />} />

        {/* 스토리 등록 */}
        <Route path='/regi-story' element={<RegStory />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
