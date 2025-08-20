import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, 
  FaJs, FaUserGraduate, FaLaptopCode,
  FaSearch, FaHandshake, FaUsers,
  FaChartLine, FaLightbulb, FaMobileAlt,
  FaClock, FaGraduationCap
} from 'react-icons/fa';
import { IoRocket, IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiNextdotjs, SiPostgresql, SiGraphql } from 'react-icons/si';
import { DiRuby, DiJava } from 'react-icons/di';
import AOS from "aos";
import "aos/dist/aos.css";
import '../css/home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);


  return (
    <>
    
      <ScrollToTop/>
      <Navbar />
      <div className="home">
        <header className="hero" data-aos="fade-up">
          <div className="tech-background">
            <FaReact className="floating-icon icon-1" />
            <FaNodeJs className="floating-icon icon-2" />
            <FaPython className="floating-icon icon-3" />
            <SiTypescript className="floating-icon icon-4" />
            <FaDocker className="floating-icon icon-5" />
            <SiPostgresql className="floating-icon icon-6" />
            <FaJs className="floating-icon icon-7" />
            <SiNextdotjs className="floating-icon icon-8" />
            <SiGraphql className="floating-icon icon-9" />
            <DiRuby className="floating-icon icon-10" />
          </div>
          <div className="hero-content" data-aos="zoom-in">
            <h1>Accelerate Your Tech Career</h1>
            <p className="hero-subtitle">One on one mentorship from industry experts to bridge the gap between learning and professional success</p>
            <div className="hero-buttons">
              <Link to="/mentors" className="button primary">
                <FaUserGraduate /> Find Your Mentor
              </Link>
              <Link to="/register" className="button secondary">
                <IoRocket /> Get Started
              </Link>
            </div>
          </div>
        </header>

        <section className="benefits" data-aos="fade-up">
          <div className="section-header">
            <h2>Why TechBridge Works</h2>
            <p className="section-subtitle">Our mentorship approach delivers real results</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon"><FaSearch /></div>
              <h3>Personalized Matching</h3>
              <p>We connect you with mentors who align with your specific tech stack, career goals, and learning style.</p>
            </div>
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon"><FaHandshake /></div>
              <h3>Structured Guidance</h3>
              <p>Get customized learning paths with milestones, code reviews, and career advice.</p>
            </div>
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon"><IoRocket /></div>
              <h3>Project-Based Learning</h3>
              <p>Build portfolio-worthy projects with expert feedback at every step.</p>
            </div>
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="400">
              <div className="benefit-icon"><FaUsers /></div>
              <h3>Community Support</h3>
              <p>Join exclusive groups, hackathons, and networking events with peers.</p>
            </div>
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="500">
              <div className="benefit-icon"><FaClock /></div>
              <h3>Flexible Scheduling</h3>
              <p>Schedule sessions at your convenience with mentors across different timezones.</p>
            </div>
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="600">
              <div className="benefit-icon"><FaGraduationCap /></div>
              <h3>Career Advancement</h3>
              <p>Get help with resume reviews, interview prep, and job search strategies.</p>
            </div>
          </div>
        </section>

        <section className="tech-stack" data-aos="fade-up">
          <div className="section-header">
            <h2>Technologies We Mentor</h2>
            <p className="section-subtitle">Get expert guidance across all major technologies</p>
          </div>
          <div className="tech-icons-container">
            <div className="tech-icons-grid">
              <div className="tech-icon-item" data-aos="zoom-in"><FaReact className="tech-icon" title="React" /></div>
              <div className="tech-icon-item" data-aos="zoom-in" data-aos-delay="100"><SiNextdotjs className="tech-icon" title="Next.js" /></div>
              <div className="tech-icon-item" data-aos="zoom-in" data-aos-delay="200"><IoLogoJavascript className="tech-icon" title="JavaScript" /></div>
              <div className="tech-icon-item" data-aos="zoom-in" data-aos-delay="300"><SiTypescript className="tech-icon" title="TypeScript" /></div>
              <div className="tech-icon-item" data-aos="zoom-in" data-aos-delay="400"><FaNodeJs className="tech-icon" title="Node.js" /></div>
              <div className="tech-icon-item" data-aos="zoom-in" data-aos-delay="500"><FaPython className="tech-icon" title="Python" /></div>
              <div className="tech-icon-item" data-aos="zoom-in" data-aos-delay="600"><DiJava className="tech-icon" title="Java" /></div>
              <div className="tech-icon-item" data-aos="zoom-in" data-aos-delay="700"><DiRuby className="tech-icon" title="Ruby" /></div>
              <div className="tech-icon-item" data-aos="zoom-in" data-aos-delay="800"><FaReact className="tech-icon" title="React Native" /></div>
              <div className="tech-icon-item" data-aos="zoom-in" data-aos-delay="900"><FaMobileAlt className="tech-icon" title="Flutter" /></div>
              <div className="tech-icon-item" data-aos="zoom-in" data-aos-delay="1000"><SiPostgresql className="tech-icon" title="PostgreSQL" /></div>
              <div className="tech-icon-item" data-aos="zoom-in" data-aos-delay="1100"><FaDocker className="tech-icon" title="Docker" /></div>
            </div>
          </div>
        </section>

        <section className="stats" data-aos="fade-up">
          <div className="section-header">
            <h2>Proven Results</h2>
            <p className="section-subtitle">Join thousands who've accelerated their careers</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
              <FaUsers className="stat-icon" />
              <div className="stat-number">1,200+</div>
              <p>Active Mentors</p>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
              <FaLaptopCode className="stat-icon" />
              <div className="stat-number">3,500+</div>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
              <FaChartLine className="stat-icon" />
              <div className="stat-number">6x</div>
              <p>Faster Career Growth</p>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="400">
              <FaLightbulb className="stat-icon" />
              <div className="stat-number">98%</div>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </section>

        <section className="cta" data-aos="fade-up">
          <div className="cta-content">
            <h2>Ready to Level Up Your Skills?</h2>
            <p>Join TechBridge today and get matched with your ideal mentor in 24 hours</p>
            <div className="cta-buttons">
              <Link to="/mentors" className="button primary">
                <FaUserGraduate /> Browse Mentors
              </Link>
              <Link to="/register" className="button secondary">
                <IoRocket /> Start Free Trial
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
