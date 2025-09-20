export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen text-center px-4"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Amir Teymuri</h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
        Frontend Developer | React & Next.js Enthusiast
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-greenLight hover:bg-greenDark text-white rounded-md transition"
      >
        View My Work
      </a>
    </section>
  );
}
