import React from "react";
import { motion } from "framer-motion";
import gambarNF from "../assets/NF/sttnf.png";

const LoaderHome = () => {
  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: -1000,
        transition: {
          duration: 1,
          delay: 3.2,
        },
      }}
      exit={{ y: window.innerWidth }}
      className="loaderHome min-vh-100 w-100 fixed"
    >
      <div className="containerLoaderHome min-vh-100 d-flex justify-content-center align-items-center flex-column fs-1">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.6 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loaderText text-white fw-bold"
        >
          Muhammad
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loaderText text-white fw-bold"
        >
          Zaidan
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loaderText text-white fw-bold"
        >
          Ramdhan
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.8 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loaderText text-white fw-bold"
        >
          Student
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.2 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loaderText text-white fw-bold"
        >
          At
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.6 },
            transitionEnd: {},
          }}
          className="loaderText"
        >
          <img src={gambarNF} alt="ini gambar" className="logoNF" />
        </motion.span>
      </div>
    </motion.section>
  );
};

export default LoaderHome;
