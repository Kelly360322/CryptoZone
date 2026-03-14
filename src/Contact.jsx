import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <div className="Contact" id="contact">
            <div className="container">
                <div className="About">
                    <h2>About Company</h2>
                    <p>CryptoCash is a leading cryptocurrency exchange platform that provides a secure and user-friendly environment for buying, selling, and trading digital assets. Our mission is to empower individuals and businesses to participate in the digital economy by offering a wide range of cryptocurrencies and innovative financial services.</p>
                    <div className="Contact-info">
                        <p><MdLocationPin /> 123 Crypto Street, Blockchain City, Country</p>
                        <p><FaPhoneAlt /> +1 (123) 456-7890</p>
                        <p><MdEmail /> info@cryptocash.com</p>
                    </div>
                </div>

                <div className="Contact-content">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or inquiries, please feel free to reach out to us.</p>
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" required></textarea>
                        <button className="btn" type="submit">Send Message</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Contact;