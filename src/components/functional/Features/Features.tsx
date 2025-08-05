import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { IFeatures } from "@/types/types";
import "./Features.css";

export default function Features(props: IFeatures) {
  const { tagline, title, subtitle, features, ctas } = props;

  // Background colors for each feature card to match the design
  const cardBackgrounds = [
    "feature-card-pink", // Drag n Drop - pink with blue border
    "feature-card-yellow", // Workflow Automation - yellow
    "feature-card-gray", // Reporting & Analytics - light gray
    "feature-card-blue" // Advanced Security - light blue
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {/* Header */}
        <div className="features-header">
          <h2 className="features-title">{title}</h2>
          {subtitle && (
            <p className="features-subtitle">{subtitle}</p>
          )}
        </div>


        {ctas && ctas.length > 0 && (
          <div className="features-ctas">
            {ctas.map((cta, index) => (
              <Button
                key={index}
                variant={cta.variant}
                size={cta.size}
                className={cta.classname || ""}
              >
                {cta.title}
              </Button>
            ))}
          </div>
        )}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${cardBackgrounds[index]}`}
            >
       
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              
     
              <div className="feature-image-container">
                <Image
                  src={feature.image.url}
                  alt={feature.image.alt}
                  width={feature.image.width}
                  height={feature.image.height}
                  className="feature-image"
                  // sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 300px"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}