import '../scss/SpecialsCard.scss';
import { Link } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";


function SpecialsCard(props) {

    return (
        <>
            <div className='outer-card'>
                <div className="card-image">
                    <img src={props.image} alt={props.alt}/>
                </div>
                <div className='inner-card'>
                    <div className="card-header">
                        <h5>{props.name}</h5>
                        <p className="price">{props.price}</p>
                    </div>
                    <div className="card-body">
                        <p>{props.description}</p>
                    </div>
                    <div className="card-footer">
                        <h4><Link to='./order' className='link'>Order for delivery</Link></h4>
                        <MdDeliveryDining size='1.5em'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SpecialsCard;