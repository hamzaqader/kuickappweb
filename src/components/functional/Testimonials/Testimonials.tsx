"use client";

import { ITestimonials } from "@/types/types";
import { motion } from "framer-motion";

export default function Testimonials(props: ITestimonials) {
  const { title, subtitle, userAvatars, testimonials } = props;

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

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
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
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  return (
    <motion.section 
      className="py-16 px-4 sm:px-8 md:px-12 lg:px-[164px] bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6"
          variants={headerVariants}
        >
          <div className="lg:flex-1">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 lg:max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          </div>
          
          {/* User Avatars */}
          <motion.div 
            className="flex items-center gap-1 lg:flex-shrink-0"
            variants={itemVariants}
          >
            {userAvatars.map((avatar, index) => (
              <motion.div 
                key={index} 
                className={`relative ${index > 0 ? '-ml-3' : ''}`}
                variants={avatarVariants}
                custom={index}
                whileHover={{ 
                  scale: 1.2, 
                  zIndex: 10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                  {avatar ? (
                    <img 
                      src={avatar} 
                      alt={`User ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    // Simple user avatar SVG placeholder
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path 
                        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" 
                        fill="currentColor"
                      />
                      <path 
                        d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" 
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={gridVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Company Avatar */}
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {testimonial.avatar ? (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.companyName}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    // Company building icon as placeholder
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-500"
                    >
                      <path 
                        d="M3 21H21V19H19V10H15V12H13V6H11V4C11 3.45 10.55 3 10 3H8C7.45 3 7 3.45 7 4V8H5V21H3ZM9 5H9V7H9V5ZM9 9H9V11H9V9ZM9 13H9V15H9V13ZM9 17H9V19H9V17ZM7 17H5V19H7V17ZM7 13H5V15H7V13ZM7 9H5V11H7V9ZM15 14H13V16H15V14ZM15 18H13V20H15V18ZM17 14H19V16H17V14ZM17 18H19V20H17V18Z" 
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonial.companyName}
                </h3>
              </motion.div>
              
              {/* Quote */}
              <motion.blockquote 
                className="text-gray-700 text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                "{testimonial.quote}"
              </motion.blockquote>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
