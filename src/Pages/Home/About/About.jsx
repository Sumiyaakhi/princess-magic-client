import React from "react";

const About = () => {
  return (
    <div className="my-16">
      <h1 className="text-3xl text-center font-bold font-serif">About Us</h1>
      <div className="divider"></div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src="https://www.youloveit.com/uploads/posts/2021-12/1640425094_youloveit_com_disney_princess_new_year_fashions117.jpg"
            className=" rounded-lg shadow-2xl w-[625px] h-[400px]"
          />
          <div className="w-1/2">
            <h1 className="text-5xl font-serif font-bold">Disney Princess Dolls!</h1>
            <p className="py-6">
            They're ready to rock with this Disney ily 4EVER fashion pack inspired by Aurora. Designed for their Disney ily 4EVER doll, it features iconic elements from Walt Disney's Sleeping Beauty like the epic dragon, thorns and roses. The eight-piece set includes an on-trend outfit and boots plus a fierce headband and bag. Topping it off is a VIP ticket to a mythical concert by Dragons & Roses.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
