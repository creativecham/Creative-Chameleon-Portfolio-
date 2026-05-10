export default function CreativeChameleonPortfolio() {
  const projects = [
    {
      title: 'Echoes of Prampram',
      description:
        'An upcoming cultural documentary project exploring heritage, modernization, and youth innovation in Prampram. Currently in development for 2026.',
      category: 'Upcoming Documentary',
    },
    {
      title: 'Silent Screams',
      description:
        'An upcoming mental health awareness project focused on raw street interviews and emotional storytelling in Ghana. Scheduled for production this year.',
      category: 'Upcoming Social Impact Project',
    },
    {
      title: 'Inside Ghana Road Trips',
      description:
        'Cinematic travel content and historical storytelling across Ghana.',
      category: 'Travel & Culture',
    },
    {
      title: 'The Phone Call',
      description:
        'A short cinematic film about connection, mistaken identity, and human emotion.',
      category: 'Short Film',
    },
  ];

  const services = [
    'Videography',
    'Documentary Production',
    'Video Editing',
    'Social Media Management',
    'Creative Direction',
    'Content Strategy',
    'Brand Storytelling',
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-red-500/10 to-green-500/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-yellow-400 mb-4">
                Richmond Tetteh Agbozo • Creative Storyteller • Videographer • Filmmaker
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Richmond Tetteh Agbozo
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
                Creative Chameleon
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                I am Richmond Tetteh Agbozo, a Ghanaian videographer, filmmaker, editor, and
                creative strategist passionate about storytelling, culture, and digital media.
                Under my creative identity “Creative Chameleon,” I create cinematic visuals,
                branded content, documentaries, and social media experiences that connect deeply
                with audiences.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://youtube.com/@insideghana1957"
                  target="_blank"
                  className="px-6 py-3 rounded-2xl bg-yellow-400 text-black font-semibold hover:scale-105 transition"
                >
                  View YouTube
                </a>

                <a
                  href="https://www.instagram.com/creative_chameleon_studio"
                  target="_blank"
                  className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
                >
                  Instagram Portfolio
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
                <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-yellow-500/20 via-red-500/20 to-green-500/20 flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-28 h-28 rounded-full bg-yellow-400 mx-auto mb-6 flex items-center justify-center text-black text-3xl font-black">
                      CC
                    </div>
                    <h2 className="text-3xl font-bold mb-3">Richmond Tetteh</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Ghanaian filmmaker, visual storyteller, and creative strategist passionate about
                      culture, people, and meaningful stories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.2em] mb-4 text-sm">About Me</p>
            <h2 className="text-4xl font-black mb-6">Turning Stories Into Experiences</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              My journey as a creator started with a passion for capturing real stories and
              authentic human experiences. As Richmond Tetteh Agbozo, I use filmmaking,
              videography, editing, and digital storytelling to create visuals that inspire,
              educate, and entertain.
            </p>

            <p className="text-gray-400 leading-relaxed">
              “Creative Chameleon” represents my ability to adapt creatively across different
              styles, industries, and storytelling formats. Through my work and platforms like
              “Inside Ghana,” I aim to showcase African culture, creativity, travel, people,
              and innovation while helping brands and communities tell meaningful stories.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <p className="font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-yellow-400 uppercase tracking-[0.2em] mb-4 text-sm">Portfolio</p>
              <h2 className="text-4xl font-black">Featured Projects</h2>
            </div>

            <p className="text-gray-400 max-w-lg">
              A collection of documentaries, short films, cultural stories, and digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-[2rem] border border-white/10 bg-black/40 p-8 hover:-translate-y-1 transition duration-300"
              >
                <span className="inline-block text-xs uppercase tracking-widest bg-yellow-400 text-black px-3 py-1 rounded-full mb-5">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="text-yellow-400 uppercase tracking-[0.2em] mb-4 text-sm">Contact</p>

        <h2 className="text-5xl font-black mb-6">Let’s Create Something Powerful</h2>

        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Available for documentaries, branded content, event coverage, social media management,
          and creative collaborations.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:richtetteh885@gmail.com"
            className="px-6 py-3 rounded-2xl bg-yellow-400 text-black font-semibold hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="https://wa.me/233257739327"
            target="_blank"
            className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
          >
            WhatsApp
          </a>

          <a
            href="https://www.tiktok.com/@creative_chameleon"
            target="_blank"
            className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
          >
            TikTok
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-gray-500 text-sm">
        © 2026 Creative Chameleon Studio • Built for storytelling, culture, and creativity.
      </footer>
    </div>
  );
}
