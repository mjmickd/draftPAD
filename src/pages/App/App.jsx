import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ArtPage from '../ArtListPage/ArtListPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import WishlistPage from '../WishlistPage/WishlistPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/art" element={<ArtPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/wishlist" element={<WishlistPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
