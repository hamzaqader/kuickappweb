"use client"
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import Tag from "@/components/ui/Tag/Tag";
import { IEditorialBanner } from "@/types/types";
import { useState, useEffect } from "react";
import "./EditorialBanner.css";

// Custom hook for typing animation with loop
const useTypingEffect = (text: string, speed: number = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // When typing is complete, wait 2 seconds then restart
      const restartTimeout = setTimeout(() => {
        setDisplayedText("");
        setIsComplete(false);
      }, 2000);
      setIsComplete(true);
      return () => clearTimeout(restartTimeout);
    }
  }, [displayedText, text, speed]);

  return { displayedText, isComplete };
};

export default function EditorialBanner(props: IEditorialBanner) {
  const { backgroundImage, tagText, title, description, ctas, staticImages } = props;
  
  // Use the typing effect hook
  const { displayedText, isComplete } = useTypingEffect(title, 80);

  return (
    <section
      className="editorial-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="banner-wrapper">
        <div className="banner-content">
          <div className="tag-container">
            <Tag>{tagText}</Tag>
          </div>

          <h1 className="banner-title">
            {displayedText}
            <span className={`typing-cursor ${isComplete ? 'blink' : ''}`}>_</span>
          </h1>

          <div className="content-row">
            <div className="content-left">
              <div className="drag-drop-tags">
                <span className="tag-drag">Drag</span>
                <span className="tag-drop">Drop</span>
                <span className="tag-deploy">Deploy</span>
              </div>
            </div>
            <div className="content-right">
              <p className="banner-description">{description}</p>
              <div className="cta-container">
                {ctas.map((cta, index) => (
                  <Button
                    key={index}
                    variant={cta.variant}
                    size={cta.size}
                    className={`cta-button ${cta.classname || ""}`}
                  >
                    {cta.title}
                  </Button>
                ))}
              </div>
              
              <div className="dragndrop-image-container">
                <Image
                  src="/assets/images/Dragndrop.svg"
                  alt="Drag and Drop illustration"
                  width={732}
                  height={504}
                  className="dragndrop-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Workflow Image */}
          <div className="workflow-image-container">
            <Image
              src="/assets/images/workflow.svg"
              alt="Workflow illustration"
              width={492}
              height={420}
              className="workflow-image"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 492px"
            />
          </div>

          {/* Integration Image */}
          <div className="integration-image-container">
            <Image
              src="/assets/images/integration.svg"
              alt="Integration illustration"
              width={492}
              height={420}
              className="integration-image"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 492px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}