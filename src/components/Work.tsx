import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowDropDown } from "react-icons/md";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "AI Resume Analyzer",
              category: "Full Stack App",
              tools: "React, Node.js, TypeScript, Gemini AI, Firebase",
              link: "https://ai-resume-analyzer-omega-lime.vercel.app/",
              image: "/images/ai-resume.png",
              description: "An AI-powered full-stack AI resume analyzer with candidate and recruiter modes that evaluates resumes against job descriptions, scores ATS compatibility, extracts keywords, and stores analysis history with Firebase authentication."

            },
            {
              name: "Dynamic Deployment Planner",
              category: "Web Application",
              tools: "Next.js, Node.js, TypeScript, JSON",
              link: "https://github.com/JZavala210/Dynamic-Release-Deployment-Planner",
              image: "/images/deployment-planner.png",
              description: "A deployment planning tool that reads JSON dependencies and generates safe deployment orders using topological sorting, complete with a release validation layer."
            }
          ].map((project, index) => (
            <div className="work-box" key={index} onClick={() => window.open(project.link, "_blank")} style={{ cursor: "pointer" }}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>

                <div className="work-desc-dropdown">
                  <div className="work-desc-trigger">
                    <MdArrowDropDown className="work-desc-icon" /> <span>Description</span>
                  </div>
                  <div className="work-desc-content">
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
