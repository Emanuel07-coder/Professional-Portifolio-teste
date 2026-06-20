'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react'; // Removido o WhatsApp daqui

interface SocialLinkProps {
  icon: any; // Mudado para 'any' para resolver o erro de ForwardRef do Lucide
  href: string;
  label: string;
  external?: boolean;
}

export default function SocialLink({ icon: Icon, href, label, external = true }: SocialLinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center justify-center w-10 h-10 bg-slate-50 dark:bg-slate-900/50 rounded-xl transition-all duration-200 hover:scale-110 hover:bg-slate-100 dark:hover:bg-slate-800"
      aria-label={label}
    >
      <Icon className="h-4 w-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100" />
      {/* Se não for externo, exibe o label. Se for externo, o label fica apenas no aria-label para SEO */}
      {!external && <span className="ml-2 text-slate-600 dark:text-slate-400 text-sm">{label}</span>}
    </a>
  );
}
