import { useEffect, useState } from 'react';
import '../scss/Testimonials.scss';
import ReviewCard from './ReviewCard';

function Testimonials() {
    const [reviews, setReviews] = useState([]);
    let storedReviews = [
        {
            image: "",
            alt: "An thumbnail image of a person",
            name: "",
            rating: "4.9/5",
            review: "\"The Greek Salad is a must try!\""
        },
        {
            image: "",
            alt: "An thumbnail image of a person",
            name: "",
            rating: "5/5",
            review: "\"Wonderful atmosphere, great people, even better food!\""
        },
        {
            image: "",
            alt: "An thumbnail image of a person",
            name: "",
            rating: "4.8/5",
            review: "\"A wonderful spot in Chicago to grab a meal.\""
        },
        {
            image: "",
            alt: "An thumbnail image of a person",
            name: "",
            rating: "5/5",
            review: "\"You have to try to Greek Salad and the Lemon Dessert!\""
        },
    ];

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=4")
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                data.results.forEach((person, index) => {
                    storedReviews[index].image = person.picture.thumbnail;
                    storedReviews[index].name = person.name.first;
                });

                setReviews(storedReviews);
            });
    }, []);

    const getReviews = () => {
        let cards = [];

        reviews.forEach((review) => {
            cards.push(<ReviewCard
                key={review.name}
                image={review.image}
                alt={review.alt}
                name={review.name}
                rating={review.rating}
                review={review.review}
            />
            );
        });

        return cards;

    };

    return (
        <>
            <div className='section testimonials'>
                <div className='testimonial-header'>
                    <h3>TESTIMONIALS</h3>
                </div>
                <div className='testimonial-body'>
                    {getReviews()}
                </div>
            </div>
        </>
    );
}

export default Testimonials;