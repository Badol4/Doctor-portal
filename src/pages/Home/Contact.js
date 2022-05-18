import React from "react";
import imgs from '../../assets/images/bg.png'

const Contact = () => {
  return (
      <section>
          
    <div className="grid justify-center mb-10">
        <h1 className="text-white mb-2 text-2xl">Contact Us</h1>
        <h1 className="text-white mb-6 text-4xl">Stay connected with us</h1>
      <input
        type="text"
        placeholder="Email Address"
        class="input input-bordered input-sm w-full max-w-xs mb-6"
      />
      <input
        type="text"
        placeholder="Subject"
        class="input input-bordered input-sm w-full max-w-xs mb-6"
      />
      <input
        type="text"
        placeholder="Your message"
        class="input input-bordered input-xl w-full max-w-xs"
      />
      <div class="card-actions justify-center mt-4 mr-6">
      <button class="btn btn-primary">Submit</button>
    </div>
    </div>
    </section>
  );
};

export default Contact;
