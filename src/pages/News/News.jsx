import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../images/left-arrow.png";
import RightArrow from "../../images/right-arrow.png";
import "./News.css";

const data = [
  {
    url: "https://www.wanderon.in/triplist/meghalaya-road-trip/wanderon-meghalaya-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/bir-kasol-kheerganga/wanderon-kasol-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/kasol-kheerganga-manali/wanderon-manali-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/parvati-valley-summer/wanderon-parvati-1.jpg",
  },
  { url: "https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg" },
  {
    url: "https://www.wanderon.in/triplist/spiti-circuit-biking/wanderon-spiti-18.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/manali-leh-manali/wanderon-ladakh-1.jpg",
  },
];

const News = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img
      src={LeftArrow}
      alt="prevArrow"
      {...props}
      style={{ height: "50px", width: "50px" }}
    />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img
      src={RightArrow}
      alt="nextArrow"
      {...props}
      style={{ height: "50px", width: "50px" }}
    />
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <div className="row align-center">
      {/* <div className="columns"> */}
      <div className="post-content column left">
        <header className="post-title entry-header">
          <aside className="post-category">
            <a
              href="https://gusec.edu.in/category/startupstories/"
              rel="category tag"
            >
              Startup Stories
            </a>{" "}
          </aside>
          <h1 className="entry-title" itemprop="name headline">
            “It’s an exciting time to be a student innovator”: Team KasperTech
          </h1>{" "}
          <aside className="post-meta">
            <a
              href="https://gusec.edu.in/author/srishti-pandey/"
              title="Posts by Srishti Pandey"
              rel="author"
            >
              Srishti Pandey
            </a>{" "}
            on July 16, 2022{" "}
          </aside>
        </header>
        <figure className="post-gallery">
          <img
            width="560"
            height="315"
            src="https://connectgujarat.com/h-upload/2021/09/07/1139044-00.webp"
            className="attachment-revolution-squaresmall-x3 size-revolution-squaresmall-x3 thb-lazyload wp-post-image lazyautosizes lazyloaded"
            alt="Team KasperTech"
            sizes="920px"
            data-src="https://connectgujarat.com/h-upload/2021/09/07/1139044-00.webp"
            data-sizes="auto"
            data-srcset="https://connectgujarat.com/h-upload/2021/09/07/1139044-00.webp 560w, https://gusec.edu.in/wp-content/uploads/2022/07/startup-story-banners-300x169.png 300w, https://gusec.edu.in/wp-content/uploads/2022/07/startup-story-banners-380x214.png 380w, https://gusec.edu.in/wp-content/uploads/2022/07/startup-story-banners-20x11.png 20w, https://gusec.edu.in/wp-content/uploads/2022/07/startup-story-banners-190x107.png 190w"
            srcset="https://connectgujarat.com/h-upload/2021/09/07/1139044-00.webp 560w, https://gusec.edu.in/wp-content/uploads/2022/07/startup-story-banners-300x169.png 300w, https://gusec.edu.in/wp-content/uploads/2022/07/startup-story-banners-380x214.png 380w, https://gusec.edu.in/wp-content/uploads/2022/07/startup-story-banners-20x11.png 20w, https://gusec.edu.in/wp-content/uploads/2022/07/startup-story-banners-190x107.png 190w"
          />
        </figure>
        <p>
          <b>From Engineers to Innovators</b>
        </p>
        <p>
          <span style={{ fontWeight: "400" }}>
            Krishna Ojha, Ekta Arora and Dhairya Patel, all students at the
            Indian Institute of Information Technology, Surat, started out with
            the aspirations of any other engineering student – a well-paying,
            stable job at the end of their degree. Then what propelled them to
            change their course?
          </span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span style={{ fontWeight: "400" }}>
            “I’m a huge fan of the Marvel Cinematic Universe,” says Krishna,
            co-founder of KasperTech, “and I always wanted to build something
            like JARVIS (a personal AI Assistant). But that wasn’t my only
            motivation to innovate.” He continues, “It was during an internship
            with a tech startup that I saw and got inspired with their constant
            pursuit for innovation and improvement and realised what I really
            wanted to do with my life” says Krishna.
          </span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span style={{ fontWeight: "400" }}>
            “I loved to code. The inspiration for me to innovate came from WMN,
            a women-centred Hackathon I attended in Bangalore where I got to see
            an unprecedented number of women coders and realised that my dream
            wasn’t that far-fetched after all” says Ekta.
          </span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span style={{ fontWeight: "400" }}>
            “Technology has always fascinated me. Ekta &amp; I were computer
            science students and we had already built websites. But once we were
            introduced to IoT, I was fascinated by how, with IoT, the hardware
            could directly interact with humans; which inspired me to become an
            innovator” Dhairya adds.
          </span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span style={{ fontWeight: "400" }}>
            The first-ever home automation hardware they built was in their
            college hostel, which soon became an object of attraction for other
            students. “Inspired by our batchmates and seniors, we also wanted to
            adopt theoretical concepts we learned in className and implement
            them in real life. We started small &amp; moved on to bigger things.
            Ekta &amp; I built{" "}
          </span>
          <i>
            <span style={{ fontWeight: "400" }}>CORONtine</span>
          </i>
          <span style={{ fontWeight: "400" }}>
            , an autonomous patient scanning system that got a lot of media
            recognition in April 2020.” Krishna explains.&nbsp;
          </span>
        </p>
        <p>&nbsp;</p>
        <p>
          <b>Building UltraviZ</b>
        </p>
        <p>
          <span style={{ fontWeight: "400" }}>
            “As a student entrepreneur, figuring the financials was a huge
            challenge for us. We bought hardware with whatever we could save
            from our pocket money and internship stipends. Our work on home
            automation hit an indefinite halt when we ran out of supplies when
            COVID hit. We participated in the ACM Month of Code Competition,
            during which we identified that despite a good infrastructure, road
            accident casualties have snowballed owing to the fact that ready
            help is not available to people in the golden hour. Road
            surveillance was happening but the people monitoring the footage
            were scarce. To reduce the time taken to provide medical help to
            victims, we built UltraviZ. It automates the surveillance, detects
            accidents and sends alerts to concerned personnel. We won the
            challenge and generated a lot of feedback from places that made us
            realise the potential of our offering.”
          </span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span style={{ fontWeight: "400" }}>
            In November 2020, we got pre-incubated at GUSEC, and leveraging the
            Student Startup &amp; Innovation Policy (SSIP) Grant, built our
            first prototype and funded us enough to buy hardware, CCTVs and
            microcontrollers. Since we were an early-stage startup, we couldn’t
            hire any developers to build the UltraviZ interface, but were able
            to do that thanks to the SSIP grant. We have also filed for
            trademarks in two classNamees as well as a patent which became
            possible because of GUSEC &amp; SSIP.&nbsp;
          </span>
        </p>
        <p>&nbsp;</p>
        <p>
          <b>Startup, Students!</b>
        </p>
        <p>
          <span style={{ fontWeight: "400" }}>
            “With the government being so supportive, now is the best time to be
            a student entrepreneur,” Dhairya observes. “The Gujarat government
            is one of the most supportive governments in the startup ecosystem
            and is recognising the need to inspire students to become job
            creators” adds Krishna.
          </span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span style={{ fontWeight: "400" }}>
            “For any entrepreneur, beginnings are the hardest. Earlier, people
            would tell us- ‘at the end of the day, you’re students. You should
            finish college, get a job and maybe then think about creating a
            product’. Their attitude towards us changed with us winning
            competitions and then getting incubated at GUSEC. We also stood as
            First Runners-up at EO’s Global Student Entrepreneur Awards this
            year. They have more confidence in us now.”
          </span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span style={{ fontWeight: "400" }}>
            The environment you’re in can prove to be instrumental in how you
            become a student entrepreneur. For us, that environment came from
            our college campus which was the campus of NIT Surat, which was also
            IIIT Surat’s mentor institute. Many of our batchmates, our
            colleagues, seniors and faculties from both SVNIT and IIIT were
            innovators and were in the constant pursuit of building things. That
            encouraged us to take our idea forward. I hope every student can
            find the inspiration to push the boundaries of possibilities as we
            did.” says Krishna.
          </span>
        </p>
      </div>

      {/* <footer className="article-tags entry-footer nav-style-style1">
          <div className="row">
            <div
              className="small-12
			medium-12 columns"
            >
              <a
                href="https://gusec.edu.in/tag/entrepreneurlifestyle/"
                title=""
                className="tag-cloud-link"
              >
                entrepreneurlifestyle
              </a>
              <a
                href="https://gusec.edu.in/tag/startup-stories/"
                title=""
                className="tag-cloud-link"
              >
                Startup Stories
              </a>
            </div>
          </div>
        </footer> */}
      {/* </div> */}
      <div className="column right">
        <aside className="sidebar" role="complementary">
          <div className="sidebar_inner">
            <div
              id="recent-posts-widget-with-thumbnails-3"
              className="widget cf recent-posts-widget-with-thumbnails"
            >
              <div
                id="rpwwt-recent-posts-widget-with-thumbnails-3"
                className="rpwwt-widget"
              >
                <h3>Recent Blogs</h3>
                <ul>
                  <li>
                    <a href="https://gusec.edu.in/2022/10/04/herstart/">
                      <img
                        width="75"
                        height="75"
                        src="https://gusec.edu.in/wp-content/uploads/2022/10/SA409752-100x100.jpeg"
                        className="attachment-75x75 size-75x75 wp-post-image"
                        alt=""
                        loading="lazy"
                        srcset="https://gusec.edu.in/wp-content/uploads/2022/10/SA409752-100x100.jpeg 100w, https://gusec.edu.in/wp-content/uploads/2022/10/SA409752-20x20.jpeg 20w"
                        sizes="(max-width: 75px) 100vw, 75px"
                      />
                      <span className="rpwwt-post-title">
                        President Droupadi Murmu launches CIVF's herSTART
                        platform
                      </span>
                    </a>
                    <div className="rpwwt-post-date">October 4, 2022</div>
                  </li>
                  <li>
                    <a href="https://gusec.edu.in/2022/09/17/myskillshaala/">
                      <img
                        width="75"
                        height="75"
                        src="https://gusec.edu.in/wp-content/uploads/2022/09/startup-story-banners-1-100x100.jpg"
                        className="attachment-75x75 size-75x75 wp-post-image"
                        alt=""
                        loading="lazy"
                        srcset="https://gusec.edu.in/wp-content/uploads/2022/09/startup-story-banners-1-100x100.jpg 100w, https://gusec.edu.in/wp-content/uploads/2022/09/startup-story-banners-1-20x20.jpg 20w"
                        sizes="(max-width: 75px) 100vw, 75px"
                      />
                      <span className="rpwwt-post-title">
                        Learning has a fun, new address: MySkillShaala
                      </span>
                    </a>
                    <div className="rpwwt-post-date">September 17, 2022</div>
                  </li>
                  <li>
                    <a href="https://gusec.edu.in/2022/09/13/xr-startup-program/">
                      <img
                        width="75"
                        height="75"
                        src="https://gusec.edu.in/wp-content/uploads/2022/09/startup-story-banners-100x100.jpg"
                        className="attachment-75x75 size-75x75 wp-post-image"
                        alt=""
                        loading="lazy"
                        srcset="https://gusec.edu.in/wp-content/uploads/2022/09/startup-story-banners-100x100.jpg 100w, https://gusec.edu.in/wp-content/uploads/2022/09/startup-story-banners-20x20.jpg 20w"
                        sizes="(max-width: 75px) 100vw, 75px"
                      />
                      <span className="rpwwt-post-title">
                        CIVF to implement Meta’s XR Startup Program, a
                        collaboration with MeitY Startup Hub
                      </span>
                    </a>
                    <div className="rpwwt-post-date">September 13, 2022</div>
                  </li>
                  <li>
                    <a
                      href="https://gusec.edu.in/2022/07/16/kaspertech/"
                      aria-current="page"
                    >
                      <img
                        width="75"
                        height="75"
                        src="https://gusec.edu.in/wp-content/uploads/2022/07/startup-story-banners-100x100.png"
                        className="attachment-75x75 size-75x75 wp-post-image"
                        alt="Team KasperTech"
                        loading="lazy"
                        srcset="https://gusec.edu.in/wp-content/uploads/2022/07/startup-story-banners-100x100.png 100w, https://gusec.edu.in/wp-content/uploads/2022/07/startup-story-banners-20x20.png 20w"
                        sizes="(max-width: 75px) 100vw, 75px"
                      />
                      <span className="rpwwt-post-title">
                        “It’s an exciting time to be a student innovator”: Team
                        KasperTech
                      </span>
                    </a>
                    <div className="rpwwt-post-date">July 16, 2022</div>
                  </li>
                  <li>
                    <a href="https://gusec.edu.in/2022/05/30/this-ipl-season-avoid-traffic-congestion-with-showmyparking/">
                      <img
                        width="75"
                        height="75"
                        src="https://gusec.edu.in/wp-content/uploads/2022/05/Untitled-design-1-100x100.png"
                        className="attachment-75x75 size-75x75 wp-post-image"
                        alt=""
                        loading="lazy"
                        srcset="https://gusec.edu.in/wp-content/uploads/2022/05/Untitled-design-1-100x100.png 100w, https://gusec.edu.in/wp-content/uploads/2022/05/Untitled-design-1-20x20.png 20w"
                        sizes="(max-width: 75px) 100vw, 75px"
                      />
                      <span className="rpwwt-post-title">
                        This IPL Season, avoid Traffic Congestion with
                        ShowMyParking
                      </span>
                    </a>
                    <div className="rpwwt-post-date">May 30, 2022</div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              id="sib_subscribe_form-2"
              className="widget cf widget_sib_subscribe_form"
            >
              <h6>
                Want to know what we’re up to? Subscribe to our newsletter.
              </h6>
            </div>{" "}
          </div>
        </aside>
      </div>

      <div className="card__container">
        <h1>{data.title}</h1>
        <Slider {...settings} className="card__container--inner">
          {data.map((item, index) => {
            return (
              <div className="card__container--inner--card" key={index}>
                <img src={item.url} alt="hero_img" />

                <div className="card__container--inner--card--date_time">
                  {/* <img src="https://www.wanderon.in/svg/clock.svg" alt="time" />
                  <p>4D-5D</p>

                  <img
                    src="https://www.wanderon.in/svg/map-pin.svg"
                    alt="location"
                    style={{ marginLeft: 10 }}
                  /> */}
                  {/* <p>Delhi</p> */}
                </div>

                <h2>startup stories</h2>
                <p>
                  <Link to="/news">
                    To emerge as a foremost organization leveraging innovation
                    for the benefit of society through supporting new ventures.
                  </Link>
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default News;
