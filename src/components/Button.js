import { useNavigate } from 'react-router-dom';
import '../scss/Button.scss';

function Button(props) {
    const buttonType = props.type ? props.type : "button";
    const navigate = useNavigate();

    return (
        <>
            <button
                type={buttonType}
                style={props.style}
                onClick={props.onClick ? props.onClick : () => navigate(props.path)}
            >
                {props.text}
            </button>
        </>
    );
}

export default Button;