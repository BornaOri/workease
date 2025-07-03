import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, FileText, Zap, Users, ArrowRight, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

// Styles object to simulate separate stylesheets
const styles = {
  // Global styles
  global: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  // Header styles
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background: 'rgba(15, 23, 42, 0.95)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
    transition: 'all 0.3s ease'
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  },
  navLink: {
    color: '#e2e8f0',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  },

  // Hero styles
  hero: {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  heroContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1.5rem',
    lineHeight: 1.1
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: '#94a3b8',
    marginBottom: '2rem',
    maxWidth: '600px',
    margin: '0 auto 2rem'
  },
  ctaButton: {
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '0.75rem',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none'
  },

  // Services styles
  services: {
    padding: '6rem 2rem',
    background: '#f8fafc'
  },
  servicesContainer: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#1e293b'
  },
  sectionSubtitle: {
    fontSize: '1.1rem',
    color: '#64748b',
    textAlign: 'center',
    marginBottom: '4rem',
    maxWidth: '600px',
    margin: '0 auto 4rem'
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  serviceCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  serviceIcon: {
    width: '3rem',
    height: '3rem',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem'
  },
  serviceTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1e293b'
  },
  serviceDescription: {
    color: '#64748b',
    lineHeight: 1.6
  },

  // About styles
  about: {
    padding: '6rem 2rem',
    background: 'white'
  },
  aboutContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'center'
  },
  aboutContent: {
    color: '#64748b',
    lineHeight: 1.7,
    fontSize: '1.1rem'
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: '2rem 0'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1rem',
    color: '#374151'
  },

  // Contact styles
  contact: {
    padding: '6rem 2rem',
    background: '#f8fafc'
  },
  contactContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center'
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  },
  contactCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  contactIcon: {
    width: '3rem',
    height: '3rem',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem'
  },
  contactTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#1e293b'
  },
  contactInfo: {
    color: '#64748b'
  },

  // Footer styles
  footer: {
    background: '#1e293b',
    color: '#94a3b8',
    textAlign: 'center',
    padding: '2rem',
    borderTop: '1px solid rgba(148, 163, 184, 0.1)'
  },

  // Mobile menu styles
  mobileMenuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#e2e8f0',
    cursor: 'pointer',
    padding: '0.5rem'
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(15, 23, 42, 0.98)',
    backdropFilter: 'blur(20px)',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem'
  },
  mobileMenuLink: {
    color: '#e2e8f0',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: '500'
  },
  closeButton: {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    background: 'none',
    border: 'none',
    color: '#e2e8f0',
    cursor: 'pointer',
    padding: '0.5rem'
  }
};

