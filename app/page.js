"use client";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Experience from "./components/experience";
import Educations from "./components/educations";
import TechnicalSkills from "./components/technical-skills";
import Certifications from "./components/certifications";
import Projects from "./components/projects";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <main className="flex-shrink-0">
      <Navbar />
      <Header />
      <div className="container px-3 pb-5">
        <div className="row gx-5 align-items-stretch">
          <div className="col-md-7 d-flex flex-column">
            <Experience />
            <hr className="mt-4 pt-4" />
            <Projects />
          </div>
          <div className="col-md-5 d-flex flex-column">
            <TechnicalSkills />
            <hr className="mt-4 pt-4" />
            <Educations />
            <hr className="mt-4 pt-4" />
            <Certifications />
            <hr className="mt-4 pt-4" />
            <section>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h4 className="fw-bolder heading-gradient mb-0 text-uppercase">
                  📃 Archievement
                </h4>
              </div>
              <div className="card shadow border-0 rounded mb-2" key="1">
                <div className="card-body p-3">
                  <div className="fs-5 fw-bolder">Built scalable web applications</div>
                </div>
              </div>
              <div className="card shadow border-0 rounded mb-2" key="2">
                <div className="card-body p-3">
                  <div className="fs-5 fw-bolder">Led development of multilingual platforms</div>
                </div>
              </div>
              <div className="card shadow border-0 rounded mb-2" key="3">
                <div className="card-body p-3">
                  <div className="fs-5 fw-bolder">Mentored junior developers</div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <hr className="mt-4 pt-4" />
      </div>
    </main>
  );
}
