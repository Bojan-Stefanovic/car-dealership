/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function CareersPage() {
  return (
    <main className="my-28">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Join Our Team
        </h1>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Culture</h2>
          <p className="mb-4">
            At The Wheel Deal, we're driven by a passion for automotive
            excellence and a commitment to innovation. Our team is our most
            valuable asset, fostering a culture of collaboration, respect, and
            continuous learning. We believe in empowering our employees to grow
            their skills and achieve their career goals within a supportive and
            dynamic environment.
          </p>
          <p>
            We embrace diversity and encourage creativity, valuing each
            individual's contribution to our shared success. Join us, and be
            part of a team that's shaping the future of the automotive industry.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Work With Us?</h2>
          <ul className="list-disc pl-4">
            <li>Competitive salary and performance bonuses</li>
            <li>Comprehensive health, dental, and vision insurance</li>
            <li>Generous vacation and personal time off</li>
            <li>401(k) plan with company matching</li>
            <li>Professional development and training opportunities</li>
            <li>Employee discounts on vehicles and services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-noOffset shadow-gray-600/30 rounded-lg">
              <h3 className="font-bold text-xl mb-2">
                Automotive Sales Consultant
              </h3>
              <p className="mb-4">
                Seeking an experienced and motivated sales consultant to join
                our team. Excellent communication skills and a passion for cars
                required.
              </p>
              <Link
                to="/contact"
                className="text-[#6faa63] hove:text-[#8bc77f] hover:underline">
                Apply Now
              </Link>
            </div>
            <div className="bg-white p-6 shadow-noOffset shadow-gray-600/30 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Service Technician</h3>
              <p className="mb-4">
                Looking for a skilled technician to perform maintenance and
                repairs. ASE certification preferred.
              </p>
              <Link
                to="/contact"
                className="text-[#6faa63] hove:text-[#8bc77f] hover:underline">
                Apply Now
              </Link>
            </div>
            <div className="bg-white p-6 shadow-noOffset shadow-gray-600/30 rounded-lg">
              <h3 className="font-bold text-xl mb-2">
                Digital Marketing Specialist
              </h3>
              <p className="mb-4">
                Join our marketing team to drive our digital presence.
                Experience with SEO, PPC, and social media marketing required.
              </p>
              <Link
                to="/contact"
                className="text-[#6faa63] hove:text-[#8bc77f] hover:underline">
                Apply Now
              </Link>
            </div>
            <div className="bg-white p-6 shadow-noOffset shadow-gray-600/30 rounded-lg">
              <h3 className="font-bold text-xl mb-2">
                Customer Service Representative
              </h3>
              <p className="mb-4">
                Seeking a customer-focused individual to provide exceptional
                service. Strong communication and problem-solving skills needed.
              </p>
              <Link
                to="/contact"
                className="text-[#6faa63] hove:text-[#8bc77f] hover:underline">
                Apply Now
              </Link>
            </div>
          </div>
        </section>
        <div className="mt-20">
          <Link
            to="/"
            className="mt-4 px-6  py-2 text-white bg-[#6faa63] rounded hover:bg-[#8bc77f] transition duration-200">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default CareersPage;
