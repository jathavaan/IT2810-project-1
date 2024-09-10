
import { useNavigate } from 'react-router-dom'; 
import FavoriteIcon from "@mui/icons-material/Favorite";

export function Navbar() {
    const navigate = useNavigate(); 

    const handleFavoritesClick = () => {
        navigate('/favorites'); 
    };
    const handleHomeClick = () => {
        navigate('/'); 
    }

    return (
        <nav className="navbar">
            <div className="navbar__logo">
            <button onClick={handleHomeClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <img src="/logo/logo.png" alt="logo" style={{ height: '40px' }} />
            </button>
        </div>
            <div className="link-to-favorites">
    <button onClick={handleFavoritesClick}>
        <FavoriteIcon style={{ color: "white" }} /> {/* The heart icon */}
    </button>
</div>
        </nav>
    );
}

