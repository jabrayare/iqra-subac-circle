'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  animated?: boolean
}

export default function Logo({ className = "h-10 w-10", animated = true }: LogoProps) {
  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const mosqueVariants = {
    initial: { pathLength: 0 },
    animate: { 
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  }

  const crescentVariants = {
    initial: { rotate: -90, opacity: 0 },
    animate: { 
      rotate: 0, 
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  }

  if (!animated) {
    return (
      <div className={`${className} relative`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Main mosque structure */}
          <path
            d="M20 75 L20 55 Q20 50 25 50 L75 50 Q80 50 80 55 L80 75 L20 75"
            className="fill-deep-ocean-blue dark:fill-warm-sunset-orange"
          />
          
          {/* Central dome */}
          <circle
            cx="50"
            cy="40"
            r="15"
            className="fill-deep-ocean-blue dark:fill-warm-sunset-orange"
          />
          
          {/* Minaret left */}
          <rect
            x="30"
            y="25"
            width="6"
            height="25"
            className="fill-deep-ocean-blue dark:fill-warm-sunset-orange"
          />
          
          {/* Minaret right */}
          <rect
            x="64"
            y="25"
            width="6"
            height="25"
            className="fill-deep-ocean-blue dark:fill-warm-sunset-orange"
          />
          
          {/* Crescent moon */}
          <path
            d="M48 25 Q45 20 48 15 Q52 18 48 25"
            className="fill-warm-sunset-orange dark:fill-islamic-gold"
          />
          
          {/* Star */}
          <circle
            cx="55"
            cy="20"
            r="2"
            className="fill-warm-sunset-orange dark:fill-islamic-gold"
          />
          
          {/* Entrance arch */}
          <path
            d="M45 75 L45 65 Q45 60 50 60 Q55 60 55 65 L55 75"
            className="fill-white dark:fill-gray-800"
          />
        </svg>
      </div>
    )
  }

  return (
    <motion.div
      className={`${className} relative cursor-pointer`}
      variants={logoVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Main mosque structure */}
        <motion.path
          d="M20 75 L20 55 Q20 50 25 50 L75 50 Q80 50 80 55 L80 75 L20 75"
          className="fill-deep-ocean-blue dark:fill-warm-sunset-orange"
          variants={mosqueVariants}
          initial="initial"
          animate="animate"
        />
        
        {/* Central dome */}
        <motion.circle
          cx="50"
          cy="40"
          r="15"
          className="fill-deep-ocean-blue dark:fill-warm-sunset-orange"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        
        {/* Minaret left */}
        <motion.rect
          x="30"
          y="25"
          width="6"
          height="25"
          className="fill-deep-ocean-blue dark:fill-warm-sunset-orange"
          initial={{ height: 0 }}
          animate={{ height: 25 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />
        
        {/* Minaret right */}
        <motion.rect
          x="64"
          y="25"
          width="6"
          height="25"
          className="fill-deep-ocean-blue dark:fill-warm-sunset-orange"
          initial={{ height: 0 }}
          animate={{ height: 25 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />
        
        {/* Crescent moon */}
        <motion.path
          d="M48 25 Q45 20 48 15 Q52 18 48 25"
          className="fill-warm-sunset-orange dark:fill-islamic-gold"
          variants={crescentVariants}
          initial="initial"
          animate="animate"
        />
        
        {/* Star */}
        <motion.circle
          cx="55"
          cy="20"
          r="2"
          className="fill-warm-sunset-orange dark:fill-islamic-gold"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0.7, 1], 
            scale: [0, 1.2, 1, 1.1, 1],
          }}
          transition={{ 
            duration: 2,
            delay: 1,
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
        
        {/* Entrance arch */}
        <motion.path
          d="M45 75 L45 65 Q45 60 50 60 Q55 60 55 65 L55 75"
          className="fill-white dark:fill-gray-800"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          style={{ transformOrigin: 'bottom' }}
        />
      </svg>
    </motion.div>
  )
}