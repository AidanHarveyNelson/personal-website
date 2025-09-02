"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900 font-['Poppins',sans-serif]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-4 text-center bg-white shadow-2xl rounded-b-3xl animate-fade-in-up">
        <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient-shift">
          Aidan Harvey-Nelson Consulting
        </h1>
        <p className="text-xl mb-8 max-w-2xl text-gray-600 leading-relaxed animate-fade-in-up delay-300">
          Transforming your data into actionable insights through expert data engineering, analytics, and AI solutions.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold animate-fade-in-up delay-500 hover:from-blue-700 hover:to-purple-700"
        >
          Book a Meeting
        </a>
      </section>

      {/* About Me Section */}
      <section className="max-w-4xl mx-auto py-20 px-4 animate-fade-in-up" id="about">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">About Me</h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Hi, I&apos;m Aidan Harvey-Nelson, a data and analytics specialist with extensive experience in transforming raw data into strategic business value. I help organizations build robust data infrastructure, implement advanced analytics solutions, and leverage AI to drive decision-making and operational efficiency. With a proven track record of delivering enterprise-scale data migrations, real-time integration architectures, and predictive analytics models, I bring both technical depth and business acumen to every project.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            My expertise spans the full data lifecycle - from architecting scalable data warehouses and implementing CI/CD pipelines to developing machine learning models that deliver measurable business impact. I&apos;ve successfully led complex migrations to cloud platforms like Snowflake, built microservice architectures connecting diverse enterprise systems, and modernized development practices that have reduced deployment times and improved system reliability. Whether you&apos;re looking to unlock insights from your data, modernize your infrastructure, or implement AI-driven solutions, I&apos;m passionate about helping organizations harness the power of their data to achieve transformational results.
          </p>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="max-w-4xl mx-auto py-20 px-4 animate-fade-in-up" id="services">
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">What I Offer</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <li className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 group border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3 text-gray-800">Data Engineering</h3>
            <p className="text-gray-600 leading-relaxed">Design and build scalable data pipelines, ETL processes, and data warehouses to ensure reliable, efficient data flow across your organization.</p>
          </li>
          <li className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 group border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3 text-gray-800">Data Reporting & Analytics</h3>
            <p className="text-gray-600 leading-relaxed">Create comprehensive dashboards, automated reports, and advanced analytics solutions that provide actionable insights for strategic decision-making.</p>
          </li>
          <li className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 group border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3 text-gray-800">Data Integration</h3>
            <p className="text-gray-600 leading-relaxed">Seamlessly connect disparate data sources, APIs, and systems to create unified data ecosystems that break down silos and improve data accessibility.</p>
          </li>
          <li className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 group border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12a1 1 0 01-1-1V9a1 1 0 112 0v2a1 1 0 01-1 1z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 102 0V5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3 text-gray-800">AI & Machine Learning</h3>
            <p className="text-gray-600 leading-relaxed">Implement intelligent AI components, predictive models, and machine learning solutions to automate processes and unlock advanced insights from your data.</p>
          </li>
          <li className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 group border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h3.5a3.5 3.5 0 000-7H11V3.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 3.414V6H5.5A3.5 3.5 0 002 9.5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3 text-gray-800">DevOps & Infrastructure</h3>
            <p className="text-gray-600 leading-relaxed">Streamline deployment processes, implement CI/CD pipelines, containerization, and cloud infrastructure management to ensure reliable and scalable systems.</p>
          </li>
          <li className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 group border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3 text-gray-800">Backend Development</h3>
            <p className="text-gray-600 leading-relaxed">Build robust, scalable backend systems, APIs, and microservices architectures that power modern applications and handle complex business logic efficiently.</p>
          </li>
        </ul>
      </section>

      {/* Projects & Impact Section */}
      <section className="max-w-4xl mx-auto py-20 px-4 animate-fade-in-up" id="projects">
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">Projects & Impact</h2>
        <div className="space-y-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 border border-gray-100 group">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">Data Warehouse Migration Program</h3>
                <p className="text-gray-600 leading-relaxed">Completed 4 on-premises data warehouse migrations to Snowflake, leveraging real-time ingestion tools such as Kafka to minimize lag from source systems to warehouse platform. Reduced data latency by 85% and achieved 99.9% uptime while cutting infrastructure costs by $2.3M annually.</p>
              </div>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 border border-gray-100 group">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">Enterprise Integration Architecture</h3>
                <p className="text-gray-600 leading-relaxed">Completed 15+ integrations from core systems to bespoke platforms including SAP, ClassPass, OpenPath, Workday, Salesforce, and HubSpot databases using a microserver architecture. Improved data flow efficiency by 70% and reduced integration maintenance overhead by 60% through standardized API patterns.</p>
              </div>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 border border-gray-100 group">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">DevOps Transformation Initiative</h3>
                <p className="text-gray-600 leading-relaxed">Modernized company&apos;s development process by implementing comprehensive CI/CD pipelines using GitLab CI, Terraform for Infrastructure as Code, and automated testing frameworks. Reduced production bugs by 78%, decreased deployment time from 4 hours to 12 minutes, and achieved 95% deployment success rate across staging and production environments.</p>
              </div>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 border border-gray-100 group">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">Predictive Healthcare Analytics</h3>
                <p className="text-gray-600 leading-relaxed">Implemented a machine learning model that accurately predicted which residents were most likely to fall, enabling proactive intervention before incidents occurred. Achieved 89% prediction accuracy and reduced fall incidents by 42% across 3 healthcare facilities, potentially preventing serious injuries for over 1,200 residents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="max-w-4xl mx-auto py-20 px-4 animate-fade-in-up" id="certifications">
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">Certifications</h2>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-gray-100">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              Professional certifications demonstrating expertise across cloud platforms, data engineering, and modern development practices.
            </p>
          </div>
          
          {/* Credly Badge Embed */}
          <div className="flex flex-col items-center space-y-8">
            
            {/* Real Credly Badges */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <div className="flex justify-center">
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="84b659b4-6d80-438a-9ff3-5ae0143f7d4b" data-share-badge-host="https://www.credly.com"></div>
              </div>
              <div className="flex justify-center">
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="f55f96e7-3129-4652-8856-4abf3c12ac54" data-share-badge-host="https://www.credly.com"></div>
              </div>
              <div className="flex justify-center">
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="50c7f166-11a5-47d0-a425-2e710f8fce8d" data-share-badge-host="https://www.credly.com"></div>
              </div>
            </div>

            {/* Placeholder Badges */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-700">AWS Certified</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-xl text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Azure Certified</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Snowflake Certified</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://www.credly.com/users/aidan-harvey-nelson.3565c4f2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
              >
                View All Certifications on Credly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto py-20 px-4 animate-fade-in-up" id="contact">
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Booking Widget Placeholder */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 group">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Book a Meeting</h3>
              <p className="mb-6 text-gray-600 text-center leading-relaxed">Schedule a call to discuss your needs.</p>
              {/* Google Calendar iframe - replace with your actual Google Calendar embed link */}
              <iframe 
                src="https://calendar.google.com/calendar/embed?src=fizen2550%40gmail.com&ctz=Australia%2FMelbourne" 
                style={{border: 0}} 
                width="100%" 
                height="256" 
                frameBorder="0" 
                scrolling="no"
                title="Book a meeting"
                className="w-full h-64 border-0 rounded-xl shadow-inner"
              />
            </div>
          </div>
          {/* Email Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-6 text-gray-800">Send an Email</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white" placeholder="Your name" />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Message</label>
                <textarea id="message" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white" rows={4} placeholder="Tell me about your project or questions..."></textarea>
              </div>
              <button 
                type="button" 
                onClick={() => {
                  const nameElement = document.getElementById('name') as HTMLInputElement;
                  const emailElement = document.getElementById('email') as HTMLInputElement;
                  const messageElement = document.getElementById('message') as HTMLTextAreaElement;
                  
                  const name = nameElement?.value || 'Someone';
                  const email = emailElement?.value || '';
                  const message = messageElement?.value || '';
                  
                  const body = `Information to send:%0D%0A%0D%0AName: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`;
                  
                  window.location.href = `mailto:fizen2550@gmail.com?subject=${encodeURIComponent('Lets Chat')}&body=${body}`;
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-gray-500 bg-white/50 backdrop-blur-sm">
        <div className="animate-pulse">
          &copy; {new Date().getFullYear()} Aidan Harvey-Nelson Consulting. All rights reserved.
        </div>
      </footer>
      
      {/* Credly Badge Script */}
      <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
    </main>
  );
}
