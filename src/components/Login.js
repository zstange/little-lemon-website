import '../scss/Login.scss';
import lemon from '../images/logo_lemon.png';
import CallToAction from "./CallToAction";

function Login() {
    return (
        <>
            <CallToAction/>
            <main className="main twelve">
                <div className="error-container twelve">
                    <img className='error-img' src={lemon} alt="A lemon"/>
                    <h3>Sorry! We are having troubles loading this page</h3>
                    <h4>Please try again later</h4>
                </div>
            </main>
        </>
    );
}

export default Login;