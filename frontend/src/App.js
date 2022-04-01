import React, { useState } from 'react';
import './Styles/App.css';
import Users from './pages/Users';
import Groups from './pages/Groups';
import { Routes, Route, Link } from "react-router-dom"
import Mybutton from './UI/buttons/MyButton';
import Paginator from './UI/paginator/paginator';


function App() {
  const [page, setPage] = useState('');
  const changePage = (page) => {
    setPage(page)

  }
  return (
    <div>
      <header>
        <Paginator
          page={page}
          changePage={changePage}/>
      </header>
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/groups' element={<Groups />} />
        <Route path='/*' element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
