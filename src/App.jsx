//import "antd/dist/reset.css"
//import _ from "lodash"
import { BrowserRouter, Routes, Route } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'

import './App.css';
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'

function App() {
  return (
    <HelmetProvider context={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:bookId" element={<BookPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;