import React from "react";
import "./home.css";
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <div className="home">
      <HomeContainer />
      <GradientCircle />
    </div>
  );
};

export default Home;

const HomeContainer = () => {
  return (
    <section className="home-intro">
      <h1>
        Hi, I am Md Sam
        <br />
        <span className="dot">&</span>
        <br />I am a Front-End Developer
      </h1>
      <p>
        If you are looking for a front end developer , You are in the right
        place.
      </p>
    </section>
  );
};

const GradientCircle = () => {
  return (
    <div className="circle">
      <motion.div
      animate ={{
        x:0,
        y:0,
        scale:1,
        rotate:360,
        duration:2,
      }}
      className="circle-one"></motion.div>
      <div className="circle-two"></div>
      <div className="circle-three"></div>
      <div className="circle-four"></div>
    </div>
  );
};
