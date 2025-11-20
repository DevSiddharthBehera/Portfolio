export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent = {
  name: 'Siddharth Behera',
  role: 'Software Engineer - MERN Stack',
  description:
    'Results-driven engineer with 3+ years of experience building reliable MERN applications, performance-tuned data layers, and collaborative delivery workflows that keep teams shipping fast.',
  ctaPrimary: { label: 'Explore Talk-A-Tive', href: 'https://talk-a-tive-pwvu.onrender.com/' },
  ctaSecondary: { label: 'Download resume', href: '/SiddharthBeheraCV.pdf' },
  stats: [
    { label: 'Years building MERN products', value: '3+' },
    { label: 'Query time reduced', value: '70%' },
    { label: 'Manual deploy issues cut', value: '40%' },
  ],
};

export type ExpertiseCard = {
  title: string;
  description: string;
  bullets: string[];
};

export const expertiseCards: ExpertiseCard[] = [
  {
    title: 'MERN product engineering',
    description: 'Build end-to-end features across MongoDB, Express, React, and Node with reliability as the default.',
    bullets: [
      'Responsive React apps with Redux and Router across desktop and mobile',
      'Secure REST APIs hardened with JWT auth and bcrypt hashing',
      'Socket.io powered real-time experiences backed by resilient data models',
    ],
  },
  {
    title: 'System design & scalability',
    description: 'Expand core products with microservices patterns, caching, and measured performance wins.',
    bullets: [
      'Compound indexes and aggregation tuning that cut query times by 70%',
      'Redis, Docker, and Kubernetes groundwork for highly available services',
      'Event-driven thinking with Kafka, WebSockets, and API contracts',
    ],
  },
  {
    title: 'DevOps & delivery enablement',
    description: 'Ship confidently with automated pipelines, monitoring, and fault tolerant rollouts.',
    bullets: [
      'GitHub Actions pipelines for lint, build, and multi-env deployments',
      'IaC mindset plus container orchestration fundamentals',
      'Observability through logging, metrics, and alerting hooks',
    ],
  },
];

export type TimelineItem = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
};

export const timeline: TimelineItem[] = [
  {
    company: 'Vortex Digital Solutions',
    role: 'Software Engineer',
    period: 'Oct 2022 - Present',
    achievements: [
      'Lead full-stack delivery across MongoDB, Express, React, and Node for high-traffic dashboards',
      'Implemented compound indexes plus aggregation refactors to reduce critical query time by 70%',
      'Integrated Redis caching to keep high-read endpoints well under 500 ms',
      'Hardened auth flows with JWT and bcrypt, raising security posture without slowing delivery',
      'Rolled out GitHub Actions CI/CD to cut manual deployment issues by 40%',
    ],
  },
  {
    company: 'CTTC, Bhubaneswar',
    role: 'PG Diploma - Tool Design & CAD/CAM',
    period: '2019',
    achievements: [
      'Completed advanced coursework in CAD/CAM workflows and precision manufacturing principles',
      'Practiced translating mechanical requirements into reliable, production-ready documentation',
    ],
  },
  {
    company: 'CIPET, Bhubaneswar',
    role: 'B.Tech - Plastic Engineering',
    period: '2013 - 2017',
    achievements: [
      'Built a strong foundation in material science, process optimization, and applied research',
      'Collaborated on lab projects that sharpened analytical problem solving and teamwork',
    ],
  },
];

export type ProjectCard = {
  title: string;
  description: string;
  impact: string;
  stack: string[];
  link: string;
};

export const projects: ProjectCard[] = [
  {
    title: 'Connet-X collaboration hub',
    description:
      'Slowly expanding platform where I am migrating a monolithic core to microservices while layering new capabilities day by day.',
    impact:
      'Copilot handles the scaffolding so I stay focused on system architecture, design, and quick build/deployment loops—Google SSO, Supabase object storage, MongoDB persistence, Socket.io chat, P2P file transfer, and WebRTC video calls are already live.',
    stack: ['Next.js', 'Node.js', 'Supabase', 'MongoDB', 'WebRTC', 'Socket.io', 'Copilot'],
    link: 'https://connet-x674.onrender.com/',
  },
  {
    title: 'Talk-A-Tive chat platform',
    description: 'Real-time chat application with secure auth, group management, and typing indicators.',
    impact: 'Socket.io powered messaging keeps conversations in sync across devices with instant notifications.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    link: 'https://talk-a-tive-pwvu.onrender.com/',
  },
  {
    title: 'Analytics query acceleration',
    description: 'Database optimization initiative for Vortex reporting surfaces.',
    impact: 'Compound indexes and refined aggregation logic cut analytics query time by 70%.',
    stack: ['MongoDB', 'Mongoose', 'Redis'],
    link: '#contact',
  },
  {
    title: 'CI/CD automation rollout',
    description: 'GitHub Actions pipelines for staging and production workflows.',
    impact: 'Automated testing and deployments lowered manual release issues by 40%.',
    stack: ['GitHub Actions', 'Docker', 'Node.js'],
    link: '#contact',
  },
];

export type ArchitectureHighlight = {
  title: string;
  points: string[];
};

export const architectureHighlights: ArchitectureHighlight[] = [
  {
    title: 'Networking & delivery',
    points: [
      'Solid grasp of HTTP/HTTPS, REST, WebSockets, DNS, and TCP/UDP fundamentals',
      'Comfortable configuring Nginx for reverse proxying and load balancing',
      'Understands CDN strategies for global performance',
    ],
  },
  {
    title: 'Distributed systems',
    points: [
      'Hands-on with microservices decomposition, inter-service communication, and resilience',
      'Applies CAP and PACELC thinking plus consistent hashing for distributed workloads',
      'Designs for fault tolerance, redundancy, and observability from day one',
    ],
  },
  {
    title: 'DevOps & orchestration',
    points: [
      'Builds Docker images and understands Kubernetes pods, services, and scaling basics',
      'Implements CI/CD plus IaC practices aligned with DevOps principles',
      'Integrates logging, metrics, and alerting pipelines for proactive monitoring',
    ],
  },
  {
    title: 'Data & messaging',
    points: [
      'Experienced with MongoDB, Redis caching, replication, and sharding concepts',
      'Understands SQL vs NoSQL tradeoffs, indexing strategies, and ACID guarantees',
      'Comfortable with Kafka style message queues and event driven schemas',
    ],
  },
];

export const contactChannels = [
  { label: 'Email', value: 'devsiddharthbehera@gmail.com', href: 'mailto:devsiddharthbehera@gmail.com' },
  { label: 'Phone', value: '+91 84559 32162', href: 'tel:+918455932162' },
  { label: 'Resume', value: 'Download PDF', href: '/SiddharthBeheraCV.pdf' },
];

// SEO keywords used across the site (primary + long-tail phrases)
export const seoKeywords = [
  'Siddharth Behera',
  'devsiddharthbehera',
  'Software engineer',
  'MERN developer',
  'Full-stack developer',
  'System architect',
  'Microservices engineer',
  'Real-time app developer',
  'Scalable web architecture',
  'Copilot powered development',
  'building microservices from a monolithic MERN app',
  'converting monolith to microservices case study',
  'system architecture for scalable collaboration platforms',
  'designing fault-tolerant distributed systems for startups',
  'rapid prototyping using Copilot',
  'full-stack MERN project examples and architecture diagrams',
  'continuous integration strategies for microservices'
];
