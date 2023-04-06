import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Header from './components/Header';
import Main from './screens/Main';
import Footer from './components/Footer';

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
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
