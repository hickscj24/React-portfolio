import React from "react";
import Project from "../project";

function Portfolio() {
  //save projects as objects in array
  const projects = [
    
    {
      title: "Disney App",
      description: "An app designed for Disney lovers who want to learn more about their favorite characters",
      img: {
        srcId: "disney",
        alt: "image that shows the disney logo",
      },
      deployed: {
        href: "https://hickscj24.github.io/DisneyDashboardP1/",
        text: "Disney Dashboard ",
      },
      repo: {
        href: "https://github.com/hickscj24/DisneyDashboardP1",
        text: "Github Repository",
      },
      
    },
    {
      title:"Social-Media-App",
      description:"provides an application where users can login and share content with others.",
      img: {
        srcId:"SocialMediaApp",
        alt:"image that shows social media images",
      },
      deployed: {
        href:"https://socialmediap2.herokuapp.com/",
        text:"social media app",
      },
      repo:{
        href:"https://hickscj24.github.io/SocialMediaAppP2/",
        text: "Github Repository",

      },
    },
    {
      title: "Ecommerce App",
      description: "A website designed to shop for furniture",
      img: {
        srcId: "Ecommerce_App",
        alt: "image that shows a table set",
      },
      deployed: {
        href: "https://ecommerceapp-p3.herokuapp.com/#/login",
        text: "Ecommerce app ",
      },
      repo: {
        href: "https://github.com/hickscj24/ECommerceApp",
        text: "Github Repository",
      },
      
    },
    {
      title: "Social Network API",
      description: "A project designed to be used as a social network startup creating an API that uses a noSQL database",
      img: {
        srcId: "API-illustration.jpg",
        alt: "image that shows an api illustration",
      },
      deployed: {
        href: "https://watch.screencastify.com/v/VoYfobk0ttxbAtSe9BL3",
        text: "Social Network API ",
      },
      repo: {
        href: "https://github.com/hickscj24/Social-Network-API",
        text: "Github Repository",
      },
      
    },
    {
      title: "Note taker  App",
      description: "An app designed to to help you take notes",
      img: {
        srcId: "com.task.notes.jpg",
        alt: "image that shows a notebook",
      },
      deployed: {
        href: "https://polar-harbor-98314.herokuapp.com/",
        text: "Note Taker app ",
      },
      repo: {
        href: "https://github.com/hickscj24/Note-Taker-",
        text: "Github Repository",
      },
      
    },
    {
      title: "Day planner App",
      description: "An app created for basic day planning",
      img: {
        srcId: "calendar-icon-294-300.jpg",
        alt: "image that shows a calendar",
      },
      deployed: {
        href: "https://hickscj24.github.io/homework-05/",
        text: "Day Planner App ",
      },
      repo: {
        href: "https://github.com/hickscj24/homework-05",
        text: "Github Repository",
      },
      
    },
  
   
  ];

  //map over projects array and pass objects to Projects.js component to be rendered
  return (
    <div>
      <ul>
        {projects.map((p, i) => {
          return (
            <li key={i}>
              <Project project={p} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Portfolio;