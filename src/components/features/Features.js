import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaCode,FaServer, FaMobile } from "react-icons/fa";
import { SiMysql, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
      <section
          id="features"
          className="w-full py-20 border-b-[1px] border-b-black"
      >
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
              title="Full-Stack Development"
              des="Building scalable and efficient web applications using Java, Spring Boot, React, and MySQL."
              icon={<FaCode />}
          />
          <Card
              title="App Development"
              des="Developing modern and interactive applications with Java and React."
              icon={<AiFillAppstore />}
          />
          <Card
              title="REST API Development"
              des="Designing and implementing secure and efficient RESTful APIs using Spring Boot and Hibernate."
              icon={<FaServer />}
          />
          <Card
              title="Mobile Development"
              des="Creating mobile-friendly and cross-platform applications with modern frameworks."
              icon={<FaMobile />}
          />
          <Card
              title="UX Design"
              des="Enhancing user experience with intuitive UI/UX design using Tailwind CSS and React."
              icon={<SiAntdesign />}
          />
          <Card
              title="Database Management"
              des="Optimizing data storage, security, and retrieval using MySQL and Hibernate ORM."
              icon={<SiMysql />}
          />
        </div>
      </section>
  );

}

export default Features