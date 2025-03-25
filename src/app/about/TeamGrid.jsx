"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2, // Stagger by 200ms per card
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};
const TeamMember = ({
  name,
  title,
  certifications,
  profilePic,
  index,
  isInView,
}) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      custom={index}
    >
      <div className="relative">
        <div className="flex justify-center p-6 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827] ">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
            <Image
              src={profilePic}
              alt={name}
              className="w-full h-full object-cover"
              width={128}
              height={128}
            />
          </div>
        </div>
      </div>
      <div className="text-center p-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-blue-600 font-medium">{title}</p>
        {certifications && certifications.length > 0 && (
          <div className="flex justify-center mt-2 space-x-2">
            {certifications.map((certImg, index) => (
              <img
                key={index}
                src={certImg}
                alt={`Certification ${index + 1}`}
                className="w-10 h-10 object-contain rounded-sm"
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const TeamGrid = () => {
  const teamMembers = [
    {
      name: "Sebastian Kufel M.S",
      title: "CEO",
      profilePic: "/img/person1.png",
      certifications: ["/img/badge2.jpg"],
    },
    {
      name: "Tyler Sookdeo M.S",
      title: "President",
      profilePic: "/img/person2.jpg",
      certifications: ["/img/badge.png", "/img/badge2.jpg", "/img/badge3.png"],
    },
    {
      name: "Jeffrey Adamski M.S",
      title: "Chief Operating Officer",
      profilePic: "/img/person3.jpg",
      certifications: ["/img/badge2.jpg"],
    },
    {
      name: "Jefferson Garcia M.S",
      title: "Vice President",
      profilePic: "/img/person4.jpg",
      certifications: ["/img/badge2.jpg"],
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            title={member.title}
            profilePic={member.profilePic}
            certifications={member.certifications}
            index={index}
            isInView={isInView}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TeamGrid;
