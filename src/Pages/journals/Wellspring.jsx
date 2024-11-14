import React from "react";
import Wellspring from "../../assets/journal/wellspring.jpg";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const WellspringJournal = () => {
  return (
    <>
      <Header />

      <div className="mt-[100px] ml-[30px] lg:ml-[100px]">
        <div>
          <h1 className="text-[20px] font-bold underline">
            THE WELLSPRING JOURNAL OF HOLISTIC INTEGRATIVE HEALTH CARE RESEARCH
          </h1>
        </div>
        <div className="mt-[50px]">
          <img
            src={Wellspring}
            alt="professional nursing journal"
            className="w-[600px] lg:w-[900px] h-[300px] lg:h-[400px]"
          />
        </div>
        <div className="w-[300px] lg:w-[1000px] mt-[25px] text-[17px] font-mono">
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i>Allopathic Medicine: - </i>
            </span>{" "}
            General Practice, - Internal Medicine, - Surgery, - Pediatrics, -
            Obstetrics and Gynecology, - Psychiatry, - Dermatology, -
            Cardiology, - Oncology, - Radiology.
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Complementary Medicine: - </i>
            </span>{" "}
            Acupuncture, - Chiropractic care, - Massage therapy
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Meditation and mindfulness—</i>
            </span>{" "}
            Yoga, - Tai chi, - Qigong, - Herbal medicine,- Aromatherapy,-
            Reflexology.
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Alternative Medicine: </i>
            </span>{" "}
            Homeopathy, - Naturopathy, - Ayurveda, - Traditional Chinese
            Medicine (TCM), Unani medicine, - Anthropomorphic medicine, -
            Osteopathy, - Chiropractic radiology,
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Integrative Medicine: - </i>
            </span>{" "}
            Combines Conventional Western medicine with evidence-based
            complementary therapies Focuses on holistic approach,
            patient-centered care, and prevention.
          </p>
          <p className="mt-[15px]">
            Note: Some practices may overlap between categories, and some may be
            controversial or not widely accepted. This list aims to provide a
            comprehensive overview, but it is not exhaustive.
          </p>
          <h3 className="font-semibold text-[15px] mt-[15px]">
            <i>1. Extended Profile</i>
          </h3>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Mission: </i>
            </span>{" "}
            To bridge the gap between conventional and complementary healthcare
            by publishing rigorous, peer-reviewed research that explores the
            efficacy, safety, and mechanisms of action of wholistic integrative
            health care approaches. We aim to provide a platform for
            evidence-based knowledge that empowers both practitioners and
            individuals to make informed decisions about their health and
            well-being.
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Scope: </i>
            </span>{" "}
            The Wellspring welcomes original research articles, reviews, case
            studies, commentaries, and perspectives that address a wide range of
            topics within the realm of wholistic integrative health care,
            including:
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Traditional Medicine Systems: </i>
            </span>{" "}
            Ayurveda, Traditional Chinese Medicine, Traditional Korean Medicine,
            Traditional Japanese Medicine, Traditional African Medicine, and
            other indigenous healing practices.
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Mind-Body Therapies: </i>
            </span>{" "}
            Yoga, Meditation, Mindfulness, Hypnotherapy, Tai Chi, Qigong, and
            other practices that integrate the mind and body.
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Natural Therapies: </i>
            </span>{" "}
            Herbal Medicine, Homeopathy, Aromatherapy, Naturopathy, and other
            therapies that utilize natural substances and practices
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Lifestyle Interventions: </i>
            </span>{" "}
            Nutrition, Exercise, Stress Management, Sleep Hygiene, and other
            lifestyle factors that contribute to overall health and well-being
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Integrative Oncology: </i>
            </span>{" "}
            Cardiology, and other chronic disease management: Research exploring
            the role of complementary and alternative therapies in managing
            chronic conditions alongside conventional treatments.
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Health Disparities and Social Determinants of Health: </i>
            </span>{" "}
            Research examining the impact of social factors on health outcomes
            and the role of integrative health care in addressing health
            disparities
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i>
                {" "}
                Ethical and Legal Considerations in Integrative Health Care:{" "}
              </i>
            </span>{" "}
            Research exploring the ethical and legal implications of integrating
            complementary and alternative therapies into healthcare systems.
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Patient-Centered Care: </i>
            </span>{" "}
            Research focusing on the patient experience, patient-provider
            communication, and the role of the patient in their own health
            journey.
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Target Audience: </i>
            </span>{" "}
            The Wellspring is intended for researchers, clinicians, educators,
            policymakers, healthcare professionals, and consumers interested in
            the latest scientific evidence on wholistic integrative health care.
            We aim to reach a diverse audience, including those working in
            conventional medicine, complementary and alternative medicine, and
            public health.
          </p>
          <h3 className="font-semibold text-[15px] mt-[15px]">
            <i>Values:</i>
          </h3>{" "}
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Rigorous Research: </i>
            </span>{" "}
            We prioritize high-quality research that adheres to ethical and
            methodological standards, ensuring the reliability and validity of
            published findings.
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> Open Access: </i>
            </span>{" "}
            We believe in making knowledge freely available to all, promoting
            the dissemination of research findings and fostering collaboration
            within the field.
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i>Interdisciplinary Collaboration: </i>
            </span>{" "}
            We encourage collaboration between researchers from diverse fields,
            including medicine, psychology, biology, sociology, and
            anthropology, to foster a holistic understanding of health and
            well-being.
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i>Patient-Centered Care: </i>
            </span>{" "}
            We emphasize the importance of patient-centered care, recognizing
            the individual needs and preferences of patients in their health
            journey.
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i>Diversity and Inclusion: </i>
            </span>{" "}
            We are committed to promoting diversity and inclusion within the
            field of wholistic integrative health care, ensuring that research
            reflects the experiences and perspectives of all individuals.
          </p>
        </div>

        <div className="mt-[40px] mb-[30px]">
          <button
            type="submit"
            className="w-[50%] lg:w-full sm:w-auto px-6 py-2 bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex"
          >
            <Link to="/articles">See articles </Link>
            <span className="mt-[5px]">
              <MdKeyboardArrowRight />
            </span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WellspringJournal;
