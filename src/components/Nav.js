import '../scss/Nav.scss';
import logo from '../images/Logo_2.png';
import { useWindowContext } from './WindowSizeContext';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Nav() {
    const {windowSize} = useWindowContext();

    return (
        <nav className='nav eight'>
            {windowSize > 440 ?
                <ul>
                    <li><img src={logo} alt='Little Lemon Logo' /></li>
                    <li></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/reservations'>Reservations</Link></li>
                    <li><Link to='/order'>Ordeer Online</Link></li>
                    <li><Link to='/login'>Login</Link></li>
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