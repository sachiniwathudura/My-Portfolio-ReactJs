import React from 'react'
import Title from '../layouts/Title'
import {projectOne, projectTwo, projectThree, chatapp, cropapp, ecommerce , hotel, library,cofee,music} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="BudgetBuddy"
          des="BudgetBuddy, a personal expense tracker application built using the MERN stack (MySQL with Prisma, Express, React, Node.js). This project helps users track their expenses efficiently, analyze spending patterns, and visualize trends through interactive charts!"
          src={projectOne}
        />
        <ProjectsCard
          title="NovaNews"
          des=" A React Native mobile application for tracking and reading the latest news. Built with Expo, it provides a smooth and responsive experience for staying updated on current events."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Multi-Client Chat Application using Express, JavaScript, HTML, and WebSockets for real-time messaging. It supports multiple users, message broadcasting, and even audio sharing! 🎙💬 #WebSockets #ChatApp #RealTimeCommunication!"
          src={chatapp}
        />
        <ProjectsCard
          title="Crop Monitoring System"
          des=" Crop Monitoring System – A smart agriculture solution that helps track crop health, manage field data, and optimize farming decisions. Built with React, Redux, Tailwind CSS, and Spring Boot, it ensures efficient farm management with real-time monitoring. "
          src={cropapp}
        />
        <ProjectsCard
          title="StyleSphere
             E-commerce Website"
          des=" A modern e-commerce platform for skincare and makeup products, built with the MERN stack. Shop seamlessly with a user-friendly interface, secure payments, and personalized recommendations!"
          src={ecommerce}
        />
        <ProjectsCard
          title="Hotel Site"
          des=" Discover a seamless hotel booking experience with our modern website, built using HTML, CSS, and JavaScript. Enjoy a user-friendly interface, responsive design, and smooth animations for a hassle-free stay reservation"
          src={hotel}
        />
        <ProjectsCard
            title="BookWorm"
            des=" A Library Management System built with Java allows users to manage books, members, and borrowing records efficiently. It provides features for adding, updating, and tracking books and members."
            src={library}
        />
        <ProjectsCard
            title="Coffe Shop"
            des=" A Coffee Shop Web App built using HTML, CSS, and JavaScript that allows users to browse a menu, place orders, and explore coffee varieties. The app features an interactive UI, smooth animations, and a responsive design for an engaging user experience."
            src={cofee}
        />
        <ProjectsCard
            title="Music Player"
            des=" A simple and interactive music player app built using Python, allowing users to play, pause, and navigate through their favorite songs effortlessly. Designed with a user-friendly interface and smooth audio controls for an enhanced listening experience."
            src={music}
        />
      </div>
    </section>
  );
}

export default Projects