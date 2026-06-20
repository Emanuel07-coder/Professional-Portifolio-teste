export default function SectionTitle({ title }: { title: string }) {
  return (
    <>
      <h2 className="font-semibold text-2xl sm:text-3xl mb-6 text-center text-slate-900 dark:text-slate-200">
        {title}
      </h2>
      <div className="w-16 h-0.5 bg-slate-300 dark:bg-slate-600 mx-auto"></div>
    </>
  );
}