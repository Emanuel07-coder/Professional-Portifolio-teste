import { ExternalLink, GitBranch } from 'lucide-react';
import { Project } from '@/projects/projectData';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[102]">
      {/* Project Image */}
      <div className="relative h-48">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Image overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/0 to-slate-900/30 dark:from-slate-50/0 dark:to-slate-50/30"></div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-200">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-900/50"
          >
            <GitBranch className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 bg-slate-900 text-slate-50 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Demo Live</span>
            </a>
          ) : (
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 bg-slate-400/50 text-slate-500 dark:bg-slate-600/50 dark:text-slate-400 cursor-not-allowed"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Demo Indisponível</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}