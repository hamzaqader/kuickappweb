"use client";

import Button from "@/components/ui/Button/Button";
import Tag from "@/components/ui/Tag/Tag";
import {
  IEditorialSingleColumnData,
} from "@/types/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";


export default function EditorialSingleColumn(props: IEditorialSingleColumnData) {
  const { tagline, title, description, image, ctas } = props;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.3
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.15,
        delayChildren: 0.4
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

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-[164px] mb-[240px]">
      <motion.section 
        className="bg-[#F1F8FE] rounded-3xl overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-end gap-12">
          <motion.div 
            className="w-full lg:w-1/2 relative aspect-[4/3] bottom-0"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.4 }
            }}
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="absolute"
              style={{
                bottom: image.position?.bottom,
                left: image.position?.left,
              }}
            />
          </motion.div>

          <motion.div 
            className="w-full py-12 pr-[85px] lg:w-1/2 text-center lg:text-left"
            variants={contentVariants}
          >
            <motion.div className="mb-[24px]" variants={itemVariants}>
              <Tag className="!py-1 !px-2">{tagline}</Tag>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-[40px] font-semibold mb-6"
              variants={itemVariants}
            >
              {title}
            </motion.h2>

            <motion.p 
              className="text-base font-light mb-8 max-w-xl"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {ctas.map((btn, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant={btn.variant}
                    size={btn.size}
                    className={btn.classname || ""}
                  >
                    {btn.title}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
