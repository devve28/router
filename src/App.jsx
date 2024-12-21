
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';
import AlbumList from './components/AlbumList/AlbumList';
import AlbumDetail from './components/AlbumDetail/AlbumDetail';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/albums" element={<AlbumList />} />
        <Route path="/albums/:albumId" element={<AlbumDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
