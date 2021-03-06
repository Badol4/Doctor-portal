import React from "react";

const Service = ({service}) => {
  return (
    <div>
      <div class="card w-100 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={service.img}
            alt="Shoes"
            class="rounded-xl sm:justify-center"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-white">{service.name}</h2>
          <p className="text-white">If a dog chews shoes whose shoes does he choose?</p>
          
        </div>
      </div>
    </div>
  );
};

export default Service;
