'use client'

import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Image
            src="/logo-white.png"
            alt="Bahrain Nights - Film Production"
            width={480}
            height={132}
            className="h-32 w-auto opacity-70"
          />

          {/* Social & Copyright */}
          <div className="flex flex-col items-center gap-3">
            <a
              href="https://www.instagram.com/hdvideos"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-white/60 hover:text-white/90 transition-colors flex items-center gap-2"
            >
              <span>📸</span> @hdvideos
            </a>
            <p className="font-body text-sm text-white/40 text-center">
              © {currentYear} Bahrain Nights. All rights reserved.
            </p>
          </div>

          {/* Location */}
          <p className="font-body text-sm text-white/40">
            Manama, Kingdom of Bahrain
          </p>
        </div>
      </div>
    </footer>
  )
}
