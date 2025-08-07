"use client";

import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { IFeatures } from "@/types/types";
import "./Features.css";
import { motion } from "framer-motion";

export default function Features(props: IFeatures) {
  const { tagline, title, subtitle, features, ctas } = props;

  // Background colors for each feature card to match the design
  const cardBackgrounds = [
    "feature-card-pink", // Drag n Drop - pink with blue border
    "feature-card-yellow", // Workflow Automation - yellow
    "feature-card-gray", // Reporting & Analytics - light gray
    "feature-card-blue" // Advanced Security - light blue
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  return (
    <motion.section 
      className="features-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="features-container">
        {/* Header */}
        <motion.div className="features-header" variants={headerVariants}>
          <motion.h2 className="features-title" variants={itemVariants}>
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p className="features-subtitle" variants={itemVariants}>
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {ctas && ctas.length > 0 && (
          <motion.div className="features-ctas" variants={itemVariants}>
            {ctas.map((cta, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant={cta.variant}
                  size={cta.size}
                  className={cta.classname || ""}
                >
                  {cta.title}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div className="features-grid" variants={gridVariants}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`feature-card ${cardBackgrounds[index]}`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="feature-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
              
              <motion.div 
                className="feature-image-container"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src={feature.image.url}
                  alt={feature.image.alt}
                  width={feature.image.width}
                  height={feature.image.height}
                  className="feature-image"
                  sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 300px"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}