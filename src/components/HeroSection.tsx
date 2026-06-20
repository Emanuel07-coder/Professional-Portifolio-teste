'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-12 md:py-20 lg:px-12">
      {/* Background layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>

      <div className="relative z-10 flex flex-col items-center space-y-8 text-center">
        {/* Profile Image */}
        <div className="relative w-32 h-32 md:w-48 md:h-48">
          <Image
            src="/profile.jpg"
            alt="Professional headshot"
            width={400}
            height={400}
            className="rounded-full border-4 border-slate-200/50 dark:border-slate-800/50 shadow-lg transition-all duration-300 hover:scale-105"
            priority
          />
          {/* Optional decorative element */}
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
            <span className="animate-pulse">·</span>
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="space-y-4">
          <h1 className="font-semibold text-4xl sm:text-5xl text-slate-900 dark:text-slate-200 tracking-tighter">
            Desenvolvedor Full Stack & Experiente em Soluções Inovadoras
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl">
            Transformando desafios complexos em soluções elegantes e eficientes com foco em resultados mensuráveis
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="lg">
            Ver Projetos
          </Button>
          <Button variant="outline" size="lg">
            Contato
          </Button>
        </div>
      </div>
    </section>
  );
}