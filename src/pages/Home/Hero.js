import React from "react";
import imgs from "../../assets/images/treatment.png";
import imgss from "../../assets/images/doctor.png";
import imgs1 from "../../assets/images/appointment.png";

const Hero = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={imgs} class="max-w-sm rounded-lg shadow-2xl pt-20" />
          <div className="ml-20">
            <h1 class="text-5xl font-bold text-white">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p class="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <section style={{
          background:`url(${imgs1})`
      }}>
        <div className="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src={imgss}
              class="max-w-sm rounded-lg shadow-2xl hidden lg:block"
            />
            <div>
              <h1 className="text-sky-300">Appointment</h1>
              <h1 class="text-5xl font-bold text-white">
                Make an appointment Today
              </h1>
              <p class="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem I psumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <button class="btn btn-primary text-white">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
