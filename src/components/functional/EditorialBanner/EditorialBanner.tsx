"use client";

import Button from "@/components/ui/Button/Button";
import Tag from "@/components/ui/Tag/Tag";
import TypingEffect from "@/components/ui/TypingEffect/TypingEffect";
import { IEditorialBanner } from "@/types/types";
import "./EditorialBanner.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function EditorialBanner(props: IEditorialBanner) {
  const { backgroundImage, tagText, title, description,ctas} = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Smooth animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const fadeInUp = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2
      }
    }
  };

  const slideInLeft = {
    hidden: { 
      x: -80, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  const slideInRight = {
    hidden: { 
      x: 80, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.2,
        delayChildren: 0.6
      }
    }
  };

  // Smooth staggered image animations
  const largeImageVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      y: 60
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        delay: 0.3
      }
    }
  };

  const smallImageVariants = {
    hidden: { 
      scale: 0.85, 
      opacity: 0,
      y: 40,
      x: -30
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1.3,
        delay: 0.6
      }
    }
  };

  const wideImageVariants = {
    hidden: { 
      scale: 0.9, 
      opacity: 0,
      y: 30
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        delay: 0.9
      }
    }
  };

  const tagVariants = {
    hidden: { scale: 0, opacity: 0, y: 30 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  // Fallback to regular section if not mounted (SSR)
  if (!isMounted) {
    return (
      <section
        className="editorial-banner"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="banner-content">
          <div className="banner-text">
            <div className="tag-container">
              <Tag>{tagText}</Tag>
            </div>

            <h1 className="banner-title">
              <TypingEffect 
                text={title} 
                speed={80} 
                delay={2000} 
                loop={true}
              />
            </h1>

            <div className="discriptiongrid">
              <div className="banner-descriptionleft">
                <div className="leftsideinner">
                  <div className="drag-drop-tags">
                    <span className="tag-drag">Drag</span>
                    <span className="tag-drop">Drop</span>
                    <span className="tag-deploy">Deploy</span>
                  </div>

                  <div className="image-container-large">
                    <Image
                      src="/assets/images/workflow.svg"
                      alt="workflow"
                      width={492}
                      height={420}
                       className="responsive-image-large"
                    />
                  </div>

                  <div className="image-container-small">
                    <Image
                      src="/assets/images/integration.svg"
                      alt="integration"
                      width={492}
                      height={220}
                      className="responsive-image-small"
                    />
                  </div>
                </div>
              </div>

              <div className="banner-descriptionRight">
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

                <div className="wide-image-wrapper">
                  <Image
                    src="/assets/images/Dragndrop.svg"
                    alt="drag and drop"
                    width={732}
                    height={504}
                    className="wide-responsive-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className="editorial-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="banner-content">
        <div className="banner-text">
          <motion.div 
            className="tag-container"
            variants={fadeInUp}
          >
            <Tag>{tagText}</Tag>
          </motion.div>

          <motion.h1 
            className="banner-title"
            variants={fadeInUp}
          >
            <TypingEffect 
              text={title} 
              speed={80} 
              delay={2000} 
              loop={true}
            />
          </motion.h1>

          <div className="discriptiongrid">
            <motion.div 
              className="banner-descriptionleft"
              variants={slideInLeft}
            >
              <div className="leftsideinner">
                <motion.div 
                  className="drag-drop-tags"
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.2, delayChildren: 1.2 }}
                >
                  <motion.span 
                    className="tag-drag"
                    variants={tagVariants}
                    transition={{ delay: 0 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Drag
                  </motion.span>
                  <motion.span 
                    className="tag-drop"
                    variants={tagVariants}
                    transition={{ delay: 0.2 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Drop
                  </motion.span>
                  <motion.span 
                    className="tag-deploy"
                    variants={tagVariants}
                    transition={{ delay: 0.4 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Deploy
                  </motion.span>
                </motion.div>

                <motion.div 
                  className="image-container-large"
                  variants={largeImageVariants}
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 3,
                    y: -5,
                    transition: { duration: 0.4 }
                  }}
                >
                  <Image
                    src="/assets/images/workflow.svg"
                    alt="workflow"
                    width={492}
                    height={420}
                     className="responsive-image-large"
                  />
                </motion.div>

                <motion.div 
                  className="image-container-small"
                  variants={smallImageVariants}
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: -3,
                    y: -3,
                    transition: { duration: 0.4 }
                  }}
                >
                  <Image
                    src="/assets/images/integration.svg"
                    alt="integration"
                    width={492}
                    height={220}
                    className="responsive-image-small"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="banner-descriptionRight"
              variants={slideInRight}
            >
              <motion.p 
                className="banner-description"
                variants={fadeInUp}
              >
                {description}
              </motion.p>

              <motion.div 
                className="cta-container"
                variants={fadeInUp}
                transition={{ staggerChildren: 0.1 }}
              >
                {ctas.map((cta, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant={cta.variant}
                      size={cta.size}
                      className={`cta-button ${cta.classname || ""}`}
                    >
                      {cta.title}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="wide-image-wrapper"
                variants={wideImageVariants}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 1,
                  y: -3,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                <Image
                  src="/assets/images/Dragndrop.svg"
                  alt="drag and drop"
                  width={732}
                  height={504}
                  className="wide-responsive-image"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}