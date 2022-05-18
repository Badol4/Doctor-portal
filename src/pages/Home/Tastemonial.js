import React from "react";
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from "./Review";

const Tastemonial = () => {
    const reviews = [
        {
            _id:1,
            name:'winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people1
        },
        {
            _id:2,
            name:'Badol hossain',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people2
        },
        {
            _id:3,
            name:'Rana khan',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people3
        },
    ]
  return (
    <section className="my-28">
      <div className="flex justify-between">
        <div>
            <h1 className="text-xl text-blue-500 font-bold">Testimonials</h1>
            <h1 className="text-3xl">What out Patients say</h1>
        </div>
        <div>
            <img src={quote} className="lg:w-48 w-24" alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1">
      {
          reviews.map(review => <Review key={review._id} review={review}></Review>)
      }
      </div>
    </section>
  );
};

export default Tastemonial;
