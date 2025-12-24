'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Luxury Penthouse',
    description: 'Modern luxury penthouse with panoramic city views',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2942&auto=format&fit=crop',
  },
  {
    title: 'Minimalist Office',
    description: 'Clean and productive workspace design',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2938&auto=format&fit=crop',
  },
  {
    title: 'Cozy Living Room',
    description: 'Warm and inviting family space',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop',
  },
];

export function ProjectsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    },
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 inline-block">Our Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Recent Projects</h2>
          <p className="text-muted-foreground text-lg">Explore our latest interior design projects that showcase our creativity and attention to detail.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-card shadow-lg"
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button className="px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
