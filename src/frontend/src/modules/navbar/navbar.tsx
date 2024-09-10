
import { useNavigate } from 'react-router-dom'; 
import FavoriteIcon from "@mui/icons-material/Favorite";

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
    <button onClick={handleFavoritesClick}>
        <FavoriteIcon style={{ color: "white" }} /> {/* The heart icon */}
    </button>
</div>
        </nav>
    );
}

