"use client";
import HeroComponent from "@/components/heroComponent";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (router) {
      router.push("/work");
    }
  }, [router]);
  return (
    <div className="flex flex-col min-h-screen">
      <HeroComponent
        imageSrc="home.webp"
        text="Your Gateway to College Success and Opportunities"
        btnText="Get Started"
      />

      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Description */}
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
              <p className="mt-2 text-center md:text-left text-gray-400">
                Empowering students with the resources and guidance to excel in
                their careers.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row md:space-x-10 mb-6 md:mb-0">
              <div className="flex flex-col mb-4 md:mb-0">
                <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                <a href="/" className="text-gray-400 hover:text-white mb-1">
                  Home
                </a>
                <a
                  href="/resources"
                  className="text-gray-400 hover:text-white mb-1"
                >
                  Resources
                </a>
                <a
                  href="/roadmaps"
                  className="text-gray-400 hover:text-white mb-1"
                >
                  Roadmaps
                </a>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </div>

              {/* Social Media */}
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    className="text-gray-400 hover:text-white"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="text-gray-400 hover:text-white"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="text-gray-400 hover:text-white"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                  <a
                    href="https://github.com"
                    className="text-gray-400 hover:text-white"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
