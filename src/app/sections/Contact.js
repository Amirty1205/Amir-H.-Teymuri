// src/components/sections/Contact.js
export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-20 bg-background text-foreground"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>

      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Contact Info */}
        <div className="flex-1 space-y-4">
          <p className="text-lg">
            Feel free to reach out via email or connect with me on social media.
          </p>
          <p className="text-lg">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:amir.teymuri@example.com"
              className="text-greenLight hover:text-greenDark transition"
            >
              amir.teymuri@example.com
            </a>
          </p>
          <p className="text-lg">
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-greenLight hover:text-greenDark transition"
            >
              github.com/yourusername
            </a>
          </p>
          <p className="text-lg">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-greenLight hover:text-greenDark transition"
            >
              linkedin.com/in/yourprofile
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form className="flex-1 flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greenLight"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greenLight"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greenLight"
          />
          <button
            type="submit"
            className="bg-greenLight hover:bg-greenDark text-white px-6 py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
