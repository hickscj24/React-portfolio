import React from "react";
import Project from "../Project";

function Portfolio() {
  //save projects as objects in array
  const projects = [
    
    {
      title: "Disney App",
      description: "An app designed for Disney lovers who want to learn more about their favorite characters",
      img: {
        srcId: "th.jfif",
        alt: "image that shows the disney logo",
      },
      deployed: {
        href: "https://hickscj24.github.io/DisneyDashboardP1/",
        text: "Disney Dashboard ",
      },
      repo: {
        href: "https://hickscj24.github.io/DisneyDashboardP1/",
        text: "Github Repository",
      },
      // techs: [
      //   "Node.js",
      //   "Bootstrap",
      //   "Express",
      //   "MySQL",
      //   "dotenv",
      //   "bcrypt",
      //   "Handlebars",
      //   "express-session",
      //   "connect-session-sequelize",
      //   "nodemon",
      // ],
    },
    {
      title:"Social-Media-App",
      description:"provide an application where users can login and share content with others.",
      img: {
        srcId:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fsmallbiztrends.com%2Fcategory%2Fsocial-media&psig=AOvVaw0giEvKYy-v1qc7d_eCNElr&ust=1649183538693000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOjV2cuF-_YCFQAAAAAdAAAAABAD",
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