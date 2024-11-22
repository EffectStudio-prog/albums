import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Albums from './pages/Albums';
import AlbumDetails from './pages/AlbumsDetail';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/albums"
          element={<ProtectedRoute>
            <Albums />
          </ProtectedRoute>}
        />
        <Route
          path="/albums/:id"
          element={<ProtectedRoute>
            <AlbumDetails />
          </ProtectedRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;
