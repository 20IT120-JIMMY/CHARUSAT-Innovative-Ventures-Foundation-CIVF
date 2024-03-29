import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import Popup from "reactjs-popup";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
// import styled, { css } from "styled-components";
import "./Navbar.css";
import Login from "../../pages/Login/Login";

const Navbars = () => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!isOpen);
    var blur = document.getElementById("nav");
    blur.classList.toggle("active");
    // document.body.style.opacity = 0.5;
  };

  return (
    <>
      <MDBNavbar
        fixed="top"
        expand="lg"
        // light
        // bgColor="light"
        className="MDBNAVBAR"
      >
        <MDBContainer fluid>
          <MDBNavbarBrand href="#" style={{ padding: "0.5em" }}>
            Logo
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond} className="home">
            <MDBNavbarNav
              className="mr-auto mb-2 mb-lg-0 justify-content-center blur"
              id="nav"
            >
              <MDBDropdown group className="shadow-0">
                <MDBDropdownToggle color="link" className="hover">
                  About us
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>
                    Ethos (Vision/mission){" "}
                  </MDBDropdownItem>
                  <MDBDropdownItem link>
                    Message from the Desk of Directors{" "}
                  </MDBDropdownItem>
                  <MDBDropdownItem link>Advisory Committee</MDBDropdownItem>
                  <MDBDropdownItem link> CIVF Team</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <MDBDropdown group className="shadow-0">
                <MDBDropdownToggle color="link" className="hover">
                  Start-up Portfolio
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Active Start-ups</MDBDropdownItem>
                  <MDBDropdownItem link>Start-up Achievements</MDBDropdownItem>
                  <MDBDropdownItem link>Career at Start-ups</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <MDBDropdown group className="shadow-0">
                <MDBDropdownToggle color="link" className="hover">
                  Acceleration Program
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>About the Program</MDBDropdownItem>
                  <MDBDropdownItem link>Application Process</MDBDropdownItem>
                  <MDBDropdownItem link>Apply for Acceleration</MDBDropdownItem>
                  <MDBDropdownItem link> Track Application</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <MDBDropdown group className="shadow-0">
                <MDBDropdownToggle color="link" className="hover">
                  Facilities
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Co-working Space</MDBDropdownItem>
                  <MDBDropdownItem link>Mentorship</MDBDropdownItem>
                  <MDBDropdownItem link>Networking</MDBDropdownItem>
                  <MDBDropdownItem link>Funding</MDBDropdownItem>
                  <MDBDropdownItem link>
                    Patent Filing and Commercialization
                  </MDBDropdownItem>
                  <MDBDropdownItem link>
                    Infrastructural facilities
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <MDBDropdown group className="shadow-0">
                <MDBDropdownToggle color="link" className="hover">
                  Services
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Legal support</MDBDropdownItem>
                  <MDBDropdownItem link>Prototype development</MDBDropdownItem>
                  <MDBDropdownItem link>
                    Business Plan development
                  </MDBDropdownItem>
                  <MDBDropdownItem link>IT Support</MDBDropdownItem>
                  <MDBDropdownItem link>
                    Financial and Accounting services
                  </MDBDropdownItem>
                  <MDBDropdownItem link>
                    Training, workshop and seminar services
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <MDBDropdown group className="shadow-0">
                <MDBDropdownToggle color="link" className="hover">
                  Market Trend
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Blogs</MDBDropdownItem>
                  <MDBDropdownItem link>Reports</MDBDropdownItem>
                  <MDBDropdownItem link>Policy documents</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              {/* <MDBNavbarItem className="hover">
                <MDBNavbarLink
                  active
                  aria-current="page"
                  style={{
                    color: "black",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                  className="hover home"
                >
                  CONTACT US
                </MDBNavbarLink>
              </MDBNavbarItem> */}
            </MDBNavbarNav>

            {/* <Popup
              modal
              trigger={
                <button>
                  {" "}
                  <MDBBtn
                    rounded
                    className="mx-auto"
                    color="info"
                    style={{ width: "200px", backgroundColor: "#8490ff" }}
                  >
                    {" "}
                    Login / Register{" "}
                  </MDBBtn>
                </button>
              }
            >
              {(close) => <Login close={close} />}
            </Popup> */}
            <MDBBtn
              rounded
              className="blurlogin"
              id="blurlogin"
              color="info"
              onClick={onClick}
            >
              {" "}
              Login / Register{" "}
            </MDBBtn>
            {isOpen && (
              <>
                <Login />
              </>
            )}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbars;
