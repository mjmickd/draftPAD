import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import LandingPage from "../LandingPage/LandingPage";
import AuthPage from '../AuthPage/AuthPage';
import ArtListPage from '../ArtListPage/ArtListPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import WishlistPage from '../WishlistPage/WishlistPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [artInfo, setArtInfo] = useState([]);
  const [collection, setCollection] = useState([]);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} setArtInfo={setArtInfo} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/art" element={<ArtListPage  artInfo={artInfo} setCollection={setCollection}/>} />
              <Route path="/profile" element={<ProfilePage collection={collection} />} />
              <Route path="/profile/wishlist" element={<WishlistPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
