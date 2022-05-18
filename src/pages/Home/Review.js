import React from "react";

const Review = ({review}) => {
  return (
    <div>
      <div class="card  shadow-xl lg:ml-4 ">
        <div class="card-body ml-3">
         
          <p className="text-white">{review.review}</p>
          <div class="card-actions justify-start">
           <div>
           <img src={review.img} alt="" className="mt-4"/>
            <p className="text-white text-xl lg:mt-10 lg:ml-3 ml-2 mt-3">{review.name}</p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
