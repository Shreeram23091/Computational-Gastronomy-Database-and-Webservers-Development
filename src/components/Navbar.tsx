// Navbar.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Text, Flex } from "@sparrowengg/twigs-react";
import "./index.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const scrollToPosition = (id:string) => {
     if (location.pathname.includes("predict")) {
      navigate("/")
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // window.scrollTo({
    //   top: 700, // Number of pixels to scroll down
    //   behavior: 'smooth', // Smooth scrolling
    // });
  };

  const scrollToTop = () => {
    // if (location.pathname.includes("predict")) {
    //   return;
    // }
    window.scrollTo({
      top: 0, // Number of pixels to scroll down
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <Flex
      className="shadow-lg"
      flexDirection="row"
      justifyContent="space-evenly"
      style={{
        height: 70,
        backgroundColor: "#3B82F6",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Flex alignItems="center">
        <Link to="/" className="text-white text-[2rem]">
          Umami DB
        </Link>
      </Flex>

      <Flex alignItems="center" gap={70}>
        <Link to="/">
          <Text
            onClick={() => scrollToPosition("home")}
            style={{
              fontSize: 20,
              color: "white",
              cursor: "pointer",
              padding: 10,
            }}
            className="hover-bg"
          >
            Home
          </Text>
        </Link>

        <Text
          onClick={() => scrollToPosition("about")}
          style={{
            fontSize: 20,
            color: "white",
            cursor: "pointer",
            padding: 10,
          }}
          className="hover-bg"
        >
          About
        </Text>

        <Text
          onClick={() => {
            navigate("/predict");
            scrollToTop();
          }}
          style={{
            fontSize: 20,
            color: "white",
            cursor: "pointer",
            padding: 10,
          }}
          className="hover-bg"
        >
          Predict
        </Text>

        <Text
          style={{
            fontSize: 20,
            color: "white",
            cursor: "pointer",
            padding: 10,
          }}
          className="hover-bg"
        >
          How to use
        </Text>

        <Text
          onClick={() => navigate("/search")}
          style={{
            fontSize: 20,
            color: "white",
            cursor: "pointer",
            padding: 10,
          }}
          className="hover-bg"
        >
          Umami-DB
        </Text>

        <Link to="/contact-us">
          <Text
            style={{
              fontSize: 20,
              color: "white",
              cursor: "pointer",
              padding: 10,
            }}
            className="hover-bg"
          >
            Contact Us
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
