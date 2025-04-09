const reference = {
  citation: "Romans 1:19-20",
  text: `<v-num data-verse="19"></v-num>For what may be known about God is plain to them, because God has made it plain to them. <v-num data-verse="20"></v-num>For since the creation of the world God's invisible qualities, His eternal power and divine nature, have been clearly seen, being understood from His workmanship, so that men are without excuse.`
}

const ResourcesSection = () => {
  return (
    <section id="resources" className="w-screen py-16 px-4 bg-gray-50 dark:bg-zinc-900 text-gray-800">
      <h2 className="text-3xl font-bold font-serif mb-6 dark:text-white">Resources for Growth and Discipleship</h2>
      <div className="w-[70%] mx-auto flex flex-col md:flex-row gap-y-8 md:gap-x-8">
        {/* Left Column - 40% */}
        <div className="md:w-[40%] space-y-2 border-r border-gray-200 pr-6 flex flex-col justify-center gap-8">
          <blockquote className="text-gray-600 italic text-left dark:text-white">
            "Let the word of Christ richly dwell within you as you teach and admonish one another with all wisdom..."
            <footer className="mt-2 text-sm text-gray-500 text-right dark:text-gray-100">
              — <cite>Colossians 3:16 BSB</cite>
            </footer>
          </blockquote>
          <div className="px-4">
            <h3 className="text-xl font-semibold dark:text-white">Spiritual Disciplines</h3>
            <p className="text-left text-gray-600 dark:text-gray-100">
              Need to learn, teach, or cultivate habits of memorization and meditation? The catechism is what you need! Pair it with with frequent Bible study, singing rich hymns & psalms, and reading historical creeds or confessions. Seek to form rhythms of worship and teaching in the home, church, & personal study.
            </p>

            <div>
              <div
                className="text-sm mt-2 leading-relaxed text-left"
                dangerouslySetInnerHTML={{ __html: reference.text }}
              />
              <h3 className="text-right">{reference.citation}</h3>
            </div>
          </div>
        </div>

        {/* Right Column - 60% */}
        <div className="md:w-[60%] space-y-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Suggested Companion Resources</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-100 text-left">
              <li className="mb-3">
                <a
                  href="https://www.1689.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-indigo-300 underline hover:text-blue-800 dark:hover:text-indigo-500"
                >
                  1689.com
                </a>{" "}
                — The Second London Baptist Confession of Faith
              </li>
              <li className="mb-3">
                <a
                  href="https://baptistcatechism.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-indigo-300 underline hover:text-blue-800 dark:hover:text-indigo-500"
                >
                  BaptistCatechism.org
                </a>{" "}
                — The original 1695 catechism text
              </li>
              <li className="mb-3">
                <a
                  href="https://baptisthymnal.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-indigo-300 underline hover:text-blue-800 dark:hover:text-indigo-500"
                >
                  BaptistHymnal.org
                </a>{" "}
                — Historic and modern hymns curated for doctrinal depth and corporate worship
              </li>
              <li className="mb-3">
                <a
                  href="https://custombibleplan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-indigo-300 underline hover:text-blue-800 dark:hover:text-indigo-500"
                >
                  CustomBiblePlan.com
                </a>{" "}
                — Fully customizable and individualized Bible reading plans: choose the dates, time, days of the week, book order, and format (CSV, iCal, printable).
              </li>
              <li className="mb-3">
                <a
                  href="https://lofi.bible"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-indigo-300 underline hover:text-blue-800 dark:hover:text-indigo-500"
                >
                  Lofi.Bible
                </a>{" "}
                — Play Berean Standard Bible or King James Version audio with lofi chill beats and hymns in the background.
              </li>
              <li className="mb-3">
                <a
                  href="https://biblebackground.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-indigo-300 underline hover:text-blue-800 dark:hover:text-indigo-500"
                >
                  BibleBackground.com
                </a>{" "}
                — Play Berean Standard Bible or King James Version audio with background ambience.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-black dark:text-white mt-4 md:w-[50%] space-y-6 mx-auto">
          <h3 className="text-2xl font-bold">With each of the 114 questions and answers you'll find:</h3>
          <div>
            <ol className="list-decimal list-inside text-gray-600 dark:text-gray-100 text-left">
              <li>Scripture references</li>
              <li>Categories</li>
              <li>Commentary</li>
              <li>Kids' music</li>
              <li>Music video</li>
              <li>Other related content</li>
            </ol>
          </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
