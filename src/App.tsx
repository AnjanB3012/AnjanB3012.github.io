import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Cpu, Terminal, Database, Sparkles } from 'lucide-react';
import { BadgeCheck } from "lucide-react";

function App() {
  const sections = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, observerOptions);

    sections.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(17,24,39,0.4))]"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-indigo-500/20"
            style={{
              width: `${Math.random() * 200}px`,
              height: '1px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Floating tech icons with glow effect */}
      <div className="fixed inset-0 pointer-events-none">
        {[Code2, Cpu, Terminal, Database].map((Icon, i) => (
          <div
            key={i}
            className="absolute text-indigo-500/20 filter blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <Icon size={32} />
          </div>
        ))}
      </div>

      {/* Header with Profile */}
      <header className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center backdrop-blur-xl bg-white/5 p-12 rounded-3xl shadow-2xl max-w-4xl w-full border border-white/10 hover:border-white/20 transition-all duration-500">
          <div className="mb-8 relative">
            {/* Animated profile picture container */}
            <div className="relative mx-auto w-48 h-48 mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <img
                src="https://avatars.githubusercontent.com/u/147215718?v=4"
                alt="Profile"
                className="absolute inset-2 rounded-full object-cover border-4 border-gray-900 group-hover:border-indigo-500 transition-colors duration-500"
              />
              {/* Animated tech pattern */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-1 bg-indigo-500/50 group-hover:bg-indigo-500 transition-colors duration-500"
                  style={{
                    transform: `rotate(${i * 60}deg) translateX(6rem)`,
                    transformOrigin: 'center',
                    animation: `pulse ${2 + i * 0.5}s ease-in-out infinite`,
                  }}
                />
              ))}
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4 relative inline-block">
            Anjan Bellamkonda
            <Sparkles className="absolute -right-8 -top-4 text-yellow-400 animate-pulse" size={24} />
          </h1>
          <p className="text-2xl text-indigo-200 mb-8 font-light">
            ML Engineer | Full Stack Developer
          </p>
          <div className="flex justify-center gap-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent h-[1px] -top-4"></div>
            <a href="https://github.com/AnjanB3012" className="text-white hover:text-indigo-300 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anjan-bellamkonda/" className="text-white hover:text-indigo-300 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Linkedin size={24} />
            </a>
            <a href="mailto:anjanbellamkonda@vt.edu" className="text-white hover:text-indigo-300 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Mail size={24} />
            </a>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent h-[1px] -bottom-4"></div>
          </div>
          <div className='mt-8'>
            <a 
              href="https://app.enhancv.com/share/fb1b9237/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 inline-flex items-center gap-2"
            >
              Resume
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section
        ref={el => sections.current[0] = el}
        className="py-20 opacity-0 transition-opacity duration-1000"
      >
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl shadow-2xl relative overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center relative">
              About Me
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            </h2>
            <div className="text-indigo-100 leading-relaxed relative z-10">
              <p className="text-lg">
                I am a computer science student with a strong foundation in machine learning, AI, and software development. My expertise includes fine tuning AI Models, developing efficient algorithms, and integrating NLP-based solutions into practical applications. I enjoy working at the intersection of data, automation, and AI-driven decision-making. My experience includes conducting sentiment analysis research as part of a field study on AI in Education, where I analyzed political sentiment shifts using logistic regression models. I have also developed AI-based tools like NeuralHire, which leverages multiple LLMs to evaluate resumes beyond traditional ATS filtering. Beyond AI development, I am passionate about theoretical AI concepts, particularly in areas like self-theorizing AI and autonomous reasoning. I approach problem-solving with a mix of analytical rigor and scientific reasoning, always striving to optimize and refine existing methodologies. Feel free to connect with me to discuss AI, machine learning, or innovative problem-solving in tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        ref={el => sections.current[1] = el}
        className="py-20 opacity-0 transition-opacity duration-1000"
      >
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl shadow-2xl relative overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center relative">
              Education
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            </h2>
            <div className="space-y-6 text-indigo-100">
              <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Virginia Tech</h3>
                    <p className="text-indigo-200">Bachelor of Science in Computer Science</p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-indigo-500/25">
                    <p className="text-white font-bold">GPA: 3.54/4.0</p>
                  </div>
                </div>
                <p className="text-indigo-200">Expected Graduation: Spring 2028</p>
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-white mb-2">Related Coursework:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {['CS 1114', 'MATH 1225', 'STAT 2004', 'ENGE 2964', 'CS 2114', 'MATH 1226', 'MATH 2534', 'CS 2505 (In Progress)', 'CS 2104 (In Progress)'].map((course, index) => (
                      <span key={index} className="text-indigo-200 hover:text-white transition-colors duration-300 cursor-default">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={el => sections.current[2] = el} className="py-20 opacity-0 transition-opacity duration-1000">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl shadow-2xl relative overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center relative">
              Experience
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            </h2>
            <div className="space-y-6 text-indigo-100">
              <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white">Embedded Systems and AI Integration Lead - IDPro, Virginia Tech Engineering Education</h3>
                <p className="text-indigo-200 space-y-2">
                  <span className="block">&#8594;Designed embedded architecture for a wearable device assisting disabled tourists in museums.</span>
                  <span className="block">&#8594;Integrated AI models with firmware to deliver real-time audio-visual feedback via Bluetooth headset.</span>
                  <span className="block">&#8594;Developed middleware for seamless communication between sensors, processor, and AI outputs.</span>
                  <span className="block">&#8594;Optimized system for low-latency performance on resource-constrained hardware.</span>
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white">AI/ML Research Assistant - IDPro, Virginia Tech Engineering Education</h3>
                <p className="text-indigo-200 space-y-2">
                  <span className="block">&#8594;Conducted in-depth sentiment analysis on Reddit posts during key political events such as the Capitol insurrection, the overturning of Roe v. Wade, and the George Floyd protests, uncovering valuable insights into public sentiment trends.</span>
                  <span className="block">&#8594;Designed and implemented logistic regression models to analyze and rank key topics based on frequency, polarity, and intensity of sentiment, achieving high predictive accuracy.</span>
                  <span className="block">&#8594;Extracted and processed large datasets using Python to identify spikes in sentiment patterns, correlating them with political and social catalysts.</span>
                  <span className="block">&#8594;Collaborated with a multidisciplinary team to refine data collection methodologies, ensuring robust and reproducible results for research findings.</span>
                  <span className="block">&#8594;Presented insights and findings through visual dashboards and reports, enabling stakeholders to better understand sentiment shifts and their implications.</span>
                </p>
              </div>  
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section
        ref={el => sections.current[3] = el}
        className="py-20 opacity-0 transition-opacity duration-1000"
      >
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl shadow-2xl relative overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center relative">
              Publications
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            </h2>
            <div className="space-y-6 text-indigo-100">
              <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white">AbsInf: A Lightweight Object to Represent float('inf') in Dijkstra's Algorithm</h3>
                <p className="text-indigo-200 mb-2">arXiv</p>
                <p className="text-indigo-200 mb-2">Anjan Bellamkonda, Laksh Bharani and Harivatsan Selvam</p>
                <p className="text-indigo-200 mb-4">04/2025 - <a href="https://arxiv.org/abs/2504.04302" className="text-indigo-300 hover:text-white transition-colors duration-300">arxiv.org/abs/2504.04302</a></p>
                <p className="text-indigo-200">Proposed and benchmarked a novel computational construct, Abstract Infinity (AbsInf), achieving up to 19% performance improvement over traditional representations in shortest path algorithms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={el => sections.current[4] = el}
        className="py-20 opacity-0 transition-opacity duration-1000"
      >
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center relative">
              Projects
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group backdrop-blur-md bg-white/5 p-6 rounded-2xl shadow-xl 
                           hover:transform hover:-translate-y-2 transition-all duration-300
                           border border-transparent hover:border-blue-500/30">
                <div className="flex items-center mb-4">
                  <Code2 className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-white">Nalflo – AI Workflow Automation</h3>
                </div>
                <p className="text-blue-100 mb-4">
                &#8594;Engineered a modular RBAC system with XML-based persistence for users, groups, and tasks.<br />
                &#8594;Developed backend APIs in Flask for task assignment, group logic, and escalation handling.<br />
                &#8594;Currently building an NLP-powered rule engine to translate natural language instructions into automation logic.<br />
                &#8594;Prototyping a real-time dashboard to monitor automation flows and task outcomes.<br />
                </p>
                <a
                  href="https://github.com/AnjanB3012/nalflo"
                  className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors"
                >
                  Learn more <ExternalLink size={16} className="ml-2" />
                </a>
              </div>

              <div className="group backdrop-blur-md bg-white/5 p-6 rounded-2xl shadow-xl 
                           hover:transform hover:-translate-y-2 transition-all duration-300
                           border border-transparent hover:border-blue-500/30">
                <div className="flex items-center mb-4">
                  <Code2 className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-white">UniScheduler</h3>
                </div>
                <p className="text-blue-100 mb-4">
                &#8594;Built UniScheduler, a class scheduling tool that uses university APIs and AI to generate conflict-free, preference-based timetables.<br />
                &#8594;Developed with React and Flask, integrating course data parsing and LLM-driven logic for personalized schedule planning.<br />
                &#8594;Streamlined academic registration by enabling real-time filtering, time-block optimization, and duplicate class detection.<br />
                </p>
                <a
                  href="https://unischeduler.tech"
                  className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors"
                >
                  Learn more <ExternalLink size={16} className="ml-2" />
                </a>
              </div>

              <div className="group backdrop-blur-md bg-white/5 p-6 rounded-2xl shadow-xl 
                           hover:transform hover:-translate-y-2 transition-all duration-300
                           border border-transparent hover:border-blue-500/30">
                <div className="flex items-center mb-4">
                  <Code2 className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-white">NeuralHire</h3>
                </div>
                <p className="text-blue-100 mb-4">
                &#8594;Designed and implemented an AI-powered recruitment tool tailored to streamline resume screening for employers.<br />
                &#8594;Integrated advanced AI techniques to evaluate candidates comprehensively, focusing on both technical skills and personality traits.<br />
                &#8594;Leveraged Gemini API to analyze resumes, ensuring efficient filtering of top candidates based on diverse hiring criteria.<br />
                &#8594;Aimed to provide a modern alternative to traditional applicant tracking systems (ATS) by enhancing accuracy and minimizing bias.<br />
                &#8594;Focused on balancing user experience with robust technical performance to create a scalable and impactful hiring solution.<br />
                </p>
                <a
                  href="https://github.com/LakshBharani/AI-Resume-Analyser"
                  className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors"
                >
                  Learn more <ExternalLink size={16} className="ml-2" />
                </a>
              </div>

              <div className="group backdrop-blur-md bg-white/5 p-6 rounded-2xl shadow-xl 
                           hover:transform hover:-translate-y-2 transition-all duration-300
                           border border-transparent hover:border-blue-500/30">
                <div className="flex items-center mb-4">
                  <Code2 className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-white">Email Summarizer by Phone</h3>
                </div>
                <p className="text-blue-100 mb-4">
                &#8594;Developed an automation tool to summarize Gmail emails efficiently for quick consumption.<br />
                &#8594;Utilized the Gemini API to generate concise and meaningful summaries of emails based on specified time frames.<br />
                &#8594;Integrated Azure Speech Services to convert text summaries into audio for easy listening.<br />
                &#8594;Enabled real-time delivery of summaries by leveraging Twilio to initiate phone calls at user-defined times.<br />
                &#8594;Designed the system to enhance productivity by providing accessible and time-efficient email management.<br />
                </p>
                <a
                  href="https://github.com/AnjanB3012/Email-Phone-Summarizer"
                  className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors"
                >
                  Learn more <ExternalLink size={16} className="ml-2" />
                </a>
              </div>

              <div className="group backdrop-blur-md bg-white/5 p-6 rounded-2xl shadow-xl 
                           hover:transform hover:-translate-y-2 transition-all duration-300
                           border border-transparent hover:border-blue-500/30">
                <div className="flex items-center mb-4">
                  <Code2 className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-white">Loan Predictor</h3>
                </div>
                <p className="text-blue-100 mb-4">
                &#8594;Designed and implemented a machine learning model to predict loan approval probabilities based on applicant data.<br />
                &#8594;Utilized TensorFlow to build and train the predictive model, optimizing it for real-world use cases.<br />
                &#8594;Conducted extensive data preprocessing and feature selection to enhance the model's reliability.<br />
                &#8594;Achieved an accuracy rate of 65%, providing actionable insights into loan eligibility and risk assessment.<br />
                &#8594;Focused on improving decision-making processes in financial institutions by automating loan evaluation.<br />
                </p>
                <a
                  href="https://github.com/AnjanB3012/Loan-Predictor"
                  className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors"
                >
                  Learn more <ExternalLink size={16} className="ml-2" />
                </a>
              </div>

              <div className="group backdrop-blur-md bg-white/5 p-6 rounded-2xl shadow-xl 
                           hover:transform hover:-translate-y-2 transition-all duration-300
                           border border-transparent hover:border-blue-500/30">
                <div className="flex items-center mb-4">
                  <Code2 className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-white">Warehouse Zip Locator</h3>
                </div>
                <p className="text-blue-100 mb-4">
                &#8594;Developed a Python-based solution to optimize warehouse logistics and streamline hub selection.<br />
                &#8594;Integrated the Azure Maps API to analyze geolocation data and identify the most efficient warehouse hubs based on zip codes.<br />
                &#8594;Enhanced operational efficiency by minimizing transportation costs and delivery times.<br />
                &#8594;Designed the tool to support scalable and dynamic logistics planning for businesses with multiple warehouse locations.<br />
                &#8594;Focused on delivering a data-driven approach to improve decision-making in supply chain management.<br />
                </p>
                <a
                  href="https://github.com/AnjanB3012/warehouse-zip-locator"
                  className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors"
                >
                  Learn more <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section
        ref={el => sections.current[5] = el}
        className="py-20 opacity-0 transition-opacity duration-1000"
      >
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <h2 className="text-4xl font-bold text-white mb-12 text-center relative">
              Credentials
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Microsoft Certified: Azure AI Engineer Associate",
                  issuer: "Microsoft",
                  date: "January 2025"
                },
                {
                  title: "Microsoft Certified: Azure AI Fundamentals",
                  issuer: "Microsoft",
                  date: "May 2024"
                },
                {
                  title: "Career Essentials in GitHub Professional Certificate",
                  issuer: "GitHub & LinkedIn",
                  date: "December 2024"
                },
                {
                  title: "Building & Deploying Deep Learning Applications with TensorFlow",
                  issuer: "LinkedIn Learning",
                  date: "June 2024"
                },
                {
                  title: "Object-Oriented Data Structures in C++",
                  issuer: "UIUC & Coursera",
                  date: "April 2025"
                },
                {
                  title: "Foundations of Cybersecurity",
                  issuer: "Google",
                  date: "June 2025"
                }
              ].map((cert, i) => (
                <div
                  key={i}
                  className="group backdrop-blur-md bg-white/5 p-6 rounded-2xl shadow-xl 
                            hover:transform hover:-translate-y-2 transition-all duration-300
                            border border-transparent hover:border-blue-500/30"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <BadgeCheck className="text-blue-400 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                      <p className="text-blue-200 text-sm">{cert.issuer} &middot; {cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={el => sections.current[6] = el} className="py-20 opacity-0 transition-opacity duration-1000">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <h2 className="text-4xl font-bold text-white mb-8 text-center relative">
              Skills
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </h2>
            <div className="space-y-8">
              {/* Programming Languages */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">Programming Languages</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-100 text-center">
                  <div className="p-4 bg-blue-500/10 rounded-lg">Python</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Java</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">C++</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">C#</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">CPython</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">JavaScript</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">HTML</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">CSS</div>
                </div>
              </div>

              {/* Web Development */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">Web Development</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-100 text-center">
                  <div className="p-4 bg-blue-500/10 rounded-lg">React.js</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Flask</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">SQL</div>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">Cloud & DevOps</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-100 text-center">
                  <div className="p-4 bg-blue-500/10 rounded-lg">Microsoft Azure</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Google Cloud Platform</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">AWS EC2 and S3</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Docker</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Linux</div>
                </div>
              </div>

              {/* AI & Machine Learning */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">AI & Machine Learning</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-100 text-center">
                  <div className="p-4 bg-blue-500/10 rounded-lg">TensorFlow</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Scikit-learn</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">OpenCV</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Azure OpenAI</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Google AI Studio</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Natural Language Processing</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Deep Learning</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Machine Learning</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Model Fine-tuning</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Pandas</div>
                </div>
              </div>

              {/* Development Tools & Practices */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">Development Tools & Practices</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-100 text-center">
                  <div className="p-4 bg-blue-500/10 rounded-lg">Android Studio</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">ServiceNow ITSM</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Agile</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Debugging</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">UI/UX</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Optimization</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Algorithms</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Statistics</div>
                  <div className="p-4 bg-blue-500/10 rounded-lg">Financial Modelling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={el => sections.current[7] = el}
        className="py-20 opacity-0 transition-opacity duration-1000"
      >
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-8 text-center relative">
              Get in Touch
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </h2>
            <div className="flex justify-center space-x-8">
              <a
                href="mailto:anjanbellamkonda@vt.edu"
                className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors
                         hover:transform hover:scale-105"
              >
                <Mail size={24} />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/anjan-bellamkonda/"
                className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors
                         hover:transform hover:scale-105"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/AnjanB3012"
                className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors
                         hover:transform hover:scale-105"
              >
                <Github size={24} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;