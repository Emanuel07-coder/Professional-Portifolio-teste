'use client';

import { Bot, MessageSquareCode, Server } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

export default function AboutSection() {
  return (
    <section className="relative py-20 md:py-24">
      {/* Background layer */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <SectionTitle title="Sobre Mim" />

          {/* Content */}
          <div className="space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            <p>
              Sou um desenvolvedor full stack com paixão por criar soluções digitais que resolvem problemas reais e geram valor mensurável. Com experiência em tecnologias modernas e metodologias ágeis, ajudo empresas a transformar ideias em produtos escaláveis e de alta qualidade.
            </p>

            <p>
              Minha jornada começou com um fascínio por como as coisas funcionam por trás das telas, evoluindo para uma expertise em arquitetura de sistemas, desenvolvimento de aplicações web e mobile, e implementação de práticas de DevOps que garantem entrega contínua e confiável.
            </p>

            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              {/* Stats or highlights */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-blue-500/10 text-blue-500 rounded-lg shrink-0">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-slate-200">5+ Anos de Experiência</h3>
                    <p className="text-slate-500 dark:text-slate-400">Em desenvolvimento full stack e liderança técnica</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-green-500/10 text-green-500 rounded-lg shrink-0">
                    <MessageSquareCode className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-slate-200">30+ Projetos Entregues</h3>
                    <p className="text-slate-500 dark:text-slate-400">De MVPs a sistemas corporativos de grande escala</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-purple-500/10 text-purple-500 rounded-lg shrink-0">
                    <Server className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-slate-200">Especializado em</h3>
                    <p className="text-slate-500 dark:text-slate-400">JavaScript/TypeScript, React, Node.js, AWS</p>
                  </div>
                </div>
              </div>

              {/* Profile image or illustration */}
              <div className="hidden md:block flex-1">
                <div className="relative w-full h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-lg overflow-hidden">
                    {/* Placeholder for image or illustration */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500 text-lg">
                      <Bot className="h-8 w-8" />
                      <span className="ml-2">Ilustração Profissional</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}