import './app.css';
import ProfileProvider from './contexts/ProfileProvider';
import Login from './pages/desktop/Login/Login';
import Profile from './pages/desktop/Profile/Profile';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <ProfileProvider
            content={
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            }
        />
    );
}

export default App;
