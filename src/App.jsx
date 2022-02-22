import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import TopBar from './components/TopBar';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';

const App = () => {
  const [bookData, setBookData] = React.useState([]);
  React.useEffect(() => {
    async function getBooks() {
      const res = await axios.get('https://dapi.kakao.com/v3/search/book', {
        params: { query: 'it' },
        headers: {
          Authorization: 'KakaoAK {YOUR_REST_API_KEY}' // SECRET KEY!
        }
      })
      setBookData(res.data.documents);
    }
    getBooks();
  }, []);
  return (
    <BrowserRouter>
      <TopBar bookData={bookData} />
      <Routes>
        <Route path="/" element={<MainScreen bookData={bookData} />} />
        <Route path="books/:bookId" element={<DetailScreen bookData={bookData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
