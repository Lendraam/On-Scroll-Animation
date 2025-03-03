"use client";

import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [active, setActive] = useState("Home");
  const [scale, setScale] = useState(1);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(section.id.charAt(0).toUpperCase() + section.id.slice(1));
        }
      });

      // Efek Zoom-in pada gambar profil saat scroll
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.0005; // Maksimum zoom-in 1.2x
      setScale(Math.min(newScale, 1.2));
      controls.start({ scale });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scale, controls]);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-yellow-100">
      {/* ✅ Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <h1 className="text-xl font-bold">Heliocentric Theory</h1>
        <ul className="flex gap-6">
          {["home", "about", "history", "scientists", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => handleNavClick(item)}
              className={`cursor-pointer px-4 py-2 rounded-lg ${
                active.toLowerCase() === item ? "bg-yellow-200 font-bold" : "hover:bg-gray-100"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      </nav>

      {/* ✅ Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-8 py-16">
        <motion.div animate={{ scale }} transition={{ duration: 0.2 }} className="mb-6">
          <Image src="/Len.JPG" alt="Lendra Profile" width={150} height={150} className="rounded-full shadow-lg" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl font-bold mb-4">
            Hello, I'm <span className="text-yellow-500">Lendra</span>
          </h2>
          <p className="text-lg max-w-2xl">
            I am passionate about science and the cosmos, focusing on the Heliocentric Theory.
          </p>
        </motion.div>
      </section>

      {/* ✅ About Section */}
      <section id="about" className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-lg max-w-2xl leading-relaxed">
            The **Heliocentric Theory** is a scientific model that places the **Sun at the center of the solar system**, with Earth and other planets **orbiting around it**.
            This theory, first introduced by **Nicolaus Copernicus** in the **16th century**, challenged the long-standing **Geocentric Model** which suggested that Earth was the center of the universe.
          </p>
        </motion.div>
      </section>

{/* ✅ History Section */}
<section id="history" className="min-h-screen flex flex-col justify-center items-center text-center px-8 py-16">
  <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <h2 className="text-3xl font-bold mb-4">History</h2>
    <p className="text-lg max-w-2xl">
      The heliocentric model was a revolutionary idea in the 16th century, replacing the geocentric model which placed Earth at the center of the universe.
    </p>
  </motion.div>

  {/* ✅ Efek Zoom-in pada Gambar saat Hover */}
  <div className="flex gap-4 mt-10">
    <motion.div
      className="rounded-lg overflow-hidden shadow-md"
      whileHover={{ scale: 1.1 }} // Efek zoom saat hover
      transition={{ duration: 0.3 }}
    >
      <Image src="/helio1.png" alt="Heliocentric Model 1" width={400} height={250} className="rounded-lg" />
    </motion.div>

    <motion.div
      className="rounded-lg overflow-hidden shadow-md"
      whileHover={{ scale: 1.1 }} // Efek zoom saat hover
      transition={{ duration: 0.3 }}
    >
      <Image src="/helio2.jpeg" alt="Heliocentric Model 2" width={400} height={250} className="rounded-lg" />
    </motion.div>
  </div>
</section>

{/* ✅ Scientists Section */}
<section id="scientists" className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-8 py-16">
  <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <h2 className="text-3xl font-bold mb-4">Scientists</h2>
    <p className="text-lg max-w-2xl">
      Key scientists who contributed to the heliocentric theory include Nicolaus Copernicus, Galileo Galilei, and Johannes Kepler.
    </p>
  </motion.div>

  {/* ✅ Efek Zoom-in pada Gambar saat Hover */}
  <motion.div
    className="rounded-lg overflow-hidden shadow-md mt-10"
    whileHover={{ scale: 1.1 }} // Efek zoom saat hover
    transition={{ duration: 0.3 }}
  >
    <Image src="/helio3.jpg" alt="Scientist discussing heliocentric theory" width={400} height={250} className="rounded-lg" />
  </motion.div>
</section>
{/* ✅ Contact Section */}
<section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-8 py-16 bg-white">
  <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <h2 className="text-3xl font-bold mb-4">Contact</h2>
    <p className="text-lg max-w-2xl mb-6">Feel free to reach out through the following platforms:</p>

    {/* ✅ Ikon Sosial Media dengan Efek Zoom saat Hover */}
    <div className="flex gap-6">
      <motion.a
        href="https://github.com/lendra"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-gray-800 hover:text-black"
        whileHover={{ scale: 1.2 }} // Efek Zoom saat hover
        transition={{ duration: 0.3 }}
      >
        <FaGithub />
      </motion.a>

      <motion.a
        href="mailto:lendra@example.com"
        className="text-3xl text-red-500 hover:text-red-700"
        whileHover={{ scale: 1.2 }} // Efek Zoom saat hover
        transition={{ duration: 0.3 }}
      >
        <FaEnvelope />
      </motion.a>

      <motion.a
        href="/Lendra_CV.pdf"
        download
        className="text-3xl text-blue-500 hover:text-blue-700"
        whileHover={{ scale: 1.2 }} // Efek Zoom saat hover
        transition={{ duration: 0.3 }}
      >
        <FiDownload />
      </motion.a>
    </div>
  </motion.div>
</section>

    </div>
  );
}
