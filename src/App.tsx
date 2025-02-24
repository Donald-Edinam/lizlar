import { Linkedin, Calendar, MapPin, GraduationCap, Globe, Users, Zap, Database, Building2, Menu, X } from 'lucide-react';
import NewPhoto from "../src/assets/lizlar.jpg";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PitchVideo from "./assets/lizlar.mp4";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const skills = [
    { name: 'Salesforce Administration', level: 90 },
    { name: 'CRM Management', level: 95 },
    { name: 'Process Automation', level: 85 },
    { name: 'Data Analytics', level: 80 }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6 md:w-8 md:h-8" />, value: '500+', label: 'Users Managed' },
    { icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />, value: '100+', label: 'Automations Built' },
    { icon: <Database className="w-6 h-6 md:w-8 md:h-8" />, value: '50+', label: 'CRM Projects' },
    { icon: <Building2 className="w-6 h-6 md:w-8 md:h-8" />, value: '25+', label: 'Clients Served' }
  ];

  // Video ref and inView state for lazy loading
  const videoSectionRef = useRef(null);
  const isVideoSectionInView = useInView(videoSectionRef, { once: false, amount: 0.3 });
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Control video playback based on visibility
  useEffect(() => {
    if (isVideoSectionInView && !videoLoaded) {
      setVideoLoaded(true);
    }
  }, [isVideoSectionInView, videoLoaded]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const skillBarVariant = {
    hidden: { width: 0 },
    visible: level => ({
      width: `${level}%`,
      transition: { duration: 1, ease: "easeOut" }
    })
  };

  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 p-4 sm:p-6 z-50 bg-gray-900/80 backdrop-blur-sm"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-2 sm:gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={NewPhoto}
              alt="Elizabeth Lartey"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            />
            <span className="font-semibold text-sm sm:text-base">Elizabeth Lartey</span>
          </motion.div>
          
          {/* Desktop Menu */}
          <motion.div 
            className="hidden md:flex gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.a 
              href="https://www.linkedin.com/in/lizlar" 
              className="text-gray-400 hover:text-red-500 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              variants={fadeIn}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-400" />
            ) : (
              <Menu className="w-6 h-6 text-gray-400" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900 z-40 pt-20 px-6"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="flex flex-col gap-6 items-center">
              <motion.a 
                href="https://www.linkedin.com/in/lizlar" 
                className="flex items-center gap-3 text-xl py-2"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.button
                className="mt-8 px-6 py-3 rounded-full bg-red-500 text-white"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Close Menu
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <motion.img
            src={NewPhoto}
            alt="Elizabeth Lartey"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            I'M A SALESFORCE<br />
            <motion.span 
              className="text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              SOLUTIONS ARCHITECT
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Bridging technology and strategy to create impactful CRM solutions that drive business growth and enhance customer experiences.
          </motion.p>
          <motion.button 
            className="bg-red-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-red-600 transition-colors text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LEARN MORE
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            ABOUT ME
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.img
              src={NewPhoto}
              alt="Elizabeth Lartey"
              className="rounded-lg shadow-2xl w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <motion.p 
                className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base"
                variants={fadeInUp}
              >
                Hi, my name is Elizabeth Lartey. I have a strong background in customer relationship management (CRM), business development, and digital transformation, with a focus on tourism, education, and job creation.
                My top skills include Salesforce administration, data-driven decision-making, and process automation. I excel at optimizing workflows, enhancing customer experiences, and driving business growth through technology.
                What sets me apart is my ability to bridge technology and strategy—I don't just implement Salesforce; I tailor solutions that create real impact. My expertise helps businesses scale efficiently, improve customer engagement, and boost productivity.
                I bring innovation, efficiency, and problem-solving to any team, ensuring businesses get the most out of Salesforce while staying competitive in a digital world.
                I'm looking for opportunities to apply my skills in a dynamic organization or collaborate on projects where Salesforce can drive growth. Let's connect to explore how I can add value to your business!
              </motion.p>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                variants={staggerContainer}
              >
                <motion.div 
                  className="flex items-center gap-3"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <Calendar className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400">Experience</div>
                    <div className="text-sm sm:text-base">3+ Years</div>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400">Location</div>
                    <div className="text-sm sm:text-base">Remote</div>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <GraduationCap className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400">Certifications</div>
                    <div className="text-sm sm:text-base">Salesforce Admin</div>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <Globe className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400">Languages</div>
                    <div className="text-sm sm:text-base">English</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            SKILL AREA
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <motion.div 
                className="flex flex-wrap gap-2 mb-8 sm:mb-12"
                variants={staggerContainer}
              >
                {['SALESFORCE', 'CRM', 'AUTOMATION', 'DATA ANALYTICS', 'BUSINESS DEVELOPMENT',
                  'PROCESS OPTIMIZATION', 'CUSTOMER EXPERIENCE', 'DIGITAL TRANSFORMATION'].map((skill) => (
                    <motion.span 
                      key={skill} 
                      className="bg-red-500 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
              </motion.div>
              <motion.p 
                className="text-gray-300 text-sm sm:text-base"
                variants={fadeInUp}
              >
                Expertise in implementing and optimizing Salesforce solutions, automating business processes,
                and driving digital transformation initiatives.
              </motion.p>
            </motion.div>
            <motion.div 
              className="space-y-4 sm:space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={fadeInUp}>
                  <div className="flex justify-between mb-1 sm:mb-2 text-sm sm:text-base">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-red-500 rounded-full"
                      custom={skill.level}
                      variants={skillBarVariant}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="inline-block p-3 sm:p-4 rounded-full bg-red-500/10 text-red-500 mb-3 sm:mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            PORTFOLIO
          </motion.h2>
          <motion.div 
            className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.a 
              href="#" 
              className="block group"
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 group-hover:text-red-500 transition-colors">
                  Phase 2 Project Video
                </h3>
                <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                  Watch our team's project presentation and demo
                </p>
                <motion.span 
                  className="text-red-500 text-xs sm:text-sm"
                  whileHover={{ x: 5 }}
                >
                  Watch Video →
                </motion.span>
              </div>
            </motion.a>
            <motion.a 
              href="#" 
              className="block group"
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 group-hover:text-red-500 transition-colors">
                  Project Slide Deck
                </h3>
                <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                  Download our comprehensive project presentation
                </p>
                <motion.span 
                  className="text-red-500 text-xs sm:text-sm"
                  whileHover={{ x: 5 }}
                >
                  View PDF →
                </motion.span>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Elevator Pitch Section with Video */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-800" ref={videoSectionRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            ELEVATOR PITCH
          </motion.h2>
          <motion.div 
            className="bg-gray-900 p-4 sm:p-6 md:p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="aspect-video rounded-lg overflow-hidden relative">
              {isVideoSectionInView ? (
                <video 
                  className="w-full h-full object-cover"
                  src={PitchVideo}
                  title="Elizabeth Lartey Elevator Pitch"
                  controls
                  playsInline
                  muted
                  controlsList="nodownload"
                ></video>
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-400 text-sm sm:text-base">Video loading when in view...</p>
                </div>
              )}
            </div>
            <div className="mt-4 sm:mt-6 text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-red-500">My Elevator Pitch</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Watch my brief introduction where I explain how I can help transform your business using Salesforce solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-900 py-6 sm:py-8 px-4 sm:px-6 text-center text-gray-400 text-xs sm:text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>© 2025 Elizabeth Lartey. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;