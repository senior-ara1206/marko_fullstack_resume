import React from "react";

import Link from "next/link";
import { IconLink } from "./icons";
import { dateFormat } from "../utils/utils";

import experiences from "@/app/_mock/experiences.json";

export default function Experience() {
  const title = "💼 Experience";
  return (
    <section id="experience">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="fw-bolder heading-gradient mb-0 text-uppercase">
          {title}
        </h4>
      </div>
      {experiences.map((experience, i) => (
        <div className="card shadow border-0 rounded mb-2" key={i}>
          <div className="card-body p-3">
            <div className="fs-5 fw-bolder">{experience.position}</div>
            <div className="small fw-bolder">
              {experience.companyURL ? (
                <Link target="_blank" href={experience.companyURL}>
                  {experience.companyName} <IconLink />
                </Link>
              ) : (
                experience.companyName
              )}
              {" · "}
              {experience.location}
            </div>
            <div className="small text-muted">
              {dateFormat(experience.start)} {" — "}
              {experience.present ? (
                <span className="fst-italic">Present</span>
              ) : (
                dateFormat(experience.end)
              )}
            </div>
            {experience.points?.length ? (
              <ul className="small mt-3 mb-0 ps-3">
                {experience.points.map((point, pointIndex) => (
                  <li className="mb-1" key={pointIndex}>
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      ))}
    </section>
  );
}
