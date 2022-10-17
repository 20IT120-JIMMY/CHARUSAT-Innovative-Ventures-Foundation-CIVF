import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import home from "../../images/home.png";
import startup from "../../images/startup.png";
// import LatestNewwsImg from "../../assets/svg/book-lover.svg";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    const workSection = document.querySelector(".section-work-data");
    const workObserver = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        // console.log(entry);

        // if (entry.isIntersecting == false)
        if (!entry.isIntersecting) return;

        // animate number counter

        const counterNum = document.querySelectorAll(".counter-numbers");

        const speed = 200;

        counterNum.forEach((curElem) => {
          const updateNumber = () => {
            const targetNumber = parseInt(curElem.dataset.number);
            // console.log(targetNumber);
            const initialNum = parseInt(curElem.innerText);
            // console.log(initialNum);

            const incrementNumber = Math.trunc(targetNumber / speed);
            // console.log(incrementNumber);

            if (initialNum < targetNumber) {
              curElem.innerText = `${initialNum + incrementNumber}+`;
              setTimeout(updateNumber, 10);
            }
          };

          updateNumber();
        });

        observer.unobserve(workSection);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    workObserver.observe(workSection);
  });
  return (
    <>
      <div>
        <div className="container grid grid-two-column">
          <div className="section-hero-data">
            <h1 className="hero-heading">
              <span
                style={{
                  color: "black",
                  fontSize: "30px",
                  paddingRight: "20px",
                }}
              >
                Welcome to
              </span>
              C<span>IV</span>F
            </h1>
            <p className="hero-top-data">
              CHARUSAT <span> Innovative Ventures </span> Foundation{" "}
            </p>
            <p className="hero-para" style={{ color: "black" }}>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "CHARUSAT Innovative Ventures Foundation (CIVF) is an Accelerator facility with a wide network that provides connections with investors and successful entrepreneurs who are not only willing to invest their money but also their time helping enterprises to flourish in the long run. They also add value by providing mentoring and advice along with access to its entire network"
                    )
                    .pauseFor(2500)
                    // .deleteAll()
                    .start();
                }}
              />
            </p>
          </div>

          {/* for image  */}
          <div className="section-hero-image">
            <picture>
              <img src={home} alt="hero image" className="hero-img" />
            </picture>
          </div>
        </div>

        <div className="bg-second">
          <div className="section container">
            <div className="row d-flex">
              <div className="col-8">
                <div className="info-data">CIVF Start Up Program</div>
                <div className="vision">
                  Vision :{" "}
                  <span>
                    To emerge as a foremost organization leveraging innovation
                    for the benefit of society through supporting new ventures.{" "}
                  </span>
                </div>
                <div className="mission">Mission :</div>
                <p class="mission">
                  <li>
                    <b>
                      <span>
                        To create a vibrant ecosystem to accelerate the growth
                        of start-ups.{" "}
                      </span>
                    </b>
                  </li>
                  <li>
                    <b>
                      <span>
                        To facilitate commercialization of IPR of the University
                        for Societal Development.
                      </span>
                    </b>
                  </li>
                </p>
              </div>
              <div className="col-4 col-md-4">
                <div className="sp-item-img">
                  <img className="hero-img" src={startup} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="section section-work-data" style={{ padding: "10px" }}>
          <div className="counter-heading d-flex justify-content-center">
            <h1 className="hero-heading" style={{ fontSize: "50px" }}>
              C<span>IV</span>F{" "}
              <span
                style={{ color: "black", fontSize: "40px", fontWeight: "200" }}
              >
                {" "}
                In Numbers{" "}
              </span>
            </h1>
          </div>
          <div class="container grid grid-three-column">
            <div>
              <h2 class="counter-numbers" data-number="2000">
                0 +
              </h2>
              <p
                style={{
                  color: "#8490ff",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                STARTUPS SUPPORTED
              </p>
            </div>
            <div>
              <h2 class="counter-numbers" data-number="400">
                0 +
              </h2>
              <p
                style={{
                  color: "#8490ff",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                STUDENTS EDUCATED ABOUT STARTUPS
              </p>
            </div>
            <div>
              <h2 class="counter-numbers" data-number="231586">
                0 +
              </h2>
              <p
                style={{
                  color: "#8490ff",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                JOBS CREATED
              </p>
            </div>
            <div>
              <h2 class="counter-numbers" data-number="4158">
                0 +Cr
              </h2>
              <p
                style={{
                  color: "#8490ff",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                REVENUE GENERATED BY STARTUPS
              </p>
            </div>
            <div>
              <h2 class="counter-numbers" data-number="303">
                0 +
              </h2>
              <p
                style={{
                  color: "#8490ff",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                CO-WORKING SEATS
              </p>
            </div>
            <div>
              <h2 class="counter-numbers" data-number="910">
                0 +
              </h2>
              <p
                style={{
                  color: "#8490ff",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                PRODUCT STARTUP
              </p>
            </div>
          </div>
        </section>

        <div className="latest-news" style={{ padding: "20px" }}>
          <div className="title d-flex justify-content-center">
            Latest - <span>- Announcements</span>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Hero;
