'use client'

import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { useRef } from 'react'

export function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Parallax effect for background
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  
  // Text reveal animation
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  }

  const item: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: 'blur(5px)' 
    },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0)',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  }

  // Floating animation for decorative elements
  const floating: Variants = {
    initial: { y: 0 },
    animate: { 
      y: [0, -20, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut' as const  // Using 'as const' to ensure type safety
      }
    }
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/60 dark:from-background/95 dark:via-background/85 dark:to-background/70" />
        <motion.div 
          style={{ y: yBg }}
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center scale-110"
        />
        
        {/* Animated floating elements */}
        <motion.div 
          variants={floating}
          initial="initial"
          animate="animate"
          className="absolute top-[20%] right-[15%] sm:top-1/3 sm:right-1/3 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-primary/10 backdrop-blur-md border-2 border-primary/30 shadow-lg shadow-primary/10 hover:shadow-primary/20 flex items-center justify-center p-4 text-center transition-all duration-300 hover:scale-105"
        >
          <span className="text-xs sm:text-sm font-semibold text-primary/90">Home Decor</span>
        </motion.div>
        <motion.div 
          variants={floating}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5, duration: 7 }}
          className="absolute bottom-[25%] right-[10%] sm:bottom-1/3 sm:right-1/4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-primary/10 backdrop-blur-md border-2 border-primary/30 shadow-lg shadow-primary/10 hover:shadow-primary/20 flex items-center justify-center p-4 text-center transition-all duration-300 hover:scale-105"
        >
          <span className="text-sm sm:text-base font-semibold text-primary/90">Luxury Villas</span>
        </motion.div>
        <motion.div 
          variants={floating}
          initial="initial"
          animate="animate"
          transition={{ delay: 1, duration: 6 }}
          className="absolute top-[30%] right-[5%] sm:top-1/3 sm:right-1/5 w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full bg-primary/10 backdrop-blur-md border-2 border-primary/30 shadow-lg shadow-primary/10 hover:shadow-primary/20 flex items-center justify-center p-3 text-center transition-all duration-300 hover:scale-105"
        >
          <span className="text-xs sm:text-sm font-semibold text-primary/90">Modern Flats</span>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <div className="overflow-hidden">
            <motion.h1 
              variants={item}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground"
            >
              <motion.span 
                className="inline-block text-shadow-3d"
                style={{
                  textShadow: '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)'
                }}
                whileHover={{ 
                  scale: 1.02,
                  textShadow: '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 10px rgba(0,0,0,.2), 0 1px 3px rgba(0,0,0,.4), 0 3px 5px rgba(0,0,0,.3), 0 5px 10px rgba(0,0,0,.35), 0 10px 10px rgba(0,0,0,.3), 0 20px 20px rgba(0,0,0,.25)'
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300,
                  textShadow: { duration: 0.3 }
                }}
              >
                Transform Your Space
              </motion.span>
              <br />
              <motion.span 
                className="text-primary inline-block text-shadow-3d"
                style={{
                  textShadow: '0 1px 0 rgba(0,0,0,0.1), 0 2px 0 rgba(0,0,0,0.1), 0 3px 0 rgba(0,0,0,0.1), 0 4px 0 rgba(0,0,0,0.1), 0 5px 0 rgba(0,0,0,0.1), 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)'
                }}
                whileHover={{ 
                  scale: 1.02,
                  textShadow: '0 1px 0 rgba(0,0,0,0.1), 0 2px 0 rgba(0,0,0,0.1), 0 3px 0 rgba(0,0,0,0.1), 0 4px 0 rgba(0,0,0,0.1), 0 5px 0 rgba(0,0,0,0.1), 0 6px 1px rgba(0,0,0,.1), 0 0 10px rgba(var(--primary), 0.3), 0 1px 3px rgba(0,0,0,.4), 0 3px 5px rgba(0,0,0,.3), 0 5px 10px rgba(0,0,0,.35), 0 10px 10px rgba(0,0,0,.3), 0 20px 20px rgba(0,0,0,.25)'
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300,
                  textShadow: { duration: 0.3 }
                }}
              >
                into a Masterpiece
              </motion.span>
            </motion.h1>
          </div>
          
          <motion.div variants={item} className="overflow-hidden">
            <motion.p 
              className="hidden md:block text-lg md:text-xl mb-8 max-w-2xl leading-relaxed font-medium"
              style={{
                color: 'hsl(0, 0%, 98%)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.7)',
                WebkitFontSmoothing: 'subpixel-antialiased',
                MozOsxFontSmoothing: 'auto',
                fontWeight: 800,
                letterSpacing: '0.2px',
                lineHeight: '1.7',
                textWrap: 'pretty'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.4,
                  duration: 0.8,
                  ease: [0.16, 0.77, 0.47, 0.99]
                }
              }}
            >
              Discover bespoke interior design solutions that blend elegance with functionality. 
              Our expert designers craft spaces that reflect your unique style and personality.
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              whileHover={{ 
                scale: 1.03,
                transition: { 
                  type: 'spring',
                  stiffness: 400,
                  damping: 10
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.button
                className="relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg overflow-hidden group"
                initial={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                whileHover={{ 
                  boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.2)',
                }}
              >
                <span className="relative z-10">Book a Consultation</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
              </motion.button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.03,
                transition: { 
                  type: 'spring',
                  stiffness: 400,
                  damping: 10
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.button
                className="relative px-8 py-4 border-2 border-primary text-primary font-medium rounded-xl hover:bg-primary/5 transition-colors duration-300 group overflow-hidden"
                initial={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}
                whileHover={{ 
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
              >
                <span className="relative z-10">View Our Portfolio</span>
                <motion.span 
                  className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={item}
            className="mt-16 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
          >
            <motion.div 
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <motion.span 
                  className="text-primary font-bold text-lg"
                  initial={{ scale: 1 }}
                  whileInView={{ 
                    scale: [1, 1.2, 1],
                    transition: { 
                      duration: 1,
                      times: [0, 0.2, 1],
                      repeat: Infinity,
                      repeatDelay: 2
                    }
                  }}
                >
                  10+
                </motion.span>
              </motion.div>
              <span className="font-medium">Years Experience</span>
            </motion.div>
            
            <div className="h-8 w-px bg-border" />
            
            <motion.div 
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300"
                whileHover={{ rotate: -5, scale: 1.1 }}
              >
                <motion.span 
                  className="text-primary font-bold text-lg"
                  initial={{ scale: 1 }}
                  whileInView={{ 
                    scale: [1, 1.3, 1],
                    transition: { 
                      duration: 1,
                      times: [0, 0.2, 1],
                      delay: 0.5,
                      repeat: Infinity,
                      repeatDelay: 2
                    }
                  }}
                >
                  500+
                </motion.span>
              </motion.div>
              <span className="font-medium">Projects Completed</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: [20, 0, 0, -10],
        }}
        transition={{ 
          duration: 4,
          times: [0, 0.1, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
      >
        <motion.span 
          className="text-sm text-muted-foreground mb-3 group-hover:text-primary transition-colors"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.span>
        <motion.div 
          className="w-8 h-14 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1 group-hover:border-primary/50 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="w-1 h-3 bg-muted-foreground/70 rounded-full group-hover:bg-primary transition-colors"
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.8, 
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