// Header Component
const Header = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header style={{
        ...styles.header,
        background: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.8)'
      }}>
        <div style={styles.headerContainer}>
          <div style={styles.logo}>WorkEase AI</div>
          
          <nav style={{...styles.nav, '@media (max-width: 768px)': { display: 'none' }}}>
            {['home', 'services', 'about', 'contact'].map((section) => (
              <a
                key={section}
                style={{
                  ...styles.navLink,
                  color: activeSection === section ? '#3b82f6' : '#e2e8f0'
                }}
                onClick={() => scrollToSection(section)}
                onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.target.style.color = activeSection === section ? '#3b82f6' : '#e2e8f0'}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>

          <button
            style={{
              ...styles.mobileMenuButton,
              '@media (min-width: 769px)': { display: 'none' }
            }}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div style={styles.mobileMenu}>
          <button
            style={styles.closeButton}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          {['home', 'services', 'about', 'contact'].map((section) => (
            <a
              key={section}
              style={styles.mobileMenuLink}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

// Hero Component
const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={styles.hero}>
      <div style={styles.heroContainer}>
        <h1 style={styles.heroTitle}>
          AI-Powered Solutions & Automations for Modern Businesses
        </h1>
        <p style={styles.heroSubtitle}>
          We deliver AI-powered intelligent automation, building custom solutions that streamline your workflows and reclaim valuable hours.
        </p>
        <button
          style={styles.ctaButton}
          onClick={scrollToServices}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Explore Our Solutions
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: <Bot size={24} color="white" />,
      title: "AI Chatbots",
      description: "Intelligent conversational agents that provide 24/7 customer support, lead qualification, and automated assistance to enhance customer experience and reduce operational costs."
    },
    {
      icon: <FileText size={24} color="white" />,
      title: "Document Processing",
      description: "Advanced AI-powered document analysis, data extraction, and workflow automation. Transform unstructured documents into actionable insights with high accuracy and speed."
    },
    {
      icon: <Zap size={24} color="white" />,
      title: "Process Automation",
      description: "Streamline repetitive tasks and complex workflows with intelligent automation solutions. Increase efficiency while reducing errors and operational overhead."
    },
    {
      icon: <Users size={24} color="white" />,
      title: "Custom AI Solutions",
      description: "Many businesses feel they can be more efficient but aren't sure how technology can help. We act as that bridge. Our team analyzes your day-to-day operations to pinpoint bottlenecks and manual tasks ripe for automation, then translates those insights into powerful, custom-built tools."
    }
  ];

  return (
    <section id="services" style={styles.services}>
      <div style={styles.servicesContainer}>
        <h2 style={styles.sectionTitle}>Our Solutions</h2>
        <p style={styles.sectionSubtitle}>
          Comprehensive AI-powered services designed to transform your business operations and drive growth
        </p>
        
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              style={styles.serviceCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={styles.serviceIcon}>
                {service.icon}
              </div>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  const features = [
    "Expert team with deep AI and machine learning expertise",
    "Custom solutions tailored to your specific business needs",
    "Proven track record of successful implementations",
    "Ongoing support and optimization services",
    "Scalable solutions that grow with your business"
  ];

  return (
    <section id="about" style={styles.about}>
      <div style={styles.aboutContainer}>
        <div>
          <h2 style={styles.sectionTitle}>About WorkEase AI</h2>
          <div style={styles.aboutContent}>
            <p>
              We are a forward-thinking technology consulting firm specializing in agentic AI & automation solutions for modern businesses. Our mission is to bridge the gap between cutting-edge AI technology and practical business applications.
            </p>
            <p>
              With  experience in AI development and technology operations consulting, we understand the unique challenges that companies face when implementing new technologies. Our approach combines technical expertise with business acumen to deliver solutions that truly make a difference.
            </p>
            
            <ul style={styles.featuresList}>
              {features.map((feature, index) => (
                <li key={index} style={styles.featureItem}>
                  <CheckCircle size={20} color="#3b82f6" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div>
          <div style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            borderRadius: '1rem',
            padding: '3rem 2rem',
            color: 'white',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ready to Transform Your Business?</h3>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
              Let's discuss how our AI solutions can drive growth and efficiency for your organization.
            </p>
            <button
              style={{
                ...styles.ctaButton,
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} color="white" />,
      title: "Email Us",
      info: " borna@workeaseai.net"
    },
    {
      icon: <Phone size={24} color="white" />,
      title: "Call Us",
      info: " 07508471923"
    },
  ];

  return (
    <section id="contact" style={styles.contact}>
      <div style={styles.contactContainer}>
        <h2 style={styles.sectionTitle}>Get In Touch</h2>
        <p style={styles.sectionSubtitle}>
          Ready to revolutionize your business with AI? Let's start the conversation.
        </p>
        
        <div style={styles.contactGrid}>
          {contactInfo.map((contact, index) => (
            <div key={index} style={styles.contactCard}>
              <div style={styles.contactIcon}>
                {contact.icon}
              </div>
              <h3 style={styles.contactTitle}>{contact.title}</h3>
              <p style={styles.contactInfo}>{contact.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <p>&copy; 2025 WorkEase AI. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
          Transforming businesses with intelligent AI solutions
        </p>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={styles.global}>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;