import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect/dist/core";

import {
  IconEmail,
  IconPhone,
  IconLinkedIn,
  IconWhatsApp,
  IconLocation,
} from "./icons";

import personal from "@/app/_mock/personal.json";
import profilePhoto from "@/app/assets/shakir-profile.png";
import { ProfileDots1, ProfileDots2, ProfileDots3, ProfileDots4 } from "./svg";

export default function Header() {
  useEffect(() => {
    new Typewriter("#writing-text", {
      strings: [
        "Senior Software Engineer",
        "Full-Stack & API Engineer",
        "AI Engineer",
        "Cloud & DevOps Engineer",
      ],
      autoStart: true,
      loop: true,
      delay: 40,
    });
  }, []);

  return (
    <header id="contact">
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
                Driven <span className="fw-bolder heading-gradient-we">Software</span> Engineer with 10+ years of hands-on experience building full-stack applications, automating data pipelines, and deploying cloud-based services. I combine technical depth with leadership experience across high-growth SaaS environments and international deployments. I also bring 3+ years of AI engineering experience spanning model evaluation, code review, correctness analysis, prompt quality, and edge-case testing. I enjoy solving ambiguous business problems, mentoring engineers, and delivering impactful software on time.
              </div>
            </div>
            <div className="d-grid gap-2 d-sm-flex flex-wrap text-center text-lg-start mt-2">
              <Link
                href={`tel:${personal.mobileNo}`}
                className="btn btn-outline-dark"
              >
                <IconPhone /> {personal.mobileNo}
              </Link>
              <Link
                href={`mailto:${personal.email}`}
                className="btn btn-outline-primary"
              >
                <IconEmail /> {personal.email}
              </Link>
              <Link
                href={personal.whatsApp}
                target="_blank"
                className="btn btn-outline-success"
              >
                <IconWhatsApp /> Message me on WhatsApp
              </Link>
              <Link
                href={personal.linkedIn}
                target="_blank"
                className="btn btn-outline-primary"
              >
                <IconLinkedIn /> LinkedIn
              </Link>
            </div>
            <p className="fs-6 mt-4 text-center text-lg-start text-dark">
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
