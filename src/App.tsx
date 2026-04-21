import { useState, useEffect, ReactNode } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  ExternalLink
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-6 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-brand-bg/90 backdrop-blur-md border-b border-brand-light' : 'bg-transparent'}`}>
      <a href="#" className="font-serif font-bold text-lg tracking-wider hover:opacity-70 transition-opacity">
        José L. Castellano C.
      </a>
      <ul className="hidden md:flex gap-10 list-none font-sans">
        {['Servicios', 'Portafolio', 'Proceso', 'Contacto'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              className="text-[11px] font-bold tracking-[0.18em] uppercase text-brand-mid hover:text-brand-ink transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-[100px]">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-6 md:px-16 py-20 flex flex-col justify-center md:border-r border-brand-light"
      >
        <span className="font-sans font-bold text-[10px] tracking-[0.28em] uppercase text-brand-mid mb-10">
          Diseñador Gráfico Independiente — Panamá / Venezuela
        </span>
        <h1 className="font-serif font-bold text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-12">
          Diseño<br />
          que <span className="font-bold">comunica</span><br />
          con claridad.
        </h1>
        <p className="text-sm md:text-base leading-relaxed text-brand-mid max-w-sm mb-14">
          Identidad visual, branding y comunicación estratégica para marcas que quieren ser recordadas. 25 años creando sistemas visuales funcionales y coherentes.
        </p>
        <div className="flex flex-wrap gap-5 items-center font-sans">
          <a href="#portafolio" className="bg-white text-black px-9 py-3.5 text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-neutral-200 transition-colors">
            Ver portafolio
          </a>
          <a href="#contacto" className="group flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase text-brand-mid hover:text-brand-ink transition-all">
            Conversemos <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden md:grid grid-rows-[1fr_auto]"
      >
        <div className="bg-[#121212] flex items-center justify-center border-b border-brand-light overflow-hidden relative group min-h-[500px]">
          <img 
            src="input_file_1.png" 
            alt="José L. Castellano C."
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="grid grid-cols-3">
          {[
            { num: '25+', label: 'Años activo' },
            { num: '180+', label: 'Proyectos' },
            { num: '60+', label: 'Clientes' }
          ].map((stat, i) => (
            <div key={i} className={`p-7 border-brand-light ${i < 2 ? 'border-r' : ''}`}>
              <div className="font-serif font-bold text-4xl mb-1">{stat.num}</div>
              <div className="font-sans font-bold text-[10px] tracking-[0.18em] uppercase text-brand-mid">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Marquee = () => {
  const items = [
    'Branding', 'Identidad Visual', 'Diseño Editorial', 'Packaging', 
    'Diseño Web', 'Fotografía', 'Comunicación Digital', 'Estrategia Creativa'
  ];
  
  return (
    <div className="overflow-hidden border-y border-brand-light py-4 bg-brand-bg font-sans">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex">
            {items.map((item, idx) => (
              <span key={idx} className="flex items-center gap-5 px-7 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-mid">
                <span className="w-1 h-1 rounded-full bg-brand-light" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  key?: string | number;
}

const FadeInWhenVisible = ({ children, delay = 0 }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};

const Services = () => {
  const serviceList = [
    { num: '01', name: 'Branding &\nIdentidad Visual', desc: 'Sistemas de identidad completos: logotipo, tipografía, paleta, manual de marca. Coherencia en todas las superficies.' },
    { num: '02', name: 'Diseño\nEditorial', desc: 'Revistas, catálogos, reportes. Jerarquía visual y atención tipográfica en cada página.' },
    { num: '03', name: 'Packaging &\nAplicaciones', desc: 'Empaques y etiquetas que comunican el valor del producto antes de que alguien lo tome en sus manos.' },
    { num: '04', name: 'Diseño\nWeb', desc: 'Sitios WordPress que son extensiones fieles de tu identidad visual. Rápidos, limpios y responsivos.' },
    { num: '05', name: 'Comunicación\nDigital', desc: 'Contenido para redes, campañas y publicidad digital con coherencia visual y propósito claro.' },
    { num: '06', name: 'Fotografía\n& Dirección', desc: 'Fotografía de producto y corporativa con dirección visual integrada a tu sistema de identidad.' }
  ];

  return (
    <section className="px-6 md:px-16 py-28" id="servicios">
      <div className="grid lg:grid-cols-[280px_1fr] gap-20 items-start">
        <FadeInWhenVisible>
          <div className="section-intro">
            <div className="font-sans font-bold text-[10px] tracking-[0.28em] uppercase text-brand-mid mb-5">Servicios</div>
            <h2 className="font-serif font-bold text-5xl md:text-6xl leading-tight">Lo que<br />ofrezco.</h2>
            <p className="text-sm leading-relaxed text-brand-mid mt-6">Cada servicio está pensado para resolver un problema concreto de comunicación visual, con resultados medibles y entregables claros.</p>
          </div>
        </FadeInWhenVisible>
        
        <div className="grid md:grid-cols-2 border-t border-l border-brand-light">
          {serviceList.map((service, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.1}>
              <div className="p-10 border-r border-b border-brand-light hover:bg-neutral-900 transition-colors group">
                <span className="font-sans font-bold text-[11px] tracking-widest text-brand-mid mb-5 block">{service.num}</span>
                <div className="font-serif font-bold text-2xl leading-tight mb-3 whitespace-pre-line group-hover:translate-x-1 transition-transform">{service.name}</div>
                <p className="text-xs leading-relaxed text-brand-mid">{service.desc}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { name: 'FODUPA', cat: 'Identidad Visual', seed: 'brand' },
    { name: 'Néctar Larens', cat: 'Branding', seed: 'organic' },
    { name: 'Café Don Julio', cat: 'Packaging', seed: 'coffee' },
    { name: 'Mariale', cat: 'Identidad', seed: 'jewelry' },
    { name: 'E-Commerce', cat: 'Diseño Web', seed: 'web' },
    { name: 'Revista Impresa', cat: 'Editorial', seed: 'magazine' }
  ];

  return (
    <section className="pb-28 border-t border-brand-light" id="portafolio">
      <div className="px-6 md:px-16 pt-16 pb-12 flex flex-col md:flex-row justify-between items-end gap-4">
        <FadeInWhenVisible>
          <div>
            <div className="font-sans font-bold text-[10px] tracking-[0.28em] uppercase text-brand-mid mb-5">Portafolio</div>
            <h2 className="font-serif font-bold text-5xl md:text-6xl leading-tight">Trabajo<br />seleccionado.</h2>
          </div>
        </FadeInWhenVisible>
        <a href="https://www.behance.net/jlcastellanoc" target="_blank" className="font-sans font-bold text-[11px] tracking-[0.18em] uppercase text-brand-mid hover:text-brand-ink flex items-center gap-2 transition-all">
          Ver en Behance <ExternalLink size={12} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-light mx-6 md:mx-16">
        {projects.map((p, i) => (
          <FadeInWhenVisible key={i} delay={i * 0.05}>
            <div className="bg-brand-bg group cursor-pointer overflow-hidden">
              <div className="aspect-[4/3] bg-[#121212] overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${p.seed}/800/600?grayscale`} 
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 md:p-7 border-t border-brand-light flex justify-between items-baseline">
                <span className="font-serif font-bold text-xl">{p.name}</span>
                <span className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-brand-mid">{p.cat}</span>
              </div>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: '01', title: 'Diagnóstico', desc: 'Entiendo tu negocio, tu audiencia y tus objetivos. El briefing es la brújula de todo lo que sigue.' },
    { num: '02', title: 'Estrategia', desc: 'Defino el posicionamiento visual. ¿Qué comunica tu marca en primer vistazo? ¿Cómo se diferencia?' },
    { num: '03', title: 'Diseño', desc: 'Propuestas visuales enfocadas en función y estética. Iteramos hasta que la solución sea exactamente la correcta.' },
    { num: '04', title: 'Entrega', desc: 'Archivos maestros, manual de uso y acompañamiento. Tu marca lista para cualquier superficie.' }
  ];

  return (
    <section className="px-6 md:px-16 py-28 border-t border-brand-light" id="proceso">
      <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
        <FadeInWhenVisible>
          <div>
            <div className="font-sans font-bold text-[10px] tracking-[0.28em] uppercase text-brand-mid mb-5">Cómo trabajo</div>
            <h2 className="font-serif font-bold text-5xl md:text-6xl leading-tight">El<br />proceso.</h2>
          </div>
        </FadeInWhenVisible>
        <p className="text-sm leading-relaxed text-brand-mid max-w-sm mb-2">
          Un método claro y comunicativo, donde cada etapa tiene propósito y cada decisión está respaldada por una razón estratégica.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-light">
        {steps.map((step, i) => (
          <FadeInWhenVisible key={i} delay={i * 0.1}>
            <div className="bg-brand-bg p-10 hover:bg-neutral-900 transition-colors h-full">
              <span className="font-serif text-5xl text-brand-light leading-none mb-6 block">{step.num}</span>
              <div className="font-serif text-xl mb-3">{step.title}</div>
              <p className="text-xs leading-relaxed text-brand-mid">{step.desc}</p>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="px-6 md:px-16 py-32 border-t border-brand-light grid lg:grid-cols-2 gap-20 items-center" id="contacto">
      <FadeInWhenVisible>
        <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight">
          ¿Tienes un<br /><span className="font-light">proyecto</span><br />en mente?
        </h2>
      </FadeInWhenVisible>
      
      <FadeInWhenVisible delay={0.2}>
        <div>
          <p className="text-sm md:text-base leading-relaxed text-brand-mid mb-10">
            Cuéntame qué necesitas. Estoy disponible para proyectos de branding, identidad visual, diseño web y comunicación digital en Panamá / Venezuela y de forma remota.
          </p>
          <a href="mailto:tu@email.com" className="block font-serif text-2xl text-brand-ink mb-10 pb-4 border-b border-brand-light hover:border-brand-ink transition-colors">
            castellanojl@gmail.com
          </a>
          <div className="flex flex-wrap gap-7 font-sans">
            {[
              { label: 'WhatsApp', href: 'https://wa.me/50725710251', icon: <MessageCircle size={14} /> },
              { label: 'Behance', href: 'https://www.behance.net/jlcastellanoc', icon: null },
              { label: 'Instagram', href: 'https://instagram.com', icon: <Instagram size={14} /> },
              { label: 'LinkedIn', href: 'https://linkedin.com', icon: <Linkedin size={14} /> }
            ].map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                target="_blank" 
                className="text-[11px] font-bold tracking-[0.18em] uppercase text-brand-mid hover:text-brand-ink transition-colors flex items-center gap-1.5"
              >
                {link.label} {link.icon}
              </a>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 py-8 border-t border-brand-light flex flex-col md:row justify-between items-center gap-4 text-center md:text-left font-sans">
      <a href="#" className="font-serif font-bold text-brand-mid hover:text-brand-ink transition-colors">José L. Castellano C.</a>
      <p className="text-[10px] font-bold tracking-wider text-brand-mid/60 uppercase">
        © 2025 · Diseñador Gráfico Independiente · Panamá / Venezuela
      </p>
      <ul className="flex gap-6 list-none">
        {['Instagram', 'Behance', 'LinkedIn'].map((app) => (
          <li key={app}>
            <a href="#" className="text-[10px] font-bold tracking-widest uppercase text-brand-mid hover:text-brand-ink transition-colors">
              {app}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-brand-ink selection:text-brand-bg">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-ink z-[60] origin-left" 
        style={{ scaleX }} 
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
