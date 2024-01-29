import '../scss/Chicago.scss';
import frontImage from '../images/restaurant.jpg';
import backImage from '../images/Mario and Adrian A.jpg';

function Chicago() {
    return (
        <>
            <div className='section'>
                <div className='chicago-container'>
                    <div className='about-chicago'>
                        <h1 className='title'>Little Lemon</h1>
                        <h2 className='subtitle'>Chicago</h2>
                        <p className='chicago-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut diam quam nulla. Odio tempor orci dapibus ultrices. Dignissim sodales ut eu sem integer vitae justo eget. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Massa tempor nec feugiat nisl pretium. Quis risus sed vulputate odio ut. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Velit scelerisque in dictum non consectetur a erat nam at. Enim lobortis scelerisque fermentum dui faucibus in. Amet porttitor eget dolor morbi non arcu. Amet aliquam id diam maecenas ultricies mi eget. Sollicitudin tempor id eu nisl nunc mi. Proin nibh nisl condimentum id venenatis a. Sed vulputate odio ut enim. Sagittis aliquam malesuada bibendum arcu vitae.
                        </p>
                    </div>
                    <div className='chicago-images'>
                        <div className='front-image'>
                            <img src={frontImage} alt="Little Lemon resautrant" />
                        </div>
                        <div className='back-image'>
                            <img src={backImage} alt="Chef Mario and Chef Adrian" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chicago;