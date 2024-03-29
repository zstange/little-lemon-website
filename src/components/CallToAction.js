import '../scss/CallToAction.scss';
import Button from './Button';

function CallToAction(props) {

    const getButton = () => {
        if (props.button) {
            return <Button
                text={props.button.text}
                style={props.button.style}
                path={props.button.path}
            />
        }
    };

    return (
        <>
            <header className='header twelve'>
                <div className='three-span-four'>
                    <h1>{props.title}</h1>
                    <h2>{props.subtitle}</h2>
                    <p className='text'>{props.text}</p>
                    {getButton()}
                </div>
                <div className='seven-span-four image-container'>
                    {props.image && <img src={props.image} alt={props.alt} />}
                </div>
            </header>
        </>
    );
}

export default CallToAction;