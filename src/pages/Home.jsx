import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, 
  FaJs, FaUserGraduate, FaLaptopCode,
  FaSearch, FaHandshake, FaUsers,
  FaChartLine, FaLightbulb, FaCode,
  FaServer, FaMobileAlt, FaDatabase
} from 'react-icons/fa';
import { IoRocket, IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiNextdotjs, SiPostgresql, SiGraphql, SiRedis } from 'react-icons/si';
import { DiRuby, DiJava } from 'react-icons/di';
import '../css/home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        
        {/* Hero Section */}
        <header className="hero">
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
          
          <div className="hero-content">
            <h1>Accelerate Your Tech Career</h1>
            <p className="hero-subtitle">1:1 mentorship from industry experts to bridge the gap between learning and professional success</p>
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

        {/* Key Benefits */}
        <section className="benefits">
          <div className="section-header">
            <h2>Why TechBridge Works</h2>
            <p className="section-subtitle">Our mentorship approach delivers real results</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon"><FaSearch /></div>
              <h3>Personalized Matching</h3>
              <p>We connect you with mentors who align with your specific tech stack, career goals, and learning style.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon"><FaHandshake /></div>
              <h3>Structured Guidance</h3>
              <p>Get customized learning paths with milestones, code reviews, and career advice.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon"><IoRocket /></div>
              <h3>Project-Based Learning</h3>
              <p>Build portfolio-worthy projects with expert feedback at every step.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon"><FaUsers /></div>
              <h3>Community Support</h3>
              <p>Join exclusive groups, hackathons, and networking events with peers.</p>
            </div>
          </div>
        </section>

        {/* Tech Stack Showcase */}
        <section className="tech-stack">
          <div className="section-header">
            <h2>Master In-Demand Technologies</h2>
            <p className="section-subtitle">Get mentorship across the modern tech stack</p>
          </div>
          
          <div className="tech-categories">
            <div className="tech-category">
              <h3><FaCode /> Frontend</h3>
              <div className="tech-icons">
                <FaReact title="React" />
                <SiNextdotjs title="Next.js" />
                <IoLogoJavascript title="JavaScript" />
                <SiTypescript title="TypeScript" />
              </div>
            </div>
            
            <div className="tech-category">
              <h3><FaServer /> Backend</h3>
              <div className="tech-icons">
                <FaNodeJs title="Node.js" />
                <FaPython title="Python" />
                <DiJava title="Java" />
                <DiRuby title="Ruby" />
              </div>
            </div>
            
            <div className="tech-category">
              <h3><FaMobileAlt /> Mobile</h3>
              <div className="tech-icons">
                <FaReact title="React Native" />
                <FaMobileAlt title="Flutter" />
                <FaMobileAlt title="Swift" />
                <FaMobileAlt title="Kotlin" />
              </div>
            </div>
            
            <div className="tech-category">
              <h3><FaDatabase /> Data & DevOps</h3>
              <div className="tech-icons">
                <SiPostgresql title="PostgreSQL" />
                <FaDocker title="Docker" />
                <SiRedis title="Redis" />
                <SiGraphql title="GraphQL" />
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="stats">
          <div className="section-header">
            <h2>Proven Results</h2>
            <p className="section-subtitle">Join thousands who've accelerated their careers</p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <FaUsers className="stat-icon" />
              <div className="stat-number">1,200+</div>
              <p>Active Mentors</p>
            </div>
            
            <div className="stat-card">
              <FaLaptopCode className="stat-icon" />
              <div className="stat-number">3,500+</div>
              <p>Projects Completed</p>
            </div>
            
            <div className="stat-card">
              <FaChartLine className="stat-icon" />
              <div className="stat-number">6x</div>
              <p>Faster Career Growth</p>
            </div>
            
            <div className="stat-card">
              <FaLightbulb className="stat-icon" />
              <div className="stat-number">98%</div>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
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