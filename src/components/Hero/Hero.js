import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import home from "../../images/home.png";
import startup from "../../images/startup.png";
import { MDBBtn } from "mdb-react-ui-kit";
import data from "./data.js";
import "./Hero.css";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopContainer = styled.div`
  width: 100%;
  height: 70vh;
  padding: 0;
  background-image: url("https://startupyard.com/wp-content/uploads/2021/06/pilulka-lab-promo.jpg");
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.89);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = () => {
  const [noofElement, setnoofElement] = useState(4);

  const loadmore = () => {
    setnoofElement(noofElement + noofElement);
  };
  const slice = data.cardData.slice(0, noofElement);

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
      <div className="homepage">
        <div className="container grid grid-two-column hero-main">
          <div className="section-hero-data">
            <h1 className="hero-heading" data-aos="fade-right">
              <span
                style={{
                  color: "#404040",
                  paddingRight: "20px",
                  fontWeight: "450",
                  fontSize: "2.5rem",
                }}
              >
                Welcome to
              </span>
              C
              <span
                style={{
                  color: "tomato",
                }}
              >
                IV
              </span>
              F
            </h1>
            <p className="hero-top-data" data-aos="fade-right">
              CHARUSAT <span> Innovative Ventures </span> Foundation{" "}
            </p>
            <div>
              <MDBBtn
                rounded
                className="mx-auto apply"
                color="info"
                style={{ width: "250px", backgroundColor: "#8490ff" }}
              >
                Apply For Start-up
              </MDBBtn>
            </div>
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

        <div
          className="bg-second"
          data-aos="fade-right"
          style={{ padding: "0", margin: "0" }}
        >
          <div className="section container">
            <div className="row">
              <div className="col-8">
                <div className="info-data">
                  <span style={{ color: "#8490ff", fontSize: "3rem" }}>
                    C<span style={{ color: "tomato" }}>IV</span>F{" "}
                  </span>
                  Start Up Program
                </div>
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
                    rem
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

        <section
          class="section section-work-data "
          data-aos="fade-in"
          style={{ padding: "10px" }}
        >
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

        <div className="latest-news bg-second" style={{ padding: "20px" }}>
          <div className="title d-flex justify-content-center">
            <div className="row">
              <div className="col-2">Latest</div>
              <div
                className="col-2"
                style={{ color: "tomato", marginLeft: "50px" }}
              >
                Announcements
              </div>
            </div>
          </div>
        </div>

        <Element name="topSection">
          <TopContainer>
            <BackgroundFilter>
              <h2
                className="heading"
                data-aos="fade-in"
                style={{ paddingTop: "50px", float: "left" }}
              >
                <span style={{ color: "#f5f5f5", fontSize: "35px" }}>
                  Environmental Engineering Laboratory
                </span>{" "}
                <span style={{ color: "#f5f5f5", fontSize: "20px" }}>@</span>
                <span style={{ color: "#8490ff" }}>
                  C<span style={{ color: "tomato" }}>IV</span>F
                </span>
              </h2>
              <p
                className="sub-heading"
                data-aos="fade-in"
                style={{ padding: "40px", textAlign: "center" }}
              >
                Services of NABL approved Environmental Engineering Laboratory
                is extended for solving industrial problems.Services of NABL
                approved Environmental Engineering Laboratory is extended for
                solving industrial problems.Services of NABL approved
                Environmental Engineering Laboratory is extended for solving
                industrial problems.
              </p>
              <button
                style={{
                  color: "tomato",
                  borderColor: "#8490ff",
                  borderColor: "tomato",
                }}
                type="button"
                data-aos="fade-in"
                class="btn btn-outline-tomato btn-rounded sub-heading"
                data-mdb-ripple-color="dark"
              >
                <a
                  href={require("../../pdfs/20IT120_JIMMY_FSWD_PRACTICAL_1.pdf")}
                  download="NablBroucher"
                >
                  Brochure of NABL lab
                </a>
              </button>
            </BackgroundFilter>
          </TopContainer>
        </Element>

        <section
          className="py-4 pt-lg-5 container bg-second"
          style={{ marginTop: "50px", width: "80%" }}
        >
          <div className="headingnews" data-aos="fade-left">
            Latest <span> Startup </span>Stories
          </div>
          <div
            className="row justify-content-center align-item-center"
            data-aos="fade-left"
            style={{ paddingTop: "30px" }}
          >
            {slice.map((item, index) => {
              return (
                <div
                  className="col-11 col-md-6 col-lg-3 mx-0 mb-4 news"
                  key={index}
                >
                  <div className="p-0 overflow-hidden">
                    <img
                      src={item.img}
                      className=""
                      style={{
                        height: "200px",
                        width: "300px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="description">
                      <h5 className="desc">{item.type}</h5>
                      <Link to="news">
                        <a className="subdesc">
                          {item.desc.substring(0, 150)}...
                        </a>
                      </Link>
                      <p className="subsubdesc">
                        {item.subdesc.substring(0, 200)}...
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            style={{
              float: "right",
              color: "tomato",
              borderColor: "#8490ff",
            }}
            type="button"
            className="btn btn-outline-secondary btn-rounded  color: #ffffff;
            border-color: #8490ff;"
            onClick={loadmore}
            data-mdb-ripple-color="dark"
          >
            Load More
          </button>
        </section>
      </div>
    </>
  );
};

export default Hero;
