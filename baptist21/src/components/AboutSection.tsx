import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="w-screen py-16 px-4 bg-white dark:bg-zinc-800 text-gray-800">
      <h2 className="text-3xl font-bold font-serif mb-3 dark:text-white">About the 21st Century Baptist Catechism</h2>
      <div className="w-[70%] mx-auto flex flex-col md:flex-row gap-y-8 md:gap-x-8">
        {/* Left Column - 65% */}
        <div className="md:w-[65%] space-y-6">

          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">The Purpose and the Language</h3>
            <p className="text-left text-gray-600 dark:text-gray-100">
              The 1695 Baptist Catechism (AKA Keach's Catechism), was created to instruct believers—especially the young—in sound doctrine through a clear and structured series of questions and answers rooted in Scripture.
            </p>
            <p className="text-left text-gray-600 dark:text-gray-100">
              While the truths of the original remain timeless, the language can be difficult for modern readers. This version updates archaic words and sentence structures to improve clarity without altering doctrine.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Contributors & Endorsements</h3>
            <p className="text-left dark:text-gray-100">
              This modernization was a collaborative effort inspired by a love for historic Baptist theology. It is endorsed by elders, deacons, and laymen in the Reformed/Particular Baptist tradition.
            </p>
          </div>

          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">A Gift to the Church</h3>
            <p className="text-left text-gray-600 dark:text-gray-100">
              This work is dedicated to the public domain in accordance with the convictions outlined in{" "}
              <a
                href="https://www.thedoreanprinciple.org/"
                className="text-blue-600 dark:text-indigo-300 underline hover:text-blue-800 dark:hover:text-indigo-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Dorean Principle
              </a>
              , believing that freely sharing the gospel and its resources is biblical and best honors Christ.
            </p>
          </div>
        </div>

        {/* Right Column - 35% */}
        <div className="md:w-[35%] space-y-6 border-l border-gray-200 pl-6 flex flex-col justify-center gap-8">
          <blockquote className="text-gray-600 italic text-left dark:text-white">
            “Catechizing is an ancient and biblical means of discipling believers in the faith entrusted once for all to the saints.”
            <footer className="mt-2 text-sm text-gray-500 text-right dark:text-gray-100">
              — <cite>Ryan Cornett</cite>
            </footer>
          </blockquote>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-left font-medium">
              This catechism is a tool for teaching, reflection, and worship—both individually and within families, churches, Christian schools, Sunday School classes, Vacation Bible School, etc.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Contact</h4>
            <p className="text-left text-sm text-gray-600 dark:text-gray-100">
              For questions or suggestions, feel free to reach out to our team at{" "}
              <a href="mailto:baptist21@gmail.com" className="underline text-blue-600  dark:text-indigo-300 dark:hover:text-indigo-500 transition-colors">baptist21@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
