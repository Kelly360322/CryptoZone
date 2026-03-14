import BitcoinPic from './assets/Bitcoin.png';
import EthereumPic from './assets/Ethereum.png';
import TetherPic from './assets/Tether.png';

function Crypto() {
    return (
        <div className="Crypto">
            <div className="Home_crypto">
                <div className="Token">
                    <div className="Home_crypto_item">
                        <img src={BitcoinPic} alt="Bitcoin"></img>
                        <pre>
                            <h3>Bitcoin</h3>
                            <p>BTC</p>
                        </pre>
                    </div>
                    <div className="Home_crypto_price">
                        <div className="price">
                            <h3>$27,000</h3>
                            <p>Latest price</p>
                        </div>
                        <div className="rate">
                            <h4>2.5%</h4>
                            <p>Last 24h</p>
                        </div>
                    </div>
                </div>

                 <div className="Token">
                    <div className="Home_crypto_item">
                        <img src={EthereumPic} alt="Ethereum"></img>
                        <pre>
                            <h3>Ethereum</h3>
                            <p>ETH</p>
                        </pre>
                    </div>
                    <div className="Home_crypto_price">
                        <div className="price">
                            <h3>$1,800</h3>
                            <p>Latest price</p>
                        </div>
                        <div className="rate">
                            <h4>1.2%</h4>
                            <p>Last 24h</p>
                        </div>
                    </div>
                </div>

                 <div className="Token">
                    <div className="Home_crypto_item">
                        <img src={TetherPic} alt="Tether"></img>
                        <pre>
                            <h3>Tether</h3>
                            <p>USDT</p>
                        </pre>
                    </div>
                    <div className="Home_crypto_price">
                        <div className="price">
                            <h3>$1.00</h3>
                            <p>Latest price</p>
                        </div>
                        <div className="rate">
                            <h4>0.0099%</h4>
                            <p>Last 24h</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Crypto