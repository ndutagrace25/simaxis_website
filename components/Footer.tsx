import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo and Copyright */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <Image
            src="/assets/logo.png"
            alt="SI-MAXIS Logo"
            width={48}
            height={48}
            className="w-12 h-12 object-cover rounded-full"
          />
          <span className="text-xl font-bold text-[#2cc0ce] text-shadow-lg">
            SI-MAXIS
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <a href="#home" className="hover:text-primary-400 transition">
            Home
          </a>
          <a href="#services" className="hover:text-primary-400 transition">
            Services
          </a>
          <a href="#how-it-works" className="hover:text-primary-400 transition">
            How It Works
          </a>
          <a href="#products" className="hover:text-primary-400 transition">
            Products
          </a>
          <a href="#contact" className="hover:text-primary-400 transition">
            Contact
          </a>
        </div>
        <div className="flex items-center space-x-4">
          {/* Social Media Placeholders */}
          <a
            href="#"
            className="hover:text-primary-400 transition"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-primary-400 transition"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 8.99 4.07 7.13 1.64 4.15c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.94 3.62-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.91 3.99 2.94A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-primary-400 transition"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-8">
        &copy; {new Date().getFullYear()} SI-MAXIS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
