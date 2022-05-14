import React from "react";
import img from "../../../assets/icons/clock.svg"
import img2 from "../../../assets/icons/marker.svg"
import img3 from "../../../assets/icons/phone.svg"
const InfoCArd = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-10 m-5">
      <div class="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-5 border border-sky-500">
        <figure className="pl-5">
          <img src={img} alt="Album" />
        </figure>
        <div class="card-body text-white">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
      <div class="card lg:card-side bg-base-100 shadow-xl border border-sky-500">
        <figure className="pl-5">
          <img src={img2} alt="Album" />
        </figure>
        <div class="card-body text-white">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
      <div class="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r bg-gradient-to-r from-indigo-500 border border-sky-500">
        <figure  className="pl-5">
          <img src={img3} alt="Album" />
        </figure>
        <div class="card-body text-white">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCArd;
