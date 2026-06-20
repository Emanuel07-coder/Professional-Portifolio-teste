'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import SocialLink from '@/components/SocialLink';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 md:py-16">
      {/* Background layer */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="border-t border-slate-200/50 dark:border-slate-800/50"></div>

        <div className="mt-10 flex flex-col items-center gap-6 text-center">
          {/* Copyright */}
          <p className="text-slate-500 dark:text-slate-400 text-xs">
            © {currentYear} Seu Nome. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <SocialLink
              icon={Github}
              href="https://github.com/seuperfil"
              label="GitHub"
            />
            <SocialLink
              icon={Linkedin}
              href="https://linkedin.com/in/seuperfil"
              label="LinkedIn"
            />
            <SocialLink
              icon={Mail}
              href="mailto:seuemail@example.com"
              external={false}
              label="E-mail"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}