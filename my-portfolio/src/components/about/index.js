import React from 'react';

function About() {
	
	return (
		<div className="w-full min-h-screen bg-middle-blue-green">
			<div className="absolute w-full h-screen flex justify-center">
		<div className="self-center">
			<p className="font-semibold font-dancing text-5xl leading-none"> Hello, </p>
			<p className="font-Dancing text-6xl"> I am  Cody J Hicks </p>
		</div>
		<div className="justify-self-start self-center h-40 w-full flex items-center justify-center">
		<img className="h-32 w-32 rounded-full object-cover shadow-xl" src={require("../../assets/logos/_MG_0068.jpg")} />
			</div>
		<div className="mt-2 self-center">
			<p className="text-xl font-serif font-semibold tracking-wider uppercase"> FullStack Web Developer</p>
			<p className="text-gray-600 text-lg font-semibold text-justify"> based in the Denver area, CO, USA </p>
		</div>
		<div className='mt-8 self-center px-4 text-lg font-semibold tracking-wider text-center'>
		  <p> Full stack web developer looking to build a more intuitive user experience on the web. Earning a certificate in full stack development from The Denver University Coding Boot Camp. Innovative,task-driven and detail oriented, problem solver, Proficient in developing databases,creating user interfaces, scripting and testing code and implementing new features based on user feedback.I worked on a team of three to complete projects throughout this course. Strengths in creativity, teamwork, and building projects from ideation to execution.
 </p>
		</div>
	</div>
	</div>
	
	  );
	}
	
	export default About;