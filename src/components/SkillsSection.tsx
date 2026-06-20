'use client';

import { 
  Code, 
  Globe, 
  Palette, 
  Layout, 
  Server, 
  Github, 
  Box, 
  Cloud, 
  Database, 
  Terminal, 
  Layers 
} from 'lucide-react';
import SkillTag from '@/components/SkillTag';

export default function SkillsSection() {
  const skillsData = [
    {
      category: 'Linguagens',
      icon: Code,
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-500',
      skills: [
        { name: 'JavaScript', icon: Code },
        { name: 'TypeScript', icon: Code },
        { name: 'HTML5', icon: Globe },
        { name: 'CSS3', icon: Palette },
      ]
    },
    {
      category: 'Frontend & Frameworks',
      icon: Layout,
      bgColor: 'bg-green-500/10',
      textColor: 'text-green-500',
      skills: [
        { name: 'React', icon: Layout },
        { name: 'Next.js', icon: Layers },
        { name: 'Tailwind CSS', icon: Palette },
        { name: 'Shadcn/UI', icon: Box },
      ]
    },
    {
      category: 'Backend & DevOps',
      icon: Server,
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-500',
      skills: [
        { name: 'Node.js', icon: Server },
        { name: 'AWS', icon: Cloud },
        { name: 'Docker', icon: Box },
        { name: 'Git & Github', icon: Github },
      ]
    }
  ];

  return (
    <section className="relative py-20 md:py-24">
      {/* Background layer */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="font-semibold text-2xl sm:text-3xl mb-12 text-center text-slate-900 dark:text-slate-200">
            Minha Stack Tecnológica
          </h2>

          {/* Decorative divider */}
          <div className="w-20 h-0.5 bg-slate-300 dark:bg-slate-600 mx-auto mb-16"></div>

          {/* Skills Grid */}
          <div className="grid gap-6 md:gap-8">
            {skillsData.map((category, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-xl p-6 md:p-8 transition-all duration-200 hover:shadow-md hover:scale-[102] hover:bg-white/90 dark:hover:bg-slate-900/90"
              >
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center shrink-0">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-slate-900 dark:text-slate-200">
                      {category.category}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                      Tecnologias essenciais para desenvolvimento moderno
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                    >
                      <div className="flex h-8 w-8 items-center justify-center shrink-0">
                        <skill.icon className="h-4 w-4" />
                      </div>
                      <SkillTag label={skill.name} variant="outline" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Responsive note */}
          <div className="mt-12 text-center text-slate-500 dark:text-slate-400 text-sm">
            Minha stack está em constante evolução - sempre aprendendo e aplicando novas tecnologias para entregar melhores soluções
          </div>
        </div>
      </div>
    </section>
  );
}
