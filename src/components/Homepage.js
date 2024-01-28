import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import foodImage from '../images/restaurantfood.jpg';

function Homepage() {
    return (
        <>
            <CallToAction
                title="Little Lemon"
                subtitle="Chicago"
                text="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
                button={{
                    text: 'Reserve a Table',
                    style: {
                        padding: '10px 20px',
                        backgroundColor: '#F4CE14'
                    },
                    path: './reservations',
                    linkStyle: {
                        color: 'black'
                    }
                }}
                image={foodImage}
                alt='Chef holding plate of bruscetta'
            />
            <main className="main twelve">
                <Specials />
                <Testimonials />
                <Chicago />
            </main>
        </>
    );
}

export default Homepage;