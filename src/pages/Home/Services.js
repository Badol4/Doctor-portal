import React from "react";
import Fluoride from "../../../src/assets/images/fluoride.png"
import cavity from "../../../src/assets/images/cavity.png"
import whitening from "../../../src/assets/images/whitening.png"
import Service from "./Service";

const Services = () => {
    const services = [
        {
            _id:1,name:'Fluoride Treatment',
            img:Fluoride
        },
        {
            _id:2,name:'Cavity Filling',
            img:cavity
        },
        {
            _id:3,name:'teeth whitening',
            img:whitening
        }
    ]
  return (
    <div className="my-28">
      <div className="text-center">
        <h1 className=" text-xl font-bold uppercase text-blue-400">Our Services</h1>
        <h2 className="text-4xl text-white">Services We Provide</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2 justify-items-center mt-10">
          {
              services.map(service => <Service
              key={service._id}
              service = {service}
              ></Service>)
          }
      </div>
    </div>
  );
};

export default Services;
