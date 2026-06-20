import  Image  from 'next/image';
import  Link  from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-slate-50 dark:bg-slate-950">
      {/* Background decorative element */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>

      <div className="relative z-10 text-center space-y-8">
        {/* Illustration */}
        <div className="relative w-48 h-48 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-2xl flex items-center justify-center">
            <Image
              src="/404-illustration.jpg"
              alt="404 illustration"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <h1 className="font-semibold text-3xl sm:text-4xl text-slate-900 dark:text-slate-200">
          Página não encontrada
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-slate-50 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 rounded-lg transition-all duration-200"
        >
          <span>Voltar para a página inicial</span>
        </Link>
      </div>
    </section>
  );
}