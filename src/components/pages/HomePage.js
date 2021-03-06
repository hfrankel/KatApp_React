import React from "react";
import "normalize.css";
import "./.././../styles/Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import kat from "./../../assets/KatBioImage_Test.JPG";
import tempImage from "./../../assets/rainbow-fruit.png";
import facebook from "./../../assets/image.png";
import instagram from "./../../assets/instagram-logo.svg";
import { useAuth0 } from "./../../react-auth0-spa";

const Homepage = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { loading } = useAuth0();

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {
        <Container id="homepage" className="home-page-container">
          <Row id="row1 homePageRow">
            <Col xs={5}>
              <img
                id="halfScreenImages"
                src={tempImage}
                alt="Eat the Rainbow"
              />
            </Col>

            {/*  right hand col consists of app name and login page buttons*/}
            <Col id="rightTop" xs={7}>
              <h1>Well Kids</h1>
              <p>Healthy and delicious recipes for kids</p>
              <div id="loginButtons">
                <div>
                  {!isAuthenticated && (
                    <Button onClick={() => loginWithRedirect({})}>
                      Log in / Sign Up
                    </Button>
                  )}

                  {isAuthenticated && (
                    <Button onClick={() => logout()}>Log out</Button>
                  )}
                </div>
              </div>
              {/* <div id="moreInfo">
                <p>More Info</p>
                <img id="arrowDown" src={arrowDown} />
              </div> */}
            </Col>
          </Row>

          <Row id="row2 homePageRow">
            <Col xs={12} lg={8}>
              <div id="headline">
                <h6>How does Sugar affect kids with ADHD?</h6>
                <h6>Why is "Eat The Rainbow"?</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="www.google.com">Click here for lorem Ipsum!</a>

                <h4>Kids Corner</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  labore et dolore magna aliqua.
                </p>
                <Button size="lg">Kids Corner</Button>
              </div>
            </Col>

            {/*  right hand col consists of app name and login page buttons*/}
            <Col xs={0} lg={4} id="secondRowImage">
              <img
                id="halfScreenImagesTwo"
                src={tempImage}
                alt="Eating Healthy is fun"
              />
            </Col>
          </Row>
          <Row id="row3 homePageRow ">
            <Col xs={0} lg={4} id="row3none">
              <img
                id="bioPic"
                src={kat}
                alt="Image of website author, Kathryn (nickname: Kat) Eccles"
              />
            </Col>

            {/*  right hand col consists of app name and login page buttons*/}
            <Col xs={12} lg={8} id="bioContainer">
              <div id="bio">
                <div id="bioMobileTop">
                  <img
                    id="bioPicMobile"
                    src={kat}
                    alt="Image of website author, Kathryn (nickname: Kat) Eccles"
                  />
                  <h1>Hi I'm Kat.</h1>
                </div>

                <p>
                  I am a full-time primary school teacher currently completing
                  my Health Science degree with a passion for kids health and
                  wellness.
                </p>
                <p>
                  After almost a decade of teaching, I understand it is
                  essential for kids to lead a happy, healthy life inside and
                  outside the classroom.
                </p>
                <p>
                  Through Well Kids, I’ve made it my mission to help families
                  work together to ensure kids are eating a balanced diet of
                  nutrient rich, real food.
                </p>
              </div>
              <div id="socialButtons">
                <button className="home-page-button">
                  <img src={instagram} alt="instagram" />
                </button>
                <button className="home-page-button">
                  <img src={facebook} alt="facebook" />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      }
    </>
  );
};

export default Homepage;
