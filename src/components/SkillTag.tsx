export interface SkillTagProps {
  label: string;
  variant?: 'default' | 'secondary' | 'outline';
}

export default function SkillTag({ label, variant = 'default' }: SkillTagProps) {
  // Define base classes
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200';

  // Define variant classes
  const variantClasses = {
    default: 'bg-slate-100 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200',
    secondary: 'bg-slate-200 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300',
    outline: 'border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50'
  }[variant];

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      {label}
    </span>
  );
}