import { Github, Instagram, Linkedin } from 'lucide-react';
import React from 'react';

const socialLinks = [
  {
    icon: Github,
    url: 'https://github.com/CodeWithAmitKumar',
    label: 'GitHub',
    hoverColor: 'hover:text-[#333333]',
    glowColor: 'rgba(51, 51, 51, 0.4)' // GitHub glow
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/amit-web-developer/',
    label: 'LinkedIn',
    hoverColor: 'hover:text-[#0A66C2]',
    glowColor: 'rgba(10, 102, 194, 0.4)' // LinkedIn glow
  },
  {
    icon: Instagram,
    url: 'https://www.instagram.com/thatodiapila/profilecard/?igsh=MXRyeXBjZ2l2ZXduZQ==',
    label: 'Instagram',
    hoverColor: 'hover:text-[#E4405F]',
    glowColor: 'rgba(228, 64, 95, 0.4)' // Instagram glow
  }
];

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-8 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Developed {' '}
            <span className="inline-block animate-pulse text-red-500">❤️</span>{' '}
            by{' '}
            <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Amit Kumar Patra
            </span>
          </p>
          
          <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, url, label, hoverColor, glowColor }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  relative p-2 rounded-full
                  text-gray-600 dark:text-gray-300 ${hoverColor}
                  transform hover:scale-110
                  transition-all duration-300 ease-in-out
                  hover:shadow-[0_0_15px]
                  group
                `}
                style={{
                  '--tw-shadow-color': glowColor
                } as React.CSSProperties}
                aria-label={label}
              >
                <Icon className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full -z-10 
                  group-hover:animate-pulse transition-opacity opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}