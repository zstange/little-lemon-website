import BookingDetails from "./BookingDetails";
import CallToAction from "./CallToAction";
import resImage from "../images/restaurant.jpg";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../MockAPI.js";
import { useNavigate } from "react-router";

const updateState = (state, action) => {
    switch(action.type){
        case "update_times":
            return {...state, availTimes: fetchAPI(new Date(action.date))};
        default:
            return state;
    }
};

function Reservations() {
    const initializeState = () => {
        return {availTimes: fetchAPI(new Date())};
    };

    const [state, dispatch] = useReducer(updateState, initializeState());
    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)){
            navigate("./confirmed");
        }
    };


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
                    <BookingDetails availTimes={state.availTimes} dispatch={dispatch} submit={submitForm} />
                </div>
            </main>
        </>
    );
}

export default Reservations;