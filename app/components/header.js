import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect/dist/core";

import {
  IconEmail,
  IconPhone,
  IconLinkedIn,
  IconWhatsApp,
  IconGithub,
  IconLocation,
  IconCalender,
} from "./icons";

import personal from "@/app/_mock/personal.json";
import profilePhoto from "@/app/assets/shakir-profile.png";
import { ProfileDots1, ProfileDots2, ProfileDots3, ProfileDots4 } from "./svg";

export default function Header() {
  const links = [
    {
      id: "email",
      href: `mailto:${personal.email}`,
      className: "text-primary",
      icon: <IconEmail />,
    },
    {
      id: "phone",
      href: `tel:${personal.mobileNo}`,
      className: "text-primary",
      icon: <IconPhone />,
    },
    {
      id: "whatsApp",
      href: personal.whatsApp,
      className: "text-success",
      icon: <IconWhatsApp />,
    },
    {
      id: "linkedIn",
      href: personal.linkedIn,
      className: "text-primary",
      icon: <IconLinkedIn />,
    },
    {
      id: "github",
      href: personal.github,
      className: "text-dark",
      icon: <IconGithub />,
    },
  ];

  useEffect(() => {
    new Typewriter("#writing-text", {
      strings: [
        "Full Stack Developer ‍💻",
        "Front-End Developer ‍💻",
        "Back-End Developer ‍💻",
        // "React Expert ‍💻",
        // "Node.js Expert ‍💻",
        // "Code Enthusiast 💻",
        // "Problem Solver 🧩",
      ],
      autoStart: true,
      loop: true,
      delay: 40,
    });
  }, []);

  return (
    <header>
      <div className="container pb-2">
        <div className="row gx-5 align-items-center">
          <div className="col-md-6 mb-4">
            <div className="text-xxl-start">
              <div className="fs-1 heading-dark">Hi, I'm {personal?.name}</div>
              <h1 className="display-6 fw-bolder">
                <span
                  id="writing-text"
                  className="heading-gradient d-inline"
                ></span>
              </h1>
              <div className="fs-6 text-dark mb-2">
                {/* <span className="fw-bolder heading-gradient-we">
                  React, Node & PHP
                </span>{" "}
                expert. */}
                As a Senior <span className="fw-bolder heading-gradient-we">FullStack</span>. Engineer with 8 years of hands-on experience in building web/mobile applications, I expect I will be leveraging my experiences to make the most valuable and trend leading products. I am passionate about generating creative solutions for business / technical problems by actively communicating with the stakeholders and applying latest advanced trends and technologies. I look forward to continue to take on difficult challenges, building impactful applications well on time, and often in the face of significant obstacles.
              </div>
            </div>
            {/* <div className="fs-4 text-center text-lg-start mt-4">
              {links.map((link) => (
                <Link
                  key={link.id}
                  className={`me-3 ${link.className}`}
                  target="_blank"
                  href={link.href}
                >
                  {link.icon}
                </Link>
              ))}
            </div> */}
            <div className="d-grid gap-2 d-sm-flex text-center text-lg-start mt-2">
              <Link
                href={`tel:${personal.mobileNo}`}
                target="_blank"
                className="btn btn-outline-dark"
              >
                <IconPhone /> {personal.mobileNo}
              </Link>
              <Link
                href={personal.whatsApp}
                target="_blank"
                className="btn btn-outline-success"
              >
                <IconWhatsApp /> Message me on WhatsApp
              </Link>
            </div>
            <p className="fs-6 mt-4 text-center text-lg-start text-dark">
              <span className="me-4">
                <IconCalender />
                <span style={{ verticalAlign: "middle" }}> {personal.age}</span>
              </span>
              <span className="me-4">
                <IconLocation />
                <span style={{ verticalAlign: "middle" }}>
                  {" "}
                  {personal.location}
                </span>
              </span>
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <div className="d-flex justify-content-center mt-xxl-0">
              <div className="profile background-gradient">
                <div className="profile-photo">
                  <Image
                    className="profile-img"
                    alt={personal.name}
                    src={profilePhoto}
                    fill
                    sizes="(max-width: 768px) 75vw, 25rem"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
                <div className="dots-1">
                  <ProfileDots1 />
                </div>
                <div className="dots-2">
                  <ProfileDots2 />
                </div>
                <div className="dots-3">
                  <ProfileDots3 />
                </div>
                <div className="dots-4">
                  <ProfileDots4 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
