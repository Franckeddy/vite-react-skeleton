import {BrowserRouter, Routes, Route} from "react-router-dom";

import AppHome from "./AppHome.jsx";
import NotFoundPage from "./components/Error/404.jsx";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<AppHome />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
