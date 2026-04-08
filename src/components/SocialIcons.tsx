import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    const rafIds: number[] = [];
    const cleanupFns: (() => void)[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = rect.width / 2;
      let currentY = rect.height / 2;
      let rafId: number;
      let isHovering = false;

      const updatePosition = () => {
        const dx = mouseX - currentX;
        const dy = mouseY - currentY;

        // Only animate when hovering or still settling
        if (isHovering || Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
          currentX += dx * 0.1;
          currentY += dy * 0.1;
          link.style.setProperty("--siLeft", `${currentX}px`);
          link.style.setProperty("--siTop", `${currentY}px`);
        }

        rafId = requestAnimationFrame(updatePosition);
      };

      rafId = requestAnimationFrame(updatePosition);
      rafIds.push(rafId);

      const onMouseMove = (e: MouseEvent) => {
        const updatedRect = elem.getBoundingClientRect();
        const x = e.clientX - updatedRect.left;
        const y = e.clientY - updatedRect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
          isHovering = true;
        } else {
          mouseX = updatedRect.width / 2;
          mouseY = updatedRect.height / 2;
          isHovering = false;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      cleanupFns.push(() => {
        cancelAnimationFrame(rafId);
        document.removeEventListener("mousemove", onMouseMove);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/dhruvsaliann" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://linkedin.com/in/dhruvsalian" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://x.com/dhruvsaliann" target="_blank">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/dhruvsalian_" target="_blank">
            <FaInstagram />
          </a>
        </span>
      </div>
      <a 
        className="resume-button" 
        href="/DHRUV_SALIAN_RESUMEE.pdf" 
        target="_blank" 
        rel="noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
