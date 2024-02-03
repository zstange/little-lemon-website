import '../scss/BookingDetails.scss'
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./Button";

function BookingDetails(props) {

    const formik = useFormik({
        initialValues: {
            date: (new Date()).toLocaleDateString("en-CA"),
            time: "",
            guests: 4,
            occasion: "none",
        },
        onSubmit: (values) => {
            props.submit(values);
        },
        validationSchema: Yup.object({
            date: Yup.date().required("Date is required"),
            time: Yup.string().oneOf(props.availTimes).required("Please select a time"),
            guests: Yup.number().min(1, "Must be at least 1 guest").max(10, "For reservations more than 10, please call").required("Please specify the number of guests"),
            occasion: Yup.string().oneOf(["none", "anniversary", "birthday", "engagement", "other"]),
        }),
    });

    useEffect(() => {
        props.dispatch({ type: "update_times", date: formik.values.date })
    }, [formik.values.date]);

    return (
        <>
            <form>
                <h3>Booking Details</h3>
                <label htmlFor="res-date"><h4>Choose date<sup>*</sup></h4></label>
                <input type="date" id="res-date" {...formik.getFieldProps("date")} />
                <p className="form-error">{formik.touched.date && formik.errors.date}</p>
                <label htmlFor="res-time"><h4>Choose time<sup>*</sup></h4></label>
                <select id="res-time" {...formik.getFieldProps("time")}>
                    <option key={"empty"}></option>
                    {props.availTimes.map((time) => (
                        <option key={time}>{time}</option>
                    ))}
                </select>
                <p className="form-error">{formik.touched.time && formik.errors.time}</p>
                <label htmlFor="guests"><h4>Number of guests<sup>*</sup></h4></label>
                <input type="number" min="1" id="guests" {...formik.getFieldProps("guests")} />
                <p className="form-error">{formik.touched.guests && formik.errors.guests}</p>
                <label htmlFor="occasion"><h4>Occasion</h4></label>
                <select id="occasion" {...formik.getFieldProps("occasion")}>
                    <option value="none"></option>
                    <option value="anniversary">Anniversary</option>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="other">Other</option>
                </select>
                <p className="form-error">{formik.touched.occasion && formik.errors.occasion}</p>
                <Button
                    type="submit"
                    text="Make Your reservation"
                    onClick={formik.handleSubmit}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#F4CE14',
                        color: 'black'
                    }}
                />
            </form>
        </>
    );
}

export default BookingDetails;