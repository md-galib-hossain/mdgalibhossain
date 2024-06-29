import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import AboutMe from "@/components/UI/HomePage/AboutUs/AboutMe";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import React from "react";

const Homepage = () => {
  const user = {
    name: "Md Galib Hossain",
    userImage:
      "https://i.ibb.co/jDqj9cY/360-F-366887372-QDqbw-NPR8-GHQgn-Zm-OV3nwh-GBXDc-Lb8er.jpg",
    roles: [ { name: "Full Stack Developer" }],
    email: "mdgalibhossain23@gmail.com",
    headline: "Driven by Innovation and a Passion for Problem-Solving in Full Stack Web Development",
    age: "25",
    status: "available",
    aboutMe: "I'm a full stack web developer",
    profiles: [
      { name: "Facebook", link: "facebook.com/mdgalibhossain" },
      { name: "Linkedin", link: "linkedin.com/mdgalibhossain" },
      { name: "X", link: "x.com/mdgalibhossain" },
      { name: "Github", link: "github.com/mdgalibhossain" },
      { name: "Fiverr", link: "fiverr.com/mdgalibhossain" },
    ],
    presentAddress: "Mirpur1,Dhaka,Bangladesh",
    permanentAddress: "Faridpur,Dhaka,Bangladesh",
    resumeLink: "drive.com/",
    languages: [
      { type: "Bangla", level: "Fluent", writing: true },
      { type: "English", level: "Fluent", writing: true },
      { type: "English", level: "Intermediate", writing: false },
    ],
  };
  return (
    <>
    <Navbar/>
      <HeroSection user={user} />
    <AboutMe/>
    <Footer/>
    </>
  );
};

export default Homepage;
