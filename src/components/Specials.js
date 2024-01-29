import '../scss/Specials.scss';
import Button from './Button';
import saladImage from '../images/greek salad.jpg';
import bruschettaImage from '../images/bruchetta.svg';
import dessertImage from '../images/lemon dessert.jpg';
import SpecialsCard from './SpecialsCard';

function Specials() {

    const getSpecials = () => {
        let cards = [];
        let specials = [
            {
                image: saladImage,
                alt: "An image of a greek salad",
                name: "Greek Salad",
                price: "$12.99",
                description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with cruchy garlic and rosemary croutons."
            },
            {
                image: bruschettaImage,
                alt: "An image of bruschetta",
                name: "Bruschetta",
                price: "$5.99",
                description: "Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            },
            {
                image: dessertImage,
                alt: "An image of a lemon cake dessert",
                name: "Lemon Dessert",
                price: "$5.00",
                description: "This comes straight from grandma's recipe book, every last ingredient has been locally sourced and is as authentic as can be imagined."
            }
        ];

        specials.forEach((special) => {
            cards.push(<SpecialsCard
                image={special.image}
                alt={special.alt}
                name={special.name}
                price={special.price}
                description={special.description}
            />
            );
        });

        return cards;
    };

    return (
        <>
            <div className='section'>
                <div className='specials-header'>
                    <h3>THIS WEEK'S SPECIALS!</h3>
                    <Button
                        text='Online Menu'
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#F4CE14'
                        }}
                        path='./menu'
                        linkStyle={{
                            color: 'black'
                        }}
                    />
                </div>
                <div className='specials-body'>
                    {getSpecials()}
                </div>
            </div>
        </>
    );
}

export default Specials;