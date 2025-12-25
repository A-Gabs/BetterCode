
import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ShoppingBag, 
  Github, 
  Figma, 
  ChevronDown, 
  XCircle,
  Menu,
  X,
  MessageCircle
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Zap className="text-accent fill-accent" size={24} />
            <span className="font-extrabold text-xl tracking-tight text-slate-900">BetterCode</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#milestones" className="text-sm font-semibold text-slate-600 hover:text-accent transition-colors">Programa</a>
            <a href="#precios" className="text-sm font-semibold text-slate-600 hover:text-accent transition-colors">Precios</a>
            <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-accent transition-colors">FAQ</a>
            
            <a href="#precios" className="bg-accent text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#E64529] transition-all">
              Inscribirme ahora
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 flex flex-col gap-4">
          <a href="#milestones" onClick={() => setIsOpen(false)} className="text-lg font-semibold py-2 text-slate-900">Programa</a>
          <a href="#precios" onClick={() => setIsOpen(false)} className="text-lg font-semibold py-2 text-slate-900">Precios</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="text-lg font-semibold py-2 text-slate-900">FAQ</a>
          <a href="#precios" onClick={() => setIsOpen(false)} className="bg-accent text-white px-6 py-4 rounded-xl text-center font-bold">
            Inscribirme ahora
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const headline = "Crea tu web profesional antes del 2026, sin código y gastando $0.";

  return (
    <section className="relative pt-40 pb-28 px-4 bg-white overflow-hidden min-h-[95vh] flex items-center justify-center">
      {/* --- Inmersive Ink/Lava Background (Light Edition) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50">
        
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes liquid-drift-1 {
            0%, 100% { transform: scale(1) translate(0%, 0%); }
            33% { transform: scale(1.2) translate(10%, -5%); }
            66% { transform: scale(0.9) translate(-15%, 15%); }
          }
          @keyframes liquid-drift-2 {
            0%, 100% { transform: scale(1.1) translate(0%, 0%); }
            50% { transform: scale(0.8) translate(-20%, -15%); }
          }
          .liquid-blob { 
            transition: transform 2.5s cubic-bezier(0.16, 1, 0.3, 1); 
            will-change: transform;
          }
        `}} />

        {/* Base Layer: Subtlety */}
        <div 
          className="absolute w-full h-full opacity-10"
          style={{ background: 'radial-gradient(circle at 50% 50%, #1F2A44 0%, transparent 60%)' }}
        />

        {/* Blobs */}
        <div 
          className="liquid-blob absolute w-[160vw] h-[160vw] md:w-[90vw] md:h-[90vw] -top-[10%] -left-[10%] opacity-40 mix-blend-multiply"
          style={{ transform: `translate3d(${mousePos.x * 200}px, ${mousePos.y * 200}px, 0)` }}
        >
          <div className="w-full h-full rounded-full blur-[140px] md:blur-[220px]" style={{ background: 'radial-gradient(circle, #FF4D2E 0%, transparent 70%)', animation: 'liquid-drift-1 28s ease-in-out infinite' }} />
        </div>
        
        <div 
          className="liquid-blob absolute w-[140vw] h-[140vw] md:w-[80vw] md:h-[80vw] bottom-[5%] right-[0%] opacity-30 mix-blend-multiply"
          style={{ transform: `translate3d(${mousePos.x * -350}px, ${mousePos.y * -350}px, 0)` }}
        >
          <div className="w-full h-full rounded-full blur-[160px] md:blur-[260px]" style={{ background: 'radial-gradient(circle, #C0392B 0%, transparent 75%)', animation: 'liquid-drift-2 38s ease-in-out infinite' }} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/90 z-[1]" />
      </div>

      {/* --- Content --- */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-4">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/5 text-slate-900 text-xs font-black mb-12 uppercase tracking-[0.2em] backdrop-blur-xl border border-black/5 shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
          Matrícula abierta 2025
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9] text-slate-950">
          {headline}
        </h1>
        
        <p className="text-2xl md:text-4xl text-slate-600 mb-16 max-w-4xl mx-auto leading-tight font-bold tracking-tight">
          Diseña con IA. Programa con IA. Despliega con IA. 
          <span className="block mt-2 text-slate-950 underline decoration-accent decoration-4 underline-offset-8"> $0 en herramientas. 100% real.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
          <a href="#precios" className="group w-full sm:w-auto bg-accent text-white px-10 py-8 rounded-[2.5rem] text-2xl font-black hover:scale-105 transition-all shadow-[0_20px_60px_-15px_rgba(255,77,46,0.4)] flex items-center justify-center gap-4 text-center">
            Quiero aprender a crear mi web -> 
          </a>
          <a href="#milestones" className="w-full sm:w-auto bg-slate-950 text-white px-14 py-8 rounded-[2.5rem] text-3xl font-black hover:bg-black transition-all border border-black/10 backdrop-blur-md shadow-xl">
            Temario
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 text-lg font-black text-slate-900 tracking-tight uppercase">
          <div className="flex items-center gap-3"><CheckCircle2 size={26} className="text-accent" /> Sin código</div>
          <div className="flex items-center gap-3"><CheckCircle2 size={26} className="text-accent" /> Herramientas gratuitas</div>
          <div className="flex items-center gap-3"><CheckCircle2 size={26} className="text-accent" /> 100% Replicable</div>
        </div>
      </div>
    </section>
  );
};

