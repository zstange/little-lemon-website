import '../scss/Footer.scss';
import chefs from '../images/Logo_1.png';
import { Link } from 'react-router-dom';
import { TiSocialFacebookCircular, TiSocialInstagram, TiSocialTwitter } from "react-icons/ti";

function Footer() {
    return (
        <footer className='footer twelve'>
            <div className='content'>
                <div>
                    <img src={chefs} alt='Chef Mario and Chef Adrian' />
                </div>
                <div>
                    <h5>Site Navigation</h5>
                    <ul>
                        <li><Link className='nav-item' to='/'>Home</Link></li>
                        <li><Link className='nav-item' to='/about'>About</Link></li>
                        <li><Link className='nav-item' to='/menu'>Menu</Link></li>
                        <li><Link className='nav-item' to='/reservations'>Reservations</Link></li>
                        <li><Link className='nav-item' to='/order'>Order Online</Link></li>
                        <li><Link className='nav-item' to='/login'>Login</Link></li>
                    </ul>
                </div>
                <div>
                    <h5>Contact</h5>
                    <p className='address'>1800 Bridge Street <br/> Los Angeles, CA 86954</p>
                    <p className='phone'>1-555-967-1234</p>
                    <p className='email'>littlelemon@gmail.com</p>
                </div>
                <div>
                    <h5>Social Media</h5>
                    <div className='socials'>
                        <TiSocialFacebookCircular size='2em'/>
                        <TiSocialInstagram size='2em'/>
                        <TiSocialTwitter size='2em'/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;