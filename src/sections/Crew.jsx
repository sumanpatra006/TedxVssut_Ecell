"use client";

import React, { useState, useEffect } from "react";

const crewMembers = [
  {
    name: "Aruh Mehtah",
    role: "Organising Team",
    description:
      "Organizing TEDxVSSUT was an inspiring journey! From coordinating speakers to perfecting details, it was a rewarding experience of teamwork, creativity, and bringing impactful ideas to life.",
    image: "/images/img.jpg",
  },
  {
    name: "Jane Smith",
    role: "Speaker",
    description:
      "Jane is a seasoned speaker known for her insightful talks on innovation and creativity.",
    image: "/images/img.jpg",
  },
  {
    name: "John Doe",
    role: "Technical Lead",
    description:
      "John oversees all technical aspects of the event, ensuring everything runs smoothly.",
    image: "/images/img.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Marketing Director",
    description:
      "Emily leads the marketing team, crafting strategies to spread the word about our event.",
    image: "/images/img.jpg",
  },
  {
    name: "Michael Brown",
    role: "Logistics Coordinator",
    description:
      "Michael manages all the logistics, making sure everything is in place for a successful event.",
    image: "/images/img.jpg",
  },
  {
    name: "Sophia Williams",
    role: "Creative Director",
    description:
      "Sophia oversees the creative aspects, ensuring the event is visually stunning and engaging.",
    image: "/images/img.jpg",
  },
  {
    name: "Paul Adams",
    role: "Event Planner",
    description:
      "Paul handles the event planning and scheduling, making sure everything runs on time.",
    image: "/images/img.jpg",
  },
  {
    name: "Lisa White",
    role: "Volunteer Coordinator",
    description:
      "Lisa coordinates all the volunteers, ensuring everyone knows their roles and responsibilities.",
    image: "/images/img.jpg",
  },
];

const Crew = () => {
  const [visibleCrew, setVisibleCrew] = useState(crewMembers.slice(0, 4));
  const [numVisible, setNumVisible] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNumVisible(1);
      } else {
        setNumVisible(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCrew((prevVisibleCrew) => {
        const currentIndex = crewMembers.findIndex(
          (member) => member === prevVisibleCrew[0]
        );
        const newIndex = (currentIndex + numVisible) % crewMembers.length;
        return crewMembers.slice(newIndex, newIndex + numVisible);
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [numVisible]);

  return (
    <div
      className="crew-container"
      style={{
        background:
          "linear-gradient(to right, black, #100000 85%, #300000 100%)",
      }}
    >
      <h1 className="title">
        <span className="red-text">CREW</span> MEMBERS
      </h1>
      <p className="description">
        Behind every remarkable TEDx event is a passionate and dedicated team.
        <br />
        Working tirelessly to bring ideas to life. Meet the individuals who are
        making
        <br />
        TEDxVSSUT 2025 a success.
      </p>
      <div className="slider">
        <div className="slides">
          {visibleCrew.map((member, index) => (
            <div key={index} className="crew-member">
              <img
                className="crew-image"
                src={member.image}
                alt={member.name}
              />
              <h2 className="crew-name">{member.name}</h2>
              <h3 className="crew-role">{member.role}</h3>
              {member.description && (
                <div className="crew-description-hover">
                  <p>{member.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .crew-container {
          padding: 20px;
          text-align: center;
          background-color: black;
          color: white;
          min-height: 100vh;
        }
        .title {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .red-text {
          color: #ff0000;
        }
        .description {
          margin-bottom: 30px;
          font-size: 1.2rem;
          color: #bbb;
          line-height: 1.5rem;
        }
        .slider {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .slides {
          display: flex;
          transition: transform 0.5s ease-in-out;
          gap: 40px;
        }
        .crew-member {
          width: 350px;
          margin: 10px;
          padding: 10px;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease-in-out;
        }
        .crew-image {
          width: 100%;
          height: 350px;
          object-fit: cover;
        }
        .crew-name {
          font-size: 1.5em;
          color: #ff0000;
          margin-top: 10px;
        }
        .crew-role {
          font-size: 1.2em;
          color: #666;
          margin-bottom: 10px;
        }
        .crew-description-hover {
          opacity: 0;
          transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          font-size: 1.2rem;
          text-align: center;
          visibility: hidden;
          width: 90%;
        }
        .crew-member:hover .crew-description-hover {
          opacity: 1;
          visibility: visible;
        }
        .crew-member:hover .crew-name,
        .crew-member:hover .crew-role,
        .crew-member:hover .crew-image {
          opacity: 0.1;
        }
        @media (max-width: 768px) {
          .crew-member {
            width: 90%;
            height: auto;
            margin: 20px auto;
          }
          .crew-image {
            height: auto;
          }
          .slides {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Crew;
