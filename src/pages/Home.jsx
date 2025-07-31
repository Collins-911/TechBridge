import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, 
  FaJs, FaUserGraduate, FaLaptopCode,
  FaSearch, FaHandshake, FaUsers,
  FaChartLine, FaLightbulb, FaCode,
  FaServer, FaMobileAlt, FaDatabase,
  FaClock, FaGraduationCap
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

            <div className="benefit-card">
              <div className="benefit-icon"><FaClock /></div>
              <h3>Flexible Scheduling</h3>
              <p>Schedule sessions at your convenience with mentors across different timezones.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon"><FaGraduationCap /></div>
              <h3>Career Advancement</h3>
              <p>Get help with resume reviews, interview prep, and job search strategies.</p>
            </div>
          </div>
        </section>

        {/* Tech Stack Showcase */}
        <section className="tech-stack">
          <div className="section-header">
            <h2>Technologies We Mentor</h2>
            <p className="section-subtitle">Get expert guidance across all major technologies</p>
          </div>
          
          <div className="tech-icons-container">
            <div className="tech-icons-grid">
              <div className="tech-icon-item">
                <FaReact className="tech-icon" title="React" />
                <span>React</span>
              </div>
              <div className="tech-icon-item">
                <SiNextdotjs className="tech-icon" title="Next.js" />
                <span>Next.js</span>
              </div>
              <div className="tech-icon-item">
                <IoLogoJavascript className="tech-icon" title="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="tech-icon-item">
                <SiTypescript className="tech-icon" title="TypeScript" />
                <span>TypeScript</span>
              </div>
              <div className="tech-icon-item">
                <FaNodeJs className="tech-icon" title="Node.js" />
                <span>Node.js</span>
              </div>
              <div className="tech-icon-item">
                <FaPython className="tech-icon" title="Python" />
                <span>Python</span>
              </div>
              <div className="tech-icon-item">
                <DiJava className="tech-icon" title="Java" />
                <span>Java</span>
              </div>
              <div className="tech-icon-item">
                <DiRuby className="tech-icon" title="Ruby" />
                <span>Ruby</span>
              </div>
              <div className="tech-icon-item">
                <FaReact className="tech-icon" title="React Native" />
                <span>React Native</span>
              </div>
              <div className="tech-icon-item">
                <FaMobileAlt className="tech-icon" title="Flutter" />
                <span>Flutter</span>
              </div>
              <div className="tech-icon-item">
                <SiPostgresql className="tech-icon" title="PostgreSQL" />
                <span>PostgreSQL</span>
              </div>
              <div className="tech-icon-item">
                <FaDocker className="tech-icon" title="Docker" />
                <span>Docker</span>
              </div>
              {/* <div className="tech-icon-item">
                <SiRedis className="tech-icon" title="Redis" />
                <span>Redis</span>
              </div>
              <div className="tech-icon-item">
                <SiGraphql className="tech-icon" title="GraphQL" />
                <span>GraphQL</span>
              </div> */}
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