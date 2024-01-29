import '../scss/ReviewCard.scss';
import { FaStar } from "react-icons/fa";


function ReviewCard(props) {

    return (
        <>
            <div className='card'>
                <div className="rating">
                    <p className="rating">{props.rating}</p>
                    <FaStar size='1em'/>
                </div>
                <div className="card-body">
                    <img src={props.image} alt={props.alt} />
                    <h4>{props.name}</h4>
                </div>
                <div className="card-footer">
                    <p>{props.review}</p>
                </div>

            </div>
        </>
    );
}

export default ReviewCard;