import React from "react";
import Innovation from "../../assets/journal/innovations.jpg";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const InnovationJournal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Journal Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-2">
            THE INTERNATIONAL JOURNAL OF MULTIDISCIPLINARY RESEARCHES AND INNOVATIONS (IJMRI)
          </h1>
          <p className="text-xl text-indigo-600 italic">
            A Beacon of Hope in a World Seeking Well-being
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl mb-12">
          <img
            src={Innovation}
            alt="Multidisciplinary Research and Innovation"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Journal Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              A New Era of Health: Embracing the Interconnectedness of Life
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The world is facing a health crisis, a complex tapestry woven from chronic diseases, mental health challenges, and a growing disconnect from our own well-being. The traditional medical model, focused on treating disease, is proving insufficient in addressing the intricate web of factors that influence human health. We need a new paradigm, one that embraces a holistic approach, recognizing the interconnectedness of physical, mental, emotional, and spiritual well-being. This is the call to action that drives the International Journal of Multidisciplinary Researches and Innovations (IJMRI).
            </p>
          </section>

          {/* Vision Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              A Vision for a Healthier World: Where Well-being is the Guiding Star
            </h2>
            <p className="text-gray-700 leading-relaxed">
              IJMRI is more than just a journal; it is a platform for a global dialogue on Multidisciplinary Researches and Innovations, a catalyst for groundbreaking research, and a beacon of hope for a world seeking well-being. We believe that true health is not simply the absence of disease, but a state of vibrant vitality and flourishing, where individuals are empowered to live their lives to the fullest potential. This vision is not a utopian dream, but a tangible goal that can be achieved through a collective effort, a shared commitment to understanding and nurturing the interconnectedness of life.
            </p>
          </section>

          {/* Disciplines Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              A Tapestry of Disciplines, Woven Together for a Common Purpose
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              IJMRI embraces the understanding that health is a complex phenomenon that cannot be understood in isolation. We welcome contributions from a diverse range of disciplines, recognizing that true health is a symphony of interconnected elements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Medical Professionals",
                  content: "Physicians, nurses, pharmacists, and other healthcare providers committed to a holistic approach to patient care, integrating traditional and alternative medicine, and embracing the power of personalized medicine."
                },
                {
                  title: "Psychologists and Mental Health Professionals",
                  content: "Clinicians, researchers, and educators who explore the intricate relationship between mental health and overall well-being, recognizing the profound impact of our thoughts, emotions, and beliefs on our physical health."
                },
                {
                  title: "Nutritionists and Dietitians",
                  content: "Experts in food science, nutrition, and the impact of diet on health and disease, understanding the power of food as medicine and the importance of sustainable food systems."
                },
                {
                  title: "Traditional Healers",
                  content: "Practitioners of Ayurveda, Traditional Chinese Medicine, Indigenous healing traditions, and other complementary therapies, sharing their knowledge and wisdom about the interconnectedness of body, mind, and spirit."
                },
                {
                  title: "Social Scientists",
                  content: "Sociologists, anthropologists, and cultural studies scholars who examine the social determinants of health, recognizing the profound impact of social factors on health outcomes."
                }
              ].map((discipline, index) => (
                <div key={index} className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                  <h3 className="font-semibold text-indigo-800 mb-3">{discipline.title}</h3>
                  <p className="text-gray-700">{discipline.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Research Commitment Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              A Commitment to Rigorous Research and Innovative Solutions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              IJMRI is committed to publishing high-quality research that meets the highest standards of scientific rigor and peer review. We prioritize research that:
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Pushes the boundaries of knowledge",
                  content: "We seek groundbreaking research that challenges conventional thinking and offers new insights into the nature of health and well-being, exploring the frontiers of scientific understanding and embracing the power of interdisciplinary collaboration."
                },
                {
                  title: "Addresses real-world challenges",
                  content: "We focus on research that has the potential to improve health outcomes and address pressing health issues facing communities around the world, seeking solutions that are both effective and sustainable."
                },
                {
                  title: "Promotes a culture of collaboration",
                  content: "We encourage interdisciplinary research and collaboration between researchers, practitioners, and community members, recognizing that true progress is achieved through shared knowledge and collective action."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-indigo-100 text-indigo-700 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-indigo-700 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Global Platform Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              A Global Platform for Dialogue and Action
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              IJMRI is committed to making its content accessible to a global audience, fostering a worldwide dialogue on Multidisciplinary Researches and Innovations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Publish online",
                  content: "The journal will be freely available online, ensuring open access to its content, breaking down barriers to knowledge."
                },
                {
                  title: "Multilingual support",
                  content: "We will translate key articles into multiple languages to reach a wider audience, bridging cultural divides."
                },
                {
                  title: "Interactive features",
                  content: "We will incorporate multimedia elements, podcasts, and online forums to enhance engagement and foster dialogue."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white border border-indigo-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-indigo-700 mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              A Call to Action: Join the Movement for Multidisciplinary Researches and Innovations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              IJMRI invites researchers, practitioners, and individuals passionate about health and well-being to join us in this journey. Together, we can create a world where health is not just a goal, but a reality for all, a world where well-being is the guiding star, illuminating the path to a healthier, more vibrant future.
            </p>

            <h3 className="text-xl font-semibold text-indigo-700 mb-4">
              The Future of Health: A Tapestry Woven from Science, Art, and the Human Spirit.
            </h3>
          </section>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            to="/articles" 
            className="inline-flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-lg transition duration-200"
          >
            Explore Published Articles
            <MdKeyboardArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InnovationJournal;