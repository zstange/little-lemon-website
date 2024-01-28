import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

function Homepage() {
    return (
        <>
            <CallToAction />
            <main className="main twelve">
                <Specials />
                <Testimonials />
                <Chicago/>
            </main>
        </>
    );
}

export default Homepage;