import Income from "./assets/income-icon.png";
import Support from "./assets/support.png";
import KYC from "./assets/kyc.png";
import Security from "./assets/security.png";
import Transaction from "./assets/transaction.png";
import Call from "./assets/call.png";

function Blog() {
    return (
        <div className="Blog" id="blog">
            <div className="container">
                <h1>One-step soluction to buy and sell cryptocurrency with Cash</h1>

                <div className="Blog-content">
                    <div className="Blog-content-items">
                        <div className="img-container"><img src={Income} alt="Blog1" /></div>
                        <h2>Competitive Pricing</h2>
                        <p>We offer competitive pricing for buying and selling cryptocurrency with cash. Our rates are transparent and updated in real-time, ensuring you get the best value for your transactions.</p>
                    </div>

                    <div className="Blog-content-items">
                        <div className="img-container"><img src={Support} alt="Blog1" /></div>
                        <h2>24/7 Support</h2>
                        <p>Our dedicated support team is available 24/7 to assist you with any questions or issues you may encounter while buying or selling cryptocurrency with cash.</p>
                    </div>

                    <div className="Blog-content-items">
                        <div className="img-container"><img src={KYC} alt="Blog1" /></div>
                        <h2>Fast and Easy KYC</h2>
                        <p>Our streamlined KYC process ensures quick and hassle-free verification of your identity, making it easy to buy and sell cryptocurrency with cash.</p>
                    </div>

                    <div className="Blog-content-items">
                        <div className="img-container"><img src={Security} alt="Blog1" /></div>
                        <h2>Security</h2>
                        <p>We ensure secure and encrypted transactions for buying and selling cryptocurrency with cash, providing peace of mind for all users.</p>
                    </div>

                    <div className="Blog-content-items">
                        <div className="img-container"><img src={Transaction} alt="Blog1" /></div>
                        <h2>Fast Transactions</h2>
                        <p>We offer competitive pricing for buying and selling cryptocurrency with cash. Our rates are transparent and updated in real-time, ensuring you get the best value for your transactions.</p>
                    </div>

                    <div className="Blog-contant-item">
                        <img src={Call} alt="Blog1" />
                        <button className="btn">Call Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;