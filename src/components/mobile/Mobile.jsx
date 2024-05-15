import './mobile.css';
import mobileGoogle from './../../img/icons/google-play.png';
import mobileApple from './../../img/icons/app-store.png';
import mobilePhone from './../../img/images/vouchers-img.png';
const Mobile = () => {
    return (
        <section className="mobile">
            <div className="container">
                <div className="mobile__main">
                    <div className="mobile__text">
                        <h1 className="mobile__title">
                            DOWNLOAD APP &<br />
                            GET THE VOUCHER!
                        </h1>

                        <div className="mobile__description">
                            Get 30% off for first transaction
                            using <br />
                            Rondovision mobile app for now.
                        </div>

                        <div className="mobile__apps">
                            <img src={mobileGoogle} alt="" />
                            <img src={mobileApple} alt="" />
                        </div>

                    </div>
                    <div className="mobile__phone">
                        <img src={mobilePhone} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mobile;