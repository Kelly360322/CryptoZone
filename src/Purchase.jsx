import BitcoinPic from './assets/Bitcoin.png';
import EthereumPic from './assets/Ethereum.png';
import TetherPic from './assets/Tether.png';

function Purchase() {
    return (
        <div className="Purchase" id='purchase'>
            <div className="Purchase-content">
                <h1>How to Purchase from us?</h1>
                <p>Fill out the below form and we will contact you via email & details</p>
            </div>

            <div className="Purchase-form">
                <input type="text" placeholder="Wallet Address"></input>
                <select name="crypto">
                    <option value="bitcoin"><img src={BitcoinPic} alt="Bitcoin" width="20" height="20"/> Bitcoin</option>
                    <option value="ethereum"><img src={EthereumPic} alt="Ethereum" width="20" height="20"/> Ethereum</option>
                    <option value="tether"><img src={TetherPic} alt="Tether" width="20" height="20"/> Tether</option>
                </select>
                <input type="text" placeholder="How much worth in $?"></input>
                <input type="email" placeholder="Email"></input>
                <button className="btn">Get Started</button>
            </div>
        </div>
    );
}

export default Purchase