const Milestones = () => {
  return (
    <section className="py-32 bg-[#0B0B0B] text-white overflow-hidden relative" id="milestones">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Lo que puedes lograr con BetterCode</h2>
          <div className="inline-block relative">
            <span className="relative z-10 text-4xl md:text-6xl font-extrabold px-6 py-2 text-white bg-accent rounded-2xl inline-block -rotate-1 transform shadow-[0_10px_40px_rgba(255,77,46,0.4)]">
              en solo 3 clases
            </span>
          </div>
          <p className="mt-10 text-xl md:text-2xl font-bold text-slate-400 tracking-tight">Web real. Deploy real. Sin saber código.</p>
          
          <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl max-w-2xl mx-auto backdrop-blur-md">
            <p className="text-sm font-bold text-slate-300 uppercase tracking-widest leading-relaxed">
              “¿Ya tienes tu web diseñada? <br/>
              <span className="text-accent">Puedes empezar directamente desde la Clase 2 o Clase 3.</span>”
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative flex justify-center items-center mb-24 max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 -translate-y-1/2"></div>
          <div className="relative flex justify-between w-full px-4">
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-accent text-white flex items-center justify-center font-black text-xl shadow-[0_0_40px_rgba(255,77,46,0.5)] z-10 border-4 border-[#0B0B0B]">Hoy</div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-slate-800 text-slate-500 flex flex-col items-center justify-center font-black text-lg leading-[0.85] z-10 border-4 border-[#0B0B0B]">
                <span>Clase</span>
                <span>2</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-slate-800 text-slate-500 flex flex-col items-center justify-center font-black text-lg leading-[0.85] z-10 border-4 border-[#0B0B0B]">
                <span>Clase</span>
                <span>3</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="bg-[#141414] border border-white/10 p-10 rounded-[3rem] flex flex-col h-full hover:border-accent/50 transition-all group relative overflow-hidden">
            <h3 className="text-2xl font-black mb-10 text-white group-hover:text-accent transition-colors">Diseña tu web con base real</h3>
            <ul className="space-y-6 mb-12 flex-grow">
              {["Definir logo y paleta de colores", "Moodboard visual en Pinterest", "Site diagram usando IA", "Diseño completo en Figma"].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-400 font-bold"><CheckCircle2 size={22} className="text-accent shrink-0 mt-1" />{text}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#141414] border border-white/10 p-10 rounded-[3rem] flex flex-col h-full hover:border-accent/50 transition-all group relative overflow-hidden">
            <h3 className="text-2xl font-black mb-10 text-white group-hover:text-accent transition-colors">Convierte tu diseño en una web online</h3>
            <ul className="space-y-6 mb-12 flex-grow">
              {["Pasar Figma a web usando IA", "Iterar el diseño con prompteo", "Subir el proyecto a GitHub", "Deploy en Vercel con link público"].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-400 font-bold"><CheckCircle2 size={22} className="text-accent shrink-0 mt-1" />{text}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#141414] border border-white/10 p-10 rounded-[3rem] flex flex-col h-full hover:border-accent/50 transition-all group relative overflow-hidden">
            <h3 className="text-2xl font-black mb-10 text-white group-hover:text-accent transition-colors">Navegación, pagos y escalado</h3>
            <ul className="space-y-6 mb-12 flex-grow">
              {["Paginación y corrección", "Mejora de estructura", "Integración de links de pago", "Versionado de tu web"].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-400 font-bold"><CheckCircle2 size={22} className="text-accent shrink-0 mt-1" />{text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section className="py-24 px-4 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight text-slate-950">¿Es esto para ti?</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-emerald-600"><CheckCircle2 size={24} /> Es para ti si…</h3>
            <ul className="space-y-6">
              {[
                "Nunca has escrito código, pero necesitas una web funcional antes de 2026.",
                "Eres emprendedor/a o freelancer y quieres lanzar sin depender de nadie.",
                "Tienes paciencia y curiosidad para iterar hasta que quede como tú quieres.",
                "Aprendes haciendo, prefieres publicar una web real en lugar de ver teoría.",
                "Quieres control total de tu web, sin pagar mensualidades absurdas."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 font-bold text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 shrink-0"></div>{text}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-100 p-10 rounded-[2.5rem] border border-slate-200 shadow-inner">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-400"><XCircle size={24} /> No es para ti si…</h3>
            <ul className="space-y-6">
              {[
                "Buscas una solución mágica en 1 clic sin aprender nada en el proceso.",
                "Te frustras fácilmente cuando algo no sale a la primera.",
                "Solo quieres teoría y no estás dispuesto a practicar.",
                "Te molesta tener que probar, fallar y volver a intentar.",
                "No tienes tiempo ni ganas de experimentar y probar por tu cuenta."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 font-bold text-slate-400 line-through">
                  <div className="w-2 h-2 rounded-full bg-slate-300 mt-2.5 shrink-0"></div>{text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const packs = [
    {
      name: "Clase Individual",
      price: "12",
      ideal: "Ideal para probar la metodología o resolver un punto puntual.",
      includes: ["Acceso a 1 clase 100% en vivo", "Material de apoyo práctico", "Acceso al grupo privado de WhatsApp"],
      recommended: false, savings: null
    },
    {
      name: "Pack 2 Clases",
      price: "15",
      ideal: "Para avanzar con mayor claridad y continuidad.",
      includes: ["Acceso a 2 clases 100% en vivo", "Material de apoyo práctico", "Material complementario: costos", "Acceso al grupo privado de WhatsApp"],
      recommended: false, savings: "Ahorra 37%"
    },
    {
      name: "Pack Completo (3 Clases)",
      price: "22",
      ideal: "De cero a tu primera web publicada.",
      includes: ["Acceso a 3 clases 100% en vivo", "Material de apoyo paso a paso", "Recomendaciones para despegar", "Grupo privado de WhatsApp", "Checklist final"],
      recommended: true, savings: "Ahorra 40%"
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#0B0B0B] text-white overflow-hidden relative" id="precios">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">Inversión transparente</h2>
          <p className="text-slate-400 text-lg">Sin suscripciones. Un solo pago. Clases 100% en vivo.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {packs.map((pack, i) => (
            <div key={i} className={`relative p-8 rounded-[2.5rem] flex flex-col transition-all ${pack.recommended ? 'bg-slate-900 text-white ring-4 ring-accent shadow-2xl scale-105 z-10 border border-accent/20' : 'bg-white/5 border border-white/10 text-white hover:border-white/20'}`}>
              {pack.recommended && <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap">EL MÁS POPULAR</div>}
              {pack.savings && <div className={`absolute top-6 right-8 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${pack.recommended ? 'bg-white text-slate-900' : 'bg-accent text-white'}`}>{pack.savings}</div>}
              <h3 className="text-2xl font-extrabold mb-1 pr-16">{pack.name}</h3>
              <div className="flex items-baseline gap-1 mb-6"><span className="text-4xl font-black">${pack.price}</span><span className="text-sm opacity-60">USD</span></div>
              <p className={`text-sm font-bold mb-8 ${pack.recommended ? 'text-slate-300' : 'text-slate-400'}`}>{pack.ideal}</p>
              <div className="space-y-4 mb-10 flex-grow">
                {pack.includes.map((incl, j) => (
                  <div key={j} className="flex items-start gap-3 text-sm font-bold"><CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />{incl}</div>
                ))}
              </div>
              <button className={`w-full py-5 rounded-2xl text-lg font-black transition-all ${pack.recommended ? 'bg-accent text-white hover:bg-[#E64529]' : 'bg-white text-slate-900 hover:bg-slate-200'}`}>Elegir plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const outcomes = [
    { title: "Tu primera web real, funcionando hoy mismo", description: "Olvídate de plantillas genéricas: tendrás una web propia bajo un dominio free o puedes ponerle uno propio, lista para mostrar al mundo." },
    { title: "Control total sin escribir código", description: "Aprende a manejar tu web y tu repositorio como un pro, sin necesidad de saber programar ni complicarte con líneas de código." },
    { title: "Diseño profesional hecho a medida", description: "Tu web se verá moderna y profesional, creada para ti y tu negocio." },
    { title: "Actualizaciones rápidas con IA", description: "Cambia textos, imágenes o secciones en segundos usando prompts de IA: nada de esperar a un diseñador o desarrollador." },
    { title: "Metodologías 100% replicables", description: "Podrás repetir los procesos y crear nuevas páginas o proyectos con la misma técnica, sin depender de nadie." },
    { title: "Independencia total", description: "Nunca más dependerás de terceros para cambios básicos. Tu web será tuya, tú la controlas y tú la actualizas." }
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 tracking-tight text-slate-950">Resultados reales desde la 2 clase</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform"><CheckCircle2 size={24} /></div>
              <h4 className="text-xl font-black text-slate-900 mb-3 leading-tight">{item.title}</h4>
              <p className="text-lg font-semibold leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "¿De verdad no pago nada por herramientas?", a: "Correcto. Usamos planes gratuitos de Figma, GitHub, Vercel y AI Studio. Son suficientes para proyectos profesionales." },
    { q: "¿Necesito saber diseño o código?", a: "No. Empezamos de cero. La IA hace el trabajo pesado, tú la diriges." },
    { q: "¿Sirve para vender productos reales?", a: "Sí. En la Clase 3 aprenderás a crear páginas dinámicas y asociar links de pago tipo Stripe o Gumroad." }
  ];

  return (
    <section className="py-24 px-4 bg-[#0B0B0B]" id="faq">
      <div className="max-w-3xl mx-auto text-white">
        <h2 className="text-4xl font-extrabold text-center mb-16">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10 pb-4">
              <p className="text-xl font-bold mb-2">{faq.q}</p>
              <p className="text-slate-400 font-semibold">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTAFinal = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-5xl mx-auto bg-accent rounded-[3rem] p-12 text-center text-white shadow-2xl">
      <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">No pierdas otro año con una web "en construcción".</h2>
      <a href="#precios" className="inline-block bg-white text-accent px-10 py-6 rounded-2xl text-xl font-black hover:scale-105 transition-all">Quiero el pack completo ($22)</a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-slate-100 bg-white text-center">
    <div className="font-extrabold text-xl text-slate-900 mb-4">BetterCode</div>
    <div className="text-slate-400 font-bold text-sm">© {new Date().getFullYear()} BetterCode. Sin humo. Solo código y despliegues reales.</div>
  </footer>
);

const App: React.FC = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <Hero />
    <Milestones />
    <Comparison />
    <Pricing />
    <Results />
    <FAQ />
    <CTAFinal />
    <Footer />
  </div>
);

export default App;
