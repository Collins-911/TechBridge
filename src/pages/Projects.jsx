import React from 'react';
import '../../css/projects.css';
import { FiCode, FiCpu, FiDatabase, FiGlobe, FiLayers, FiSmartphone, FiTrendingUp } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const projectItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and inventory management.',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    icon: <FiGlobe />
  },
  {
    id: 2,
    title: 'Minecraft Mods',
    description: 'Custom datapacks and gameplay mods for enhanced Minecraft experience.',
    image: 'https://i.pinimg.com/736x/d3/c3/51/d3c351734ba2bdad95b6b05e79989ad5.jpg',
    tags: ['Java', 'Modding', 'Gaming'],
    link: '#',
    icon: <FiLayers />
  },
  {
    id: 3,
    title: 'Health Tracker App',
    description: 'Mobile application for tracking fitness metrics and health goals.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    tags: ['React Native', 'Firebase', 'Health'],
    link: '#',
    icon: <FiSmartphone />
  },
  {
    id: 4,
    title: 'Data Analytics Dashboard',
    description: 'Real-time business intelligence dashboard with interactive visualizations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    tags: ['Python', 'D3.js', 'Big Data'],
    link: '#',
    icon: <FiTrendingUp />
  },
  {
    id: 5,
    title: 'AI Content Moderator',
    description: 'Machine learning system for automated content moderation.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    tags: ['Python', 'TensorFlow', 'NLP'],
    link: '#',
    icon: <FiCpu />
  },
  {
    id: 6,
    title: 'Blockchain Explorer',
    description: 'Web application for exploring and analyzing blockchain transactions.',
    image: 'https://images.unsplash.com/photo-1621570072021-0b72f3657651?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    tags: ['Web3.js', 'Ethereum', 'Solidity'],
    link: '#',
    icon: <FiDatabase />
  },
  {
    id: 7,
    title: 'Music Streaming Service',
    description: 'Custom music streaming platform with recommendation engine.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    icon: <FiCode />
  },
  {
    id: 8,
    title: 'Smart Home Controller',
    description: 'IoT application for managing smart home devices.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    tags: ['React Native', 'IoT', 'Firebase'],
    link: '#',
    icon: <FiSmartphone />
  },
  {
    id: 9,
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    tags: ['Vue.js', 'Firebase', 'WebSockets'],
    link: '#',
    icon: <FiCode />
  },
  {
    id: 10,
    title: 'Fitness Coach App',
    description: 'AI-powered personal training application with form analysis.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    tags: ['Flutter', 'TensorFlow', 'Firebase'],
    link: '#',
    icon: <FiSmartphone />
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="projects-page">
        <div className="projects-container">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">Explore our portfolio of innovative technical solutions</p>
          
          <div className="projects-grid">
            {projectItems.map((item) => (
              <div key={item.id} className="project-card">
                <div className="project-image-container">
                  <img src={item.image} alt={item.title} className="project-image" />
                  <div className="project-tags">
                    {item.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="project-actions">
                    <button className="project-button primary">View Details</button>
                    <button className="project-button secondary">Live Demo</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}