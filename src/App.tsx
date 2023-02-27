import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
import Dictionary from "./pages/Dictionary";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dict" element={<Dictionary />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
