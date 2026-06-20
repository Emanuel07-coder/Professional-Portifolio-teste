'use client';

import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/projects/projectData';

export default function ProjectsSection() {
  return (
    <section className="relative py-20 md:py-24">
      {/* Background layer */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="font-semibold text-2xl sm:text-3xl mb-12 text-center text-slate-900 dark:text-slate-200">
            Meus Projetos
          </h2>

          {/* Decorative divider */}
          <div className="w-20 h-0.5 bg-slate-300 dark:bg-slate-600 mx-auto mb-16"></div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}