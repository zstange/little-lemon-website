import '../scss/Nav.scss';
import logo from '../images/Logo_2.png';
import { useWindowContext } from './WindowSizeContext';
import { IoMenu } from "react-icons/io5";

function Nav() {
    const {windowSize} = useWindowContext();

    return (
        <nav className='nav eight'>
            {windowSize > 440 ?
                <ul>
                    <li><img src={logo} alt='Little Lemon Logo' /></li>
                    <li></li>
                    <li><a href='./'>Home</a></li>
                    <li><a href='./about'>About</a></li>
                    <li><a href='./menu'>Menu</a></li>
                    <li><a href='./reservations'>Reservations</a></li>
                    <li><a href='./order'>Order Online</a></li>
                    <li><a href='./login'>Login</a></li>
                </ul>
                :
                <ul>
                    <li><img src={logo} alt='Little Lemon Logo' /></li>
                    <li><IoMenu className='menu-icon'/></li>
                </ul>
            }
        </nav>
    );
}

export default Nav;