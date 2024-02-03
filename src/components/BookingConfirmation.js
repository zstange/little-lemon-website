import CallToAction from "./CallToAction";
import resImage from "../images/restaurant.jpg";


function BookingConfirmation(props) {
    return (
        <>
            <CallToAction
                title="Reservations"
                subtitle="Book today"
                text="Come visit us for a delicious meal, we can't wait to see you!"
                image={resImage}
                alt='Little Lemon restaurant seating'
            />
            <main className="main twelve">
                <div className="section">
                    <h3>Booking confirmed!</h3>
                </div>
            </main>
        </>
    );
}

export default BookingConfirmation;