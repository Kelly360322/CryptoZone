
import Buy from "./assets/Buy.png";
import Conversation from "./assets/Conversation.png";

function Trust() {
    return (
        <div className="Trust" id="trust">
            <div className="container">
                <div className="info">
                    <h1>Why Trust Us?</h1>
                    <p>We are a trusted and reliable platform for cryptocurrency transactions. Our team of experts ensures the highest level of security and transparency in all our operations.</p>
                </div>
                <div className="Trust-item">
                    <div className="Trust_info">
                        <img src={Buy} alt="Secure Transactions"></img>
                        <div className="Trust_info_item">
                            <h2>Secure Transactions</h2>
                            <p>We use advanced encryption and security protocols to protect your transactions and personal information.</p>
                            <button className="btn">Learn More</button>
                        </div>
                    </div>

                    <div className="Trust_info">
                        <img src={Conversation} alt="Conversation"></img>
                        <div className="Trust_info_item">
                            <h2>Secure Conversations</h2>
                            <p>We ensure secure and private communication channels for all our users.</p>
                            <button className="btn">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trust