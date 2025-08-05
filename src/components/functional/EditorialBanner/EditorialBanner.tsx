import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import Tag from "@/components/ui/Tag/Tag";
import { IEditorialBanner } from "@/types/types";
import "./EditorialBanner.css";

export default function EditorialBanner(props: IEditorialBanner) {
  const { backgroundImage, tagText, title, description, ctas, staticImages } = props;

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
            {title}
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