import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App() {

  useEffect(() => {
    // AOS Initialization configuration for smooth scrolling
    AOS.init({
      duration: 800,       // Animation duration optimized for a snappier feel
      once: true,          // Run animation only once for better performance
      easing: 'ease-out',  // Smooth easing function
      disable: 'mobile',   // Prevent lag on mobile devices
      throttleDelay: 99,   // Performance boost configurations
      debounceDelay: 50
    });
    
    return () => {
      AOS.refresh();
    };
  }, [])

  const actualEmail = "karthikeyanmahalingam9025@gmail.com"; 
  const phoneNumber = "917373542464"; // Structured direct numeric assignment for wa.me api

  const emailAddress = `mailto:${actualEmail}`;
  const whatsappMessage = "Hi Karthikeyan Mahalingam.";
  
  // WhatsApp link format structure optimized with exact string handling
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      style={{
        minHeight: '100vh',
        color: '#f3f4f6', // 🟢 High-contrast light silver text for true dark mode
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: '120px 20px 40px', // Adjusted top padding for tighter mobile headers
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        overflowX: 'hidden', 
        WebkitOverflowScrolling: 'touch',
        // 🛠️ Deep Obsidian Dark Background with Vibrant Neon Green & Cyan Radiance Glows
        background: 'radial-gradient(circle at top left, rgba(34,211,238,0.12), transparent 40%), radial-gradient(circle at bottom right, rgba(34,197,94,0.12), transparent 40%), #090d16'
      }}
    >
      {/* ⚠️ Dynamic Responsive Styles and Marquee Injector */}
      <style>
        {`
          @keyframes skillScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 12.5px)); }
          }
          html {
            scroll-behavior: smooth;
          }
          
          /* Mobile Responsiveness Rules Override */
          @media (max-width: 768px) {
            .nav-container {
              padding: 10px 16px !important;
              width: 95% !important;
            }
            .nav-menu {
              gap: 14px !important;
            }
            .nav-link {
              font-size: 0.85rem !important;
            }
            .nav-btn {
              padding: 8px 14px !important;
              font-size: 0.8rem !important;
            }
            .hero-container {
              flex-direction: column !important;
              gap: 30px !important;
              text-align: center;
              align-items: center;
            }
            .profile-card {
              max-width: 100% !important;
              width: 100% !important;
            }
            .profile-img {
              height: 320px !important;
            }
            .hero-title {
              font-size: 2rem !important;
            }
            .hero-btn-container {
              max-width: 100% !important;
              flex-direction: column;
            }
            .section-box {
              padding: 24px !important;
              border-radius: 20px !important;
            }
            .section-title {
              font-size: 1.7rem !important;
            }
            .contact-btn {
              width: 100% !important;
              justify-content: center;
            }
          }
        `}
      </style>

      {/* ⚡ Neon Matrix Tech Grid Background (Fine Lines) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.9,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* 🟢 Soft Ambient Cyber Neon Glow Left (Cyan) */}
      <div
        style={{
          position: 'absolute',
          width: 'max(40vw, 300px)',
          height: 'max(40vw, 300px)',
          background: 'radial-gradient(circle, rgba(34,211,238,0.1), transparent 70%)',
          top: '-150px',
          left: '-150px',
          filter: 'blur(90px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* 🟢 Soft Ambient Cyber Neon Glow Right (Neon Green) */}
      <div
        style={{
          position: 'absolute',
          width: 'max(40vw, 300px)',
          height: 'max(40vw, 300px)',
          background: 'radial-gradient(circle, rgba(34,197,94,0.1), transparent 70%)',
          bottom: '-150px',
          right: '-150px',
          filter: 'blur(90px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* ================= TOP NAVBAR (DARK GLASSMORPHISM) ================= */}
      <div
        className="nav-container"
        data-aos="fade-down"
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '1200px',
          zIndex: 999,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 28px',
          borderRadius: '20px',
          background: 'rgba(13, 20, 35, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          willChange: 'transform'
        }}
      >
        {/* Logo */}
        <h2
          style={{
            margin: 0,
            color: '#ffffff',
            fontSize: '1.2rem',
            fontWeight: '800',
            letterSpacing: '1px',
            whiteSpace: 'nowrap'
          }}
        >
          <span style={{ color: '#22c55e' }}>.</span>
        </h2>

        {/* Menu */}
        <div
          className="nav-menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
          }}
        >
          {['Home', 'About', 'Skills', 'Projects'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              style={{
                textDecoration: 'none',
                color: '#9ca3af',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: '0.3s'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#22c55e')}
              onMouseLeave={(e) => (e.target.style.color = '#9ca3af')}
            >
              {item}
            </a>
          ))}

          {/* Let's Talk Button */}
          <a
            href="#contact"
            className="nav-btn"
            style={{
              padding: '12px 22px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: '#22c55e',
              color: '#ffffff',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(34, 197, 94, 0.3)',
              transition: '0.3s',
              textDecoration: 'none',
              fontSize: '0.9rem',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#16a34a')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#22c55e')}
          >
            Let’s Talk
          </a>
        </div>
      </div>

      {/* Main Container (Hero Section) */}
      <div
        id="home"
        className="hero-container"
        style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          gap: '50px',
          position: 'relative',
          zIndex: 2,
          marginBottom: '60px',
          marginTop: '20px'
        }}
      >
        {/* LEFT PROFILE CARD */}
        <div
          className="profile-card"
          data-aos="fade-right"
          style={{
            flex: '1',
            minWidth: '280px',
            maxWidth: '380px',
            background: 'rgba(15, 23, 42, 0.55)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            height: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            willChange: 'transform',
            boxSizing: 'border-box'
          }}
        >
          {/* Profile Image */}
          <div
            className="profile-img"
            style={{
              width: '100%',
              height: '400px',
              borderRadius: '16px',
              backgroundColor: '#1f2937',
              backgroundImage: 'url("/profile.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              marginBottom: '20px'
            }}
          />

          {/* Status */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '8px 18px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              color: '#d1d5db',
              marginBottom: '15px'
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#22c55e',
                borderRadius: '50%',
                boxShadow: '0 0 8px #22c55e'
              }}
            />
            Available for work
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              {
                icon: '/git.gif',
                link: 'https://github.com/Karthik7373542464'
              },
              {
                icon: '/icon.png',
                link: 'https://www.linkedin.com/in/karthikeyan-mahalingam-72021a319?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
              }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: 'rgb(255, 255, 255)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: '0.3s',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#22c55e';
                  e.currentTarget.style.background = 'rgba(34, 197, 94, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                }}
              >
                <img
                  src={item.icon}
                  alt="social-icon"
                  style={{
                    width: '22px',
                    height: '22px',
                    objectFit: 'contain'
                  }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT HERO CONTENT */}
        <div
          data-aos="fade-left"
          style={{
            flex: '2',
            minWidth: '280px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            willChange: 'transform'
          }}
        >
          <div
            data-aos="fade-up"
            style={{
              fontSize: '1.1rem',
              color: '#22c55e', 
              marginBottom: '15px',
              fontWeight: '600'
            }}
          >
            👋 Say Hello
          </div>

          <h1
            className="hero-title"
            data-aos="zoom-in"
            style={{
              fontSize: '2.7rem',
              fontWeight: '800',
              lineHeight: '1.2',
              marginBottom: '25px',
              color: '#ffffff'
            }}
          >
            I'm <span style={{ color: '#22c55e' }}>Karthikeyan Mahalingam</span>
            <br />
            Full Stack Web Developer
            <br />
            Based in Tamil Nadu, IN.
          </h1>

          <p
            data-aos="fade-up"
            style={{
              fontSize: '1.05rem',
              color: '#d1d5db',
              lineHeight: '1.8',
              maxWidth: '680px',
              marginBottom: '30px'
            }}
          >
            Results-driven Full-Stack Developer with over 1+ years of experience designing, building, and deploying robust web applications.
          </p>

          {/* Buttons */}
          <div
            className="hero-btn-container"
            data-aos="fade-up"
            style={{
              display: 'flex',
              width: '100%',
              maxWidth: '380px',
              gap: '12px',
              marginBottom: '45px'
            }}
          >
            <a
              href="/karthik.cv.pdf"
              download="Karthikeyan_Mahalingam_CV.pdf"
              style={{
                flex: 1,
                padding: '14px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgb(250, 246, 246)',
                color: '#1f2937',
                fontWeight: '700',
                cursor: 'pointer',
                textDecoration: 'none',
                textAlign: 'center',
                fontSize: '0.95rem'
              }}
            >
              🢃 Download CV
            </a>

            <a
              href="#contact"
              style={{
                flex: 1,
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
                backgroundColor: '#22c55e',
                color: '#fff',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(34, 197, 94, 0.3)',
                textAlign: 'center',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: '0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22c55e'}
            >
              ✉ Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <div
        id="about"
        className="section-box"
        data-aos="fade-up"
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto 60px',
          padding: '45px',
          borderRadius: '28px',
          background: 'rgba(15, 23, 42, 0.55)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          zIndex: 2,
          willChange: 'transform',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '30px' }}>
          <span style={{ fontSize: '1.8rem' }}>👨‍💻</span>
          <h2 className="section-title" style={{ margin: 0, fontSize: '2.2rem', fontWeight: '800', color: '#ffffff' }}>
            About Me
          </h2>
        </div>

        <h3
          style={{
            fontSize: '1.8rem',
            lineHeight: '1.4',
            marginBottom: '20px',
            color: '#ffffff',
            fontWeight: '700'
          }}
        >
          Hi, I'm <span style={{ color: '#22c55e' }}>Karthikeyan Mahalingam</span>
        </h3>

        <p
          style={{
            fontSize: '1.1rem',
            lineHeight: '2',
            color: '#d1d5db', 
            maxWidth: '1000px',
            marginBottom: '45px'
          }}
        >
          I'm a passionate <strong style={{ color: '#ffffff' }}>Full-Stack Web Developer</strong> dedicated to building high-performance, secure, and scalable web applications from frontend to backend. I specialize in creating premium user interfaces, optimized backend systems, and seamless digital experiences. As a freelance web developer, I build modern websites and digital solutions that help businesses establish a strong online presence through responsive, user-friendly, and business-focused web applications.
        </p>

        {/* Qualification */}
        <div>
          <h3 style={{ color: '#22c55e', marginBottom: '25px', fontSize: '1.5rem', fontWeight: '700' }}>
            🎓 Qualification
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px'
            }}
          >
            {/* Education */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '20px', padding: '25px' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '10px', fontWeight: '700', margin: 0 }}>Bachelor Degree</h4>
              <p style={{ color: '#d1d5db', lineHeight: '1.8', marginBottom: 0 }}>
                Bachelor of Information Technology (B.Sc) <br />
                <span style={{ color: '#22c55e', fontWeight: '600' }}>
                  Kongunadu Arts and Science College, Coimbatore
                </span>
              </p>
            </div>

            {/* Internship */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '20px', padding: '25px' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '10px', fontWeight: '700', margin: 0 }}>Internship</h4>
              <p style={{ color: '#d1d5db', lineHeight: '1.8', marginBottom: 0 }}>
                Full Stack Web Development Using Python <br />
                <span style={{ color: '#22c55e', fontWeight: '600' }}>
                  Accent Tecno Soft , Coimbatore
                </span>
              </p>
            </div>

            {/* Experience */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '20px', padding: '25px' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '10px', fontWeight: '700', margin: 0 }}>Experience</h4>
              <p style={{ color: '#d1d5db', lineHeight: '1.8', marginBottom: 0 }}>
                1+ years experience in Full-Stack Web Development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SKILLS SECTION ================= */}
      <div
        id="skills"
        className="section-box"
        data-aos="fade-up"
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto 60px',
          padding: '45px',
          borderRadius: '28px',
          background: 'rgba(15, 23, 42, 0.55)', 
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          zIndex: 2,
          willChange: 'transform',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '35px' }}>
          <span style={{ fontSize: '1.8rem' }}>🚀</span>
          <h2 className="section-title" style={{ margin: 0, fontSize: '2.2rem', fontWeight: '800', color: '#ffffff' }}>
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Layout Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '25px',
            marginBottom: '40px'
          }}
        >
          {/* Frontend */}
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '22px', padding: '28px' }}>
            <h3 style={{ color: '#22c55e', marginBottom: '20px', fontWeight: '700', marginTop: 0 }}>🎨 Frontend</h3>
            <p style={{ color: '#d1d5db', lineHeight: '2', margin: 0 }}>
              • HTML5, CSS3, JavaScript <br />
              • React.js / Next.js <br />
              • Tailwind CSS / Bootstrap
            </p>
          </div>

          {/* Backend */}
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '22px', padding: '28px' }}>
            <h3 style={{ color: '#22c55e', marginBottom: '20px', fontWeight: '700', marginTop: 0 }}>⚙️ Backend</h3>
            <p style={{ color: '#d1d5db', lineHeight: '2', margin: 0 }}>
              • Node.js / Express.js <br />
              • RESTful APIs <br />
              • Python
            </p>
          </div>

          {/* Database */}
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '22px', padding: '28px' }}>
            <h3 style={{ color: '#22c55e', marginBottom: '20px', fontWeight: '700', marginTop: 0 }}>📊 Database</h3>
            <p style={{ color: '#d1d5db', lineHeight: '2', margin: 0 }}>
              • MongoDB <br />
              • MySQL <br />
              • PostgreSQL
            </p>
          </div>

          {/* Tools & Platforms */}
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '22px', padding: '28px' }}>
            <h3 style={{ color: '#22c55e', marginBottom: '20px', fontWeight: '700', marginTop: 0 }}>🛠️ Tools</h3>
            <p style={{ color: '#d1d5db', lineHeight: '2', margin: 0 }}>
              • Git & GitHub <br />
              • Vercel / Netlify <br />
              • AWS / Docker
            </p>
          </div>
        </div>

        {/* Tech Scroll Marquee */}
        <div style={{ overflow: 'hidden', padding: '18px 0', width: '100%' }}>
          <div
            style={{
              display: 'flex',
              width: 'max-content',
              gap: '25px',
              animation: 'skillScroll 65s linear infinite'
            }}
          >
            {[
              'html', 'css', 'js', 'react', 'nextjs', 'tailwind', 'bootstrap', 'nodejs', 'express', 'python', 'java', 'mongodb', 'mysql', 'postgres', 'git', 'github', 'aws', 'docker', 'vercel',
              'html', 'css', 'js', 'react', 'nextjs', 'tailwind', 'bootstrap', 'nodejs', 'express', 'python', 'java', 'mongodb', 'mysql', 'postgres', 'git', 'github', 'aws', 'docker', 'vercel'
            ].map((skill, index) => (
              <div
                key={index}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img
                  src={`https://skillicons.dev/icons?i=${skill}`}
                  alt={skill}
                  style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= PROJECTS SECTION ================= */}
      <div
        id="projects"
        className="section-box"
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto 60px',
          padding: '40px',
          borderRadius: '24px',
          background: 'rgba(15, 23, 42, 0.55)', 
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          zIndex: 2,
          boxSizing: 'border-box'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '35px' }}>
          <span style={{ fontSize: '1.6rem' }}>💼</span>
          <h2 className="section-title" style={{ margin: 0, fontSize: '2rem', fontWeight: '800', color: '#ffffff' }}>Projects</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '25px'
          }}
        >
          {[
            {
              name: 'QR Menu & Inventory Management System',
              concept: 'Customers scan a QR code to view the digital menu and place orders. The order data (customer details, item names, and cost details) is instantly sent to the admin side dashboard. Concurrently, the backend automatically updates and manages the central inventory database.',
              stack: ['HTML5', 'Vanilla CSS', 'React.js', 'FastAPI', 'SQLite']
            },
            {
              name: 'Quick and Easy Online Playground Reservation Hub',
              concept: 'Reserve playgrounds in just a few clicks and easily Check availability and book instantly for Fast, easy, and convenient for everyone.',
              stack: ['HTML5','Tailwind css','React.js', 'Node.js', 'MongoDB']
            },
            {
              name: 'Startup portfolio website',
              concept: 'A professional portfolio platform designed for startups and tech businesses to showcase their brand, services, and success stories in one place. Built to establish credibility, enhance digital presence, and drive business growth through better customer engagement and professional presentation.',
              stack: ['HTML5', 'Vanilla CSS', 'React.js', 'Emailjs', 'SQLite']
            },
            {
              name: 'E-commerce website + Mobile application',
              concept: 'A modern e-commerce website designed with a user-friendly homepage, secure mobile number login system, and a dynamic product listing section for seamless shopping. The platform includes a simple UPI-based payment option for fast and secure transactions. An advanced admin panel allows administrators to add and manage products efficiently while also handling customer orders through an organized order management system. Built to deliver a smooth shopping experience with efficient business management features.',
              stack: ['HTML5','Tailwind css','React.js', 'FastAPI', 'MongoDB Atlas']
            }
          ].map((project, idx) => (
            <div
              key={idx}
              data-aos="zoom-in-up"
              data-aos-delay={idx * 50} 
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box'
              }}
            >
              <div>
                <h3 style={{ margin: '0 0 15px 0', fontSize: '1.3rem', fontWeight: '700', color: '#22c55e' }}>
                  {project.name}
                </h3>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', margin: '0 0 6px 0', fontSize: '1rem', fontWeight: '600' }}>Concept:</h4>
                  <p style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                    {project.concept}
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <h4 style={{ color: '#ffffff', margin: '0 0 10px 0', fontSize: '1rem', fontWeight: '600' }}>Tech Stack:</h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '6px',
                        padding: '5px 12px',
                        fontSize: '0.8rem',
                        color: '#f3f4f6',
                        fontWeight: '500'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div
        id="contact"
        className="section-box"
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto 40px',
          padding: '50px 30px',
          borderRadius: '28px',
          background: 'rgba(15, 23, 42, 0.55)', 
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          boxSizing: 'border-box'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
          <span style={{ fontSize: '1.8rem' }}>🤙</span>
          <h2 className="section-title" style={{ margin: 0, fontSize: '2.2rem', fontWeight: '800', color: '#ffffff' }}>
            Let's Connect
          </h2>
        </div>

        <p style={{ color: '#d1d5db', fontSize: '1.05rem', marginBottom: '35px', maxWidth: '550px', margin: '0 auto 35px', lineHeight: '1.6' }}>
          Tap right away to reach me instantly!
        </p>

        {/* Buttons Grid Container */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Email Me Button */}
          <a
            href={emailAddress} 
            className="contact-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 32px',
              fontSize: '1rem',
              fontWeight: '700',
              textDecoration: 'none',
              borderRadius: '16px',
              color: '#ffffff',
              backgroundColor: '#bdab39', // Fixed your brown setup to match sleek graphite theme
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = '#334155';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = '#1e293b';
            }}
          >
            ⌯⌲ Email Me
          </a>

          {/* WhatsApp Chat Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 32px',
              fontSize: '1rem',
              fontWeight: '700',
              textDecoration: 'none',
              borderRadius: '16px',
              color: '#ffffff',
              backgroundColor: '#22c55e', 
              boxShadow: '0 4px 14px rgba(34, 197, 94, 0.3)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = '#16a34a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = '#22c55e';
            }}
          >
            🗪 WhatsApp Chat
          </a>
        </div>
      </div>
    </div>
  )
}