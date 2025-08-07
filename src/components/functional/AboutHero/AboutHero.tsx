"use client";

import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import Tag from "@/components/ui/Tag/Tag";
import { IAboutHero } from "@/types/types";
import { motion } from "framer-motion";

export default function AboutHero(props: IAboutHero) {
  const { tagText, title, description, image, ctas } = props;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  return (
    <motion.section 
      className="mt-[100px] pt-24 pb-16 px-4 sm:px-8 md:px-12 lg:px-[164px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Section */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col"
            variants={contentVariants}
          >
            {tagText && (
              <motion.div className="mb-6" variants={itemVariants}>
                <Tag>{tagText}</Tag>
              </motion.div>
            )}
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={titleVariants}
            >
              {title}
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
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
                    className={`${cta.classname || ""}`}
                  >
                    {cta.title}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.4 }
            }}
          >
            <div className="relative">
              <Image
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-contain max-w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}