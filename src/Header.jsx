
import { useState, useRef, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header>
            <div className="container">
                <h1>Crypto<span>Zone</span></h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#trust">About Us</a></li>
                        <li><a href="#purchase">Pricing</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
                <div className="Registation_btn">
                    <button className="btn">Login</button>
                    <button className="btn">Register</button>
                </div>

                <div onClick={toggleMenu} className="menu-icon">
                    {menuOpen ? <IoClose /> : <IoMenu />}
                </div>
            </div>

            {menuOpen && (
                <nav ref={menuRef} className="m-cont">
                    <ul>
                        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#trust" onClick={() => setMenuOpen(false)}>About Us</a></li>
                        <li><a href="#purchase" onClick={() => setMenuOpen(false)}>Pricing</a></li>
                        <li><a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
                        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
                    </ul>
                    <hr />
                    <button className="btn" onClick={() => setMenuOpen(false)}>Login</button>
                    <button className="btn" onClick={() => setMenuOpen(false)}>Register</button>
                </nav>
            )}
        </header>
    );
}

export default Header;