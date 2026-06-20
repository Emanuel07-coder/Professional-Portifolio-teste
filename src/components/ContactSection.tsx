'use client';

import { Mail, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
    <section className="relative py-20 md:py-24">
      {/* Background layer */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="font-semibold text-2xl sm:text-3xl mb-8 text-center text-slate-900 dark:text-slate-200">
            Fale Comigo
          </h2>

          {/* Decorative divider */}
          <div className="w-16 h-0.5 bg-slate-300 dark:bg-slate-600 mx-auto mb-12"></div>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-xl">
            Está interessado em trabalhar comigo ou tem uma proposta? Fico feliz em conversar sobre oportunidades, projetos ou simplesmente trocar ideias sobre tecnologia.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* WhatsApp */}
            <Button
              variant="outline"
              size="lg"
              className="flex items-center justify-center gap-3"
              onClick={() => {
                // Replace with your WhatsApp number
                const whatsappNumber = '5511999999999'; // Example: Brazil
                window.open(`https://wa.me/${whatsappNumber}`, '_blank');
              }}
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </Button>

            {/* Email */}
            <Button
              variant="outline"
              size="lg"
              className="flex items-center justify-center gap-3"
              onClick={() => {
                // Replace with your email
                const email = 'seuemail@example.com';
                window.location.href = `mailto:${email}`;
              }}
            >
              <Mail className="h-4 w-4" />
              <span>E-mail</span>
            </Button>

            {/* LinkedIn */}
            <Button
              variant="outline"
              size="lg"
              className="flex items-center justify-center gap-3"
              onClick={() => {
                // Replace with your LinkedIn profile
                window.open('https://linkedin.com/in/seuperfil', '_blank');
              }}
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </Button>
          </div>

          {/* Optional: Additional contact info */}
          <div className="mt-16 text-slate-500 dark:text-slate-400 text-sm">
            <p>Ou se preferir, você pode me encontrar em:</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-4">
              <span>GitHub: github.com/seuperfil</span>
              <span>Twitter: twitter.com/seuperfil</span>
              <span>Portfólio: seuperfil.dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}