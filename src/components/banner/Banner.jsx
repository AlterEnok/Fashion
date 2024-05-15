import './banner.css';
import bannerImg from './../../img/images/promo-img.jpg';

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__main">
                    <div className="banner__content">
                        <div className="banner__img">
                            <img src={bannerImg} alt="Promo" />
                        </div>
                        <div className="banner__text">
                            <span className="banner__highlight">
                                <span>PAYDAY</span>
                            </span>
                            <span className='banner__span'>SALE NOW</span>
                            <div className='banner__spend'>
                                Spend minimal $100 get 30% off
                                voucher code for your next purchase
                            </div>
                            <div className="banner__suptitle">
                                1 June - 10 June 2021
                            </div>
                            <div className="banner__terms">
                                *Terms & Conditions apply
                            </div>
                            <a href="#!" className="banner__btn">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;