import React from "react";
import { motion } from "framer-motion";
import "./project.css";

const Project = () => {
  return (
    <motion.div
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      className="projects"
    >
      <h2>Here are some of my projects I've worked on.</h2>
      <p>
        Few of these projects are not complete yet. I'll update it once all of
        them are completed.
      </p>
      <section className="project-container">
        
      </section>
    </motion.div>
  );
};

export default Project;
