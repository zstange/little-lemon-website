import { Link } from 'react-router-dom';
import '../scss/Button.scss';

function Button(props) {
    return (
        <>
            <button type="button" style={props.style}>
                <Link to={props.path} style={props.linkStyle} className='link'>{props.text}</Link>
            </button>
        </>
    );
}

export default Button;