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
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/finder' element={<Finder />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board-detail/:seq' element={<BoardDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
