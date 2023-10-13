import { useNavigate } from 'react-router-dom';
import './footer.scss';

export default function Footer() {
    const navigate = useNavigate()
    return (
        <footer>
            <div className='footer-top'>
                <div className="footer-left">
                    <span>FIND A STORE</span>
                    <span>BECOME A MEMBER</span>
                    <span>Send Us Feedback</span>
                </div>
                <div className="footer-middle">
                    <div className='footer-box'>
                        <p>GET HELP</p>
                        <span>Order Status</span>
                        <span>Delivery</span>
                        <span>Returns</span>
                        <span>Payment Options</span>
                        <span>Contact Us</span>
                    </div>
                    <div className='footer-box'>
                        <p>ABOUT NIKE</p>
                        <span>News</span>
                        <span>Careers</span>
                        <span>Investors</span>
                        <span>Sustainability</span>
                    </div>

                </div>
                <div className="footer-right">
                    <p>GET SECRET NOTES</p>
                    <input type="text" placeholder='Enter your email' />
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    ©2023 Stumptown Coffee Roasters Terms & Conditions Privacy Policy Your Privacy Choices
                </p>
                <div className='social-media-icon'>
                    <a href='https://www.facebook.com/nike/'><i className="fa-brands fa-facebook"></i></a>
                    <a href='https://www.instagram.com/nike'><i className="fa-brands fa-instagram"></i></a>
                    <a href='https://twitter.com/nike'><i className="fa-brands fa-twitter"></i></a>
                    <a href='https://www.tiktok.com/@nike'><i className="fa-brands fa-tiktok"></i></a>
                </div>
            </div>
        </footer >
    )
}
