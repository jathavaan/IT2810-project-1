
import { useNavigate } from 'react-router-dom'; 

export function Navbar() {
    const navigate = useNavigate(); 

    const handleFavoritesClick = () => {
        navigate('/favorites'); 
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="/logo/logo.png" alt="logo" /> {/* Adjust the path to the actual file */}
            </div>
            <div className="link-to-favorites">
                <button onClick={handleFavoritesClick}>Favorites</button> {/* Button triggers navigation */}
            </div> 
        </nav>
    );
}

