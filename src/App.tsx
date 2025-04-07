import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Cpu, Terminal, Database } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      {/* Circuit board pattern overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-blue-500"
            style={{
              width: `${Math.random() * 100}px`,
              height: '1px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      <div className="fixed inset-0 pointer-events-none">
        {[Code2, Cpu, Terminal, Database].map((Icon, i) => (
          <div
            key={i}
            className="absolute text-blue-500/20"
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
        <div className="text-center backdrop-blur-lg bg-white/10 p-12 rounded-3xl shadow-2xl max-w-4xl w-full">
          <div className="mb-8 relative">
            {/* Hexagonal frame for profile picture */}
            <div className="relative mx-auto w-48 h-48 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <img
                src="https://avatars.githubusercontent.com/u/147215718?v=4"
                alt="Profile"
                className="absolute inset-2 rounded-full object-cover border-4 border-gray-900"
              />
              {/* Tech pattern around profile */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-1 bg-blue-500"
                  style={{
                    transform: `rotate(${i * 60}deg) translateX(6rem)`,
                    transformOrigin: 'center',
                  }}
                />
              ))}
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">
            Anjan Bellamkonda
          </h1>
          <p className="text-2xl text-blue-200 mb-8">
            ML Engineer | Full Stack Developer
          </p>
          <div className="flex justify-center gap-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-[1px] -top-4"></div>
            <a href="https://github.com/AnjanB3012" className="text-white hover:text-blue-300 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anjan-bellamkonda/" className="text-white hover:text-blue-300 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:anjanbellamkonda@vt.edu" className="text-white hover:text-blue-300 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-[1px] -bottom-4"></div>
          </div>
          <div className='mt-8'>
            {/* Resume Button */}
            <a 
              href="https://app.enhancv.com/share/fb1b9237/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors transform hover:scale-105"
            >
              Resume
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
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Tech pattern background */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-8 h-8 border border-blue-500 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center relative">
              About Me
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </h2>
            <div className="text-blue-100 leading-relaxed relative z-10">
              <p>
              I am a computer science student with a strong foundation in machine learning, AI, and software development. My expertise includes fine tuning AI Models, developing efficient algorithms, and integrating NLP-based solutions into practical applications. I enjoy working at the intersection of data, automation, and AI-driven decision-making. My experience includes conducting sentiment analysis research as part of a field study on AI in Education, where I analyzed political sentiment shifts using logistic regression models. I have also developed AI-based tools like NeuralHire, which leverages multiple LLMs to evaluate resumes beyond traditional ATS filtering. Beyond AI development, I am passionate about theoretical AI concepts, particularly in areas like self-theorizing AI and autonomous reasoning. I approach problem-solving with a mix of analytical rigor and scientific reasoning, always striving to optimize and refine existing methodologies. Feel free to connect with me to discuss AI, machine learning, or innovative problem-solving in tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={el => sections.current[1] = el} className="py-20 opacity-0 transition-opacity duration-1000">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <h2 className="text-4xl font-bold text-white mb-8 text-center relative">
              Experience
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </h2>
            <div className="space-y-6 text-blue-100">
              <div className="p-6 bg-blue-500/10 rounded-lg">
                <h3 className="text-2xl font-semibold text-white">AI/ML Research Assistant - IDPro, Virginia Tech Engineering Education</h3>
                <p className="text-blue-200">&#8594;Conducted in-depth sentiment analysis on Reddit posts during key political events such as the Capitol insurrection, the overturning of Roe v. Wade, and the George Floyd protests, uncovering valuable insights into public sentiment trends.<br />
                &#8594;Designed and implemented logistic regression models to analyze and rank key topics based on frequency, polarity, and intensity of sentiment, achieving high predictive accuracy.<br />
                &#8594;Extracted and processed large datasets using Python to identify spikes in sentiment patterns, correlating them with political and social catalysts.<br />
                &#8594;Collaborated with a multidisciplinary team to refine data collection methodologies, ensuring robust and reproducible results for research findings.<br />
                &#8594;Presented insights and findings through visual dashboards and reports, enabling stakeholders to better understand sentiment shifts and their implications.</p>
              </div>  
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={el => sections.current[2] = el}
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
        ref={el => sections.current[3] = el}
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
      <section ref={el => sections.current[4] = el} className="py-20 opacity-0 transition-opacity duration-1000">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <h2 className="text-4xl font-bold text-white mb-8 text-center relative">
              Skills
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-blue-100 text-center">
              <div className="p-4 bg-blue-500/10 rounded-lg">Python</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">JAVA</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">C++</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">C#</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">SQL</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">JavaScript</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">PyTorch</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Tensorflow</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Flask</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Sckit-Learn</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">React.js</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Angular.js</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">JAVA Spring Boot</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Pandas</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">OpenCV</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Microsoft Azure</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Google Cloud Platform</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Azure OpenAI</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Google AI Studio</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">AWS EC2 and S3</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Docker</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Linux</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">MATLAB</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Machine Learning</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Deep Learning</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Natural Language Processing</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">UI/UX Design</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Unity</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Unreal Engine</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Model Fine-Tuning</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Algorithms</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Debugging</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Problem-Solving</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Leadership</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Teamwork</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Quick Learner</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Detail Oriented</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Analytical Thinking</div>
              <div className="p-4 bg-blue-500/10 rounded-lg">Adaptability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={el => sections.current[5] = el}
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