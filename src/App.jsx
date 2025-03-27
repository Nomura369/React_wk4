//import "antd/dist/reset.css"
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
          <Route path="bookstore">
            <Route path="genre/:genreName" element={<HomePage />} />
            <Route path="book/:bookId" element={<BookPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;