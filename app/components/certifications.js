import React from "react";

import certifications from "@/app/_mock/certifications.json";
import Link from "next/link";
import { IconLink } from "./icons";
import { dateFormat } from "../utils/utils";

export default function Certifications() {
  const title = "📃 Certifications";
  return (
    <section id="certifications">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="fw-bolder heading-gradient mb-0 text-uppercase">
          {title}
        </h4>
      </div>
      {certifications.map((certification, i) => (
        <div className="card shadow border-0 rounded mb-2" key={i}>
          <div className="card-body p-3">
            <div className="fw-bolder">{certification.name}</div>
            <div className="fw-bolder">{certification.source}</div>
            <div className="text-muted">
              Issued {dateFormat(certification.issued)}{" "}
              {certification.expired
                ? ` — Expired ${dateFormat(certification.expired)}`
                : null}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
