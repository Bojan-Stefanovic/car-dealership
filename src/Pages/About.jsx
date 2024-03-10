import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
function About() {
  return (
    <section className="about-section py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Welcome to The Wheel Deal - Excellence in Automotive
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              Founded in 1998, The Wheel Deal is not just a car dealership, but
              a place where automotive dreams come to life. Our mission extends
              beyond the sale of high-quality vehicles; we aim to provide a
              comprehensive and exhilarating car buying and ownership
              experience. We're dedicated to making every customer's journey
              enjoyable, from the initial inquiry to long after they've driven
              off the lot, with unparalleled support and service.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              What Sets Us Apart
            </h2>
            <ul className="list-disc pl-4 text-lg">
              <li>
                <strong>Curated Selection</strong>: Each vehicle in our
                inventory is handpicked by our experts for its performance,
                reliability, and style, ranging from the latest models to
                timeless classics.
              </li>
              <li>
                <strong>Comprehensive Expertise</strong>: Our team consists of
                passionate automotive enthusiasts and industry veterans with
                decades of experience, ensuring that you receive knowledgeable
                and thoughtful guidance.
              </li>
              <li>
                <strong>Personalized Service</strong>: We pride ourselves on
                creating a tailored experience for each customer, recognizing
                that everyone's needs and preferences are unique.
              </li>
              <li>
                <strong>Transparent Financing Options</strong>: With access to a
                wide range of financing solutions, we offer clear, flexible
                terms designed to suit your financial situation.
              </li>
              <li>
                <strong>After-Sales Support</strong>: Our commitment to you
                doesn't end with a sale. Our after-sales services include
                maintenance, repairs, and parts, ensuring your vehicle remains
                in top condition.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            Our Core Values
          </h2>
          <ul className="list-disc pl-4 text-lg">
            <li>
              <strong>Integrity and Transparency</strong>: We conduct our
              business with the highest level of honesty, ensuring that you can
              trust us with your automotive needs.
            </li>
            <li>
              <strong>Passion for Excellence</strong>: Our love for cars and
              commitment to excellence drive us to provide the best for our
              customers every day.
            </li>
            <li>
              <strong>Innovative Approach</strong>: We stay at the forefront of
              automotive trends and technology to bring our customers
              cutting-edge solutions.
            </li>
            <li>
              <strong>Community Engagement</strong>: Beyond selling cars, we
              strive to be an integral part of our community, supporting local
              events and initiatives.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg mt-8">
            At The Wheel Deal, we're more than a dealership; we're your partners
            on the road of life. Whether you're in search of the perfect car,
            seeking expert advice, or simply looking to share your automotive
            passion, we welcome you. Visit us and let's embark on this journey
            together, driving into a future where every mile is a milestone.
          </p>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-150">
            Explore Our Inventory
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
