export type Project = {
  id: number;
  title: string;
  description: string;
  image: string; // path to image
  tags: string[]; // technologies used
  githubUrl: string;
  liveUrl?: string; // optional live demo
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Plataforma de E-commerce Moderna',
    description: 'Uma solução completa de e-commerce com carrinho inteligente, pagamento integrado e painel administrativo responsivo.',
    image: 'https://placehold.co/800x600/3b82f6/ffffff?text=E-commerce+Platform',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/seuperfil/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.example.com'
  },
  {
    id: 2,
    title: 'Dashboard Analytics em Tempo Real',
    description: 'Dashboard interativo para visualização de métricas de negócios com atualização em tempo real e exportação de relatórios.',
    image: 'https://placehold.co/800x600/10b981/ffffff?text=Analytics+Dashboard',
    tags: ['React', 'Chart.js', 'WebSocket', 'Node.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/seuperfil/analytics-dashboard',
    liveUrl: 'https://dashboard-demo.example.com'
  },
  {
    id: 3,
    title: 'App de Task Management com IA',
    description: 'Aplicativo de gerenciamento de tarefas com sugestões inteligentes baseadas em aprendizado de máquina e integração com calendário.',
    image: 'https://placehold.co/800x600/8b5cf6/ffffff?text=Task+Manager+AI',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Python', 'TensorFlow.js'],
    githubUrl: 'https://github.com/seuperfil/task-manager-ai',
    liveUrl: undefined // No live demo for mobile app
  },
  {
    id: 4,
    title: 'Sistema de Reserva de Hotéis',
    description: 'Plataforma completa para reservas hoteleiras com busca avançada, filtros inteligentes e sistema de avaliações.',
    image: 'https://placehold.co/800x600/ec4899/ffffff?text=Hotel+Booking+System',
    tags: ['Vue.js', 'Nuxt 3', 'Tailwind CSS', 'Laravel', 'MySQL', 'Redis'],
    githubUrl: 'https://github.com/seuperfil/hotel-booking-system',
    liveUrl: 'https://hotel-demo.example.com'
  },
  {
    id: 5,
    title: 'API RESTful para Mobile Apps',
    description: 'API escalável e segura com autenticação JWT, rate limiting, documentação automática e testes de carga.',
    image: 'https://placehold.co/800x600/6366f1/ffffff?text=Mobile+API',
    tags: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    githubUrl: 'https://github.com/seuperfil/mobile-api',
    liveUrl: 'https://api-docs.example.com'
  },
  {
    id: 6,
    title: 'Portfólio de Artista Digital',
    description: 'Site institucional para artista com galeria interativa, loja integrada e blog sobre técnicas criativas.',
    image: 'https://placehold.co/800x600/14b8a6/ffffff?text=Artist+Portfolio',
    tags: ['React', 'Next.js', 'Framer Motion', 'Sanity CMS', 'Tailwind CSS'],
    githubUrl: 'https://github.com/seuperfil/artist-portfolio',
    liveUrl: 'https://artist-portfolio.example.com'
  }
];