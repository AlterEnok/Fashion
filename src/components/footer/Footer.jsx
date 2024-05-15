// import './footer.css';
// import footerFb from './../../img/socials/fb.svg';
// import footerInst from './../../img/socials/inst.svg';
// import footerTw from './../../img/socials/tw.svg';
// import footerIn from './../../img/socials/in.svg';

// const Footer = () => {
//     return (
//         <footer className='footer'>
//             <div className="container">
//                 <div className="footer__content">
//                     <div className="footer__text">
//                         <h1 className='footer__title'>
//                             FASHION
//                         </h1>
//                         <div className="footer__description">
//                             Complete your style with awesome<br /> clothes from us.
//                         </div>
//                         <div className="footer__socials">
//                             <a href="#!">
//                                 <img src={footerFb} alt="" /></a>
//                             <a href="#!">
//                                 <img src={footerInst} alt="" />
//                             </a>
//                             <a href="#!">
//                                 <img src={footerTw} alt="" /></a>
//                             <a href="#!">
//                                 <img src={footerIn} alt="" /></a>
//                         </div>
//                         <div className="footer__nav">
//                             <div className="footer__company">
//                                 <h3 className='title__company'>
//                                     Company
//                                 </h3>
//                                 <a href="#!"> <ul>
//                                     About</ul></a>
//                                 <a href="#!"> <ul>
//                                     About</ul></a>
//                                 <a href="#!"> <ul>
//                                     About</ul></a>
//                                 <a href="#!"> <ul>
//                                     About</ul></a>
//                             </div>

//                             <div className="footer__quick">

//                             </div>

//                             <div className="footer__terms">

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;
import './footer.css';
import footerFb from './../../img/socials/fb.svg';
import footerInst from './../../img/socials/inst.svg';
import footerTw from './../../img/socials/tw.svg';
import footerIn from './../../img/socials/in.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__content">
                    <div className="footer__text">
                        <h1 className='footer__title'>
                            FASHION
                        </h1>
                        <div className="footer__description">
                            Complete your style with awesome<br /> clothes from us.
                        </div>
                        <div className="footer__socials">
                            <a href="#!">
                                <img src={footerFb} alt="" /></a>
                            <a href="#!">
                                <img src={footerInst} alt="" />
                            </a>
                            <a href="#!">
                                <img src={footerTw} alt="" /></a>
                            <a href="#!">
                                <img src={footerIn} alt="" /></a>
                        </div>
                    </div>
                    <div className="footer__nav">
                        <div className="footer__links">
                            <div className="footer__company">
                                <h3 className='title__company'>
                                    Company
                                </h3>
                                <a href="#!">About</a>
                                <a href="#!">Contact us</a>
                                <a href="#!">Support</a>
                                <a href="#!">Careers</a>
                            </div>
                            <div className="footer__quick">
                                <h3 className='title__quick'>
                                    Quick Link
                                </h3>
                                <a href="#!">Share Location</a>
                                <a href="#!">Orders Tracking</a>
                                <a href="#!">Size Guide</a>
                                <a href="#!">FAQs</a>
                            </div>
                            <div className="footer__terms">
                                <h3 className='title__terms'>
                                    Legal
                                </h3>
                                <a href="#!">Terms & conditions</a>
                                <a href="#!">Privacy Policy</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;