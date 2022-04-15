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
        srcId: "table.png",
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