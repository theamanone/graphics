"use client";

import React from "react";
import { motion } from "framer-motion";

const ArtisticGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Artistic Base Grid */}
      <div 
        className="absolute inset-0 opacity-[0.07]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #60A5FA 1px, transparent 1px),
            linear-gradient(to bottom, #60A5FA 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Diagonal Grid Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #60A5FA 1px, transparent 1px),
            linear-gradient(-45deg, #60A5FA 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 50,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Moving Highlight Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, transparent 0%, rgba(96, 165, 250, 0.03) 50%, transparent 100%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 200%'],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/40 to-white" />
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-white overflow-hidden pt-6 md:pt-0">
      <ArtisticGrid />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 md:px-6 md:py-3 rounded-full text-sm font-medium shadow-lg">
                Professional Printing Services
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Transform Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Ideas
              </span>{" "}
              Into Reality
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Elevate your brand with our premium printing solutions. From custom designs to professional prints, we bring excellence to every project.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center mt-6 md:mt-8"
            >
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-center text-sm md:text-base"
              >
                Get Started Now
              </a>
              <a 
                href="#portfolio" 
                className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-300 font-medium text-center text-sm md:text-base"
              >
                View Our Work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;