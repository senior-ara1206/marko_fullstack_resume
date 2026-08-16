import Image from "next/image";
import Link from "next/link";
import React from "react";

import personal from "@/app/_mock/personal.json";
import photo from "@/app/assets/shakir-photo.png";

const links = [
  { id: "experience", title: "💼 Experience" },
  { id: "skills", title: "👨‍💻 Skills" },
  { id: "education", title: "🎓 Education" },
  { id: "certifications", title: "📃 Certifications" },
  { id: "contact", title: "📞 Contact Me" },
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light site-navbar py-3">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <div className="d-flex align-items-center gap-2 px-2">
            <div>
              <Image width={30} height={30} alt={personal.name} src={photo} />
            </div>
            <div className="d-flex flex-column">
              <div className="fw-bolder heading-gradient">{personal.name}</div>
            </div>
          </div>
          <div className="badge background-gradient mb-2 fs-6">
            {personal.tagline}
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-content"
          aria-controls="navbar-content"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon small"></span>
        </button>
        <div
          className="collapse navbar-collapse navbar-container"
          id="navbar-content"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bolder navbar-ul">
            {links.map((link, i) => (
              <li className="nav-item navbar-li" key={i}>
                <a className="nav-link navbar-link" href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
