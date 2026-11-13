/**
 * VANINA TRAVESANI | TECHFORGE - JAVASCRIPT ENGINE
 * High-performance UI interactions, modal controls, spotlight tracking & form helpers.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMouseSpotlight();
  initPortfolioTabs();
  initCaseStudyModal();
  initProjectEstimator();
  initClipboardHelpers();
  initMobileMenu();
  initAboutTabs();
});

/* ==========================================================================
   1. STICKY HEADER & SCROLL SPY
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('py-3', 'bg-[#08090f]/90', 'border-b', 'border-white/10', 'shadow-2xl', 'backdrop-blur-xl');
      header.classList.remove('py-5', 'bg-transparent', 'border-transparent');
    } else {
      header.classList.remove('py-3', 'bg-[#08090f]/90', 'border-b', 'border-white/10', 'shadow-2xl', 'backdrop-blur-xl');
      header.classList.add('py-5', 'bg-transparent', 'border-transparent');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. INTERACTIVE MOUSE SPOTLIGHT (Linear/Stripe Style)
   ========================================================================== */
function initMouseSpotlight() {
  const cards = document.querySelectorAll('.spotlight-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   3. PORTFOLIO FILTER TABS
   ========================================================================== */
function initPortfolioTabs() {
  const filterBtns = document.querySelectorAll('.portfolio-tab-btn');
  const projectCards = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category?.includes(filterValue)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   4. CASE STUDY MODAL DETAILS
   ========================================================================== */
const projectData = {
  'laura-giraudo': {
    title: 'Estudio Contable María Laura Giraudo',
    subtitle: 'Landing page mobile-first de alto rendimiento y autoridad para el sector contable y agropecuario en San Justo, Santa Fe.',
    badge: 'Landing Page / B2B',
    img: 'Imagenes/laura-giraudo-case.jpg',
    client: 'Estudio Contable María Laura Giraudo & Asoc.',
    duration: '2 semanas',
    deliverables: 'Diseño UI/UX en Figma, Maquetación Frontend, Optimización SEO Local, Integración WhatsApp API',
    overview: 'Rediseño integral de la presencia digital de María Laura Giraudo, contadora pública y asesora tributaria en San Justo, Santa Fe. El objetivo primordial consistió en transformar un portal tradicional en un activo digital de captación comercial orientado a productores agropecuarios, pymes, monotributistas y empresas que requieren asesoría fiscal inmediata.',
    challenges: [
      'Establecer autoridad y confianza corporativa instantánea desde el primer pliegue visual.',
      'Estructurar servicios contables y agropecuarios en paquetes claros y comprensibles.',
      'Maximizar la tasa de conversión (CRO) dirigiendo prospectos a consultas directas por WhatsApp con mensajes categorizados.'
    ],
    results: [
      '+180% de incremento en solicitudes de consulta en el primer mes de lanzamiento.',
      'Score de Lighthouse: 98 en Rendimiento, 100 en Accesibilidad, 100 en SEO.',
      'Tiempo de carga inicial inferior a 0.8 segundos en conexiones móviles 4G.'
    ],
    techStack: ['HTML5 Semántico', 'Tailwind CSS', 'JavaScript ES6+', 'SEO Local Schema', 'Figma', 'Mobile-First'],
    liveUrl: 'https://contadoralauragiraudo.com.ar/',
    demoUrl: 'https://wa.link/fvf6tt?text=Hola%20Vanina,%20vi%20la%20web%20del%20Estudio%20Contable%20Laura%20Giraudo%20y%20quiero%20cotizar%20un%20sitio%20similar'
  },
  'cecilia-machuca': {
    title: 'Escribanía Cecilia Machuca',
    subtitle: 'Diseño elegante, formal y de conversión para servicios notariales.',
    badge: 'Landing Page Notarial',
    img: 'Imagenes/escribania-machuca-case.jpg',
    client: 'Escribanía Cecilia Machuca',
    duration: '2 semanas',
    deliverables: 'Diseño UI/UX en Figma, Maquetación Frontend, Optimización SEO Local, Integración WhatsApp',
    overview: 'Desarrollo de landing page corporativa de alta distinción para la Escribanía Cecilia Machuca. La plataforma refleja solvencia, seguridad jurídica y formalidad, estructurando los servicios notariales para particulares y empresas con canales de consulta directa.',
    challenges: [
      'Transmitir máxima seriedad, fe pública y confianza institucional en el sector notarial.',
      'Facilitar la solicitud de presupuestos y requisitos para escrituras, actas y certificaciones.',
      'Diseño 100% responsivo y sobrio con paleta cromática sofisticada y tipografía de distinción.'
    ],
    results: [
      'Incremento notable en consultas notariales calificadas recibidas vía web y WhatsApp.',
      'Carga en menos de 0.8s en dispositivos móviles con arquitectura liviana.',
      'Posicionamiento optimizado para búsquedas de escribanía y servicios notariales.'
    ],
    techStack: ['HTML5', 'Tailwind CSS', 'JavaScript ES6+', 'Figma UI/UX', 'SEO Local', 'Responsive Design'],
    liveUrl: 'https://escribanaceciliamachuca.com.ar/',
    demoUrl: 'https://wa.link/fvf6tt?text=Hola%20Vanina,%20vi%20la%20web%20de%20la%20Escribania%20Cecilia%20Machuca%20y%20quiero%20cotizar%20un%20proyecto%20similar'
  },
  'servipack': {
    title: 'Transportes Servipack',
    subtitle: 'Plataforma corporativa y cotizador de cargas y fletes express.',
    badge: 'Web App & Logística',
    img: 'Imagenes/servipack-case.jpg',
    client: 'Servipack Logística & Envíos',
    duration: '3 semanas',
    deliverables: 'Arquitectura de Información, UI/UX Dashboard, Cotizador de Fletes Dinámico, Optimización de Rendimiento',
    overview: 'Desarrollo de plataforma web corporativa moderna para Servipack, empresa referente en transporte de cargas generales y paquetería express. La solución digitalizó métodos manuales de contacto con un sistema de cotización inteligente y portal de envíos visual.',
    challenges: [
      'Digitalizar el proceso de cotización de fletes según origen, destino, volumen y peso.',
      'Garantizar una interfaz intuitiva tanto para conductores en ruta como para empresas con envíos recurrentes.',
      'Rendimiento ultra veloz optimizado para dispositivos móviles con baja cobertura de red.'
    ],
    results: [
      'Reducción del 60% en el tiempo operativo dedicado a responder cotizaciones telefónicas.',
      'Aumento del 120% en pedidos de cotizaciones completas recibidas a través de la web.',
      'Plataforma 100% responsiva con arquitectura modular lista para futuras integraciones de GPS.'
    ],
    techStack: ['JavaScript Moderno', 'Component Architecture', 'Tailwind CSS', 'Figma Prototyping', 'REST APIs Ready'],
    liveUrl: 'https://transporteservipack.com.ar/',
    demoUrl: 'https://wa.link/fvf6tt?text=Hola%20Vanina,%20vi%20la%20web%20de%20Servipack%20y%20quiero%20desarrollar%20una%20plataforma%20web'
  },
  'insumos-industriales': {
    title: 'Insumos Industriales SF',
    subtitle: 'Diseño de tienda online orientada a la venta B2B, catálogo optimizado y experiencia de compra ágil.',
    badge: 'E-Commerce B2B',
    img: 'Imagenes/insumos-industriales-case.jpg',
    client: 'Insumos Industriales SF',
    duration: '3 semanas',
    deliverables: 'Diseño UX/UI, Catálogo B2B, Optimización de Carrito Ágil y Canal de Venta Mayorista',
    overview: 'Construcción y personalización de una tienda virtual moderna orientada al segmento industrial. Foco absoluto en la navegación ágil de suministros técnicos, herramientas, rodamientos y seguridad, facilitando pedidos y cotizaciones mayoristas sin fricción.',
    challenges: [
      'Estructurar un catálogo amplio con filtros rápidos por categoría, marca y especificación técnica.',
      'Facilitar la compra y solicitud de presupuesto tanto para clientes minoristas como cuentas corporativas B2B.',
      'Garantizar una carga ultrarrápida de imágenes de productos en conexiones móviles.'
    ],
    results: [
      'Digitalización y ordenamiento de catálogo con incremento en pedidos mayoristas recibidos.',
      'Experiencia de navegación fluida con transiciones instantáneas entre categorías.',
      'Canal de conversión directo a WhatsApp con carrito pre-cargado para cierre ágil de ventas.'
    ],
    techStack: ['E-Commerce B2B', 'Design System Figma', 'Responsive UI', 'Catálogo Dinámico', 'Analytics'],
    liveUrl: 'https://insumosindustrialessf.com.ar/',
    demoUrl: 'https://wa.link/fvf6tt?text=Hola%20Vanina,%20vi%20la%20tienda%20de%20Insumos%20Industriales%20SF%20y%20quiero%20cotizar%20un%20E-Commerce'
  }
};

function initCaseStudyModal() {
  const modalBackdrop = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const detailBtns = document.querySelectorAll('.view-case-details-btn');

  if (!modalBackdrop) return;

  const openModal = (projectId) => {
    const data = projectData[projectId];
    if (!data) return;

    // Populate modal contents
    document.getElementById('modal-badge').textContent = data.badge;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-subtitle').textContent = data.subtitle;
    document.getElementById('modal-img').src = data.img;
    document.getElementById('modal-img').alt = data.title;
    document.getElementById('modal-client').textContent = data.client;
    document.getElementById('modal-duration').textContent = data.duration;
    document.getElementById('modal-deliverables').textContent = data.deliverables;
    document.getElementById('modal-overview').textContent = data.overview;

    // Challenges list
    const challengesContainer = document.getElementById('modal-challenges');
    challengesContainer.innerHTML = '';
    data.challenges.forEach(ch => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2 text-slate-300 text-sm';
      li.innerHTML = `<span class="text-cyan-400 mt-1">▸</span> <span>${ch}</span>`;
      challengesContainer.appendChild(li);
    });

    // Results list
    const resultsContainer = document.getElementById('modal-results');
    resultsContainer.innerHTML = '';
    data.results.forEach(res => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2 text-slate-300 text-sm';
      li.innerHTML = `<span class="text-emerald-400 mt-1">✓</span> <span>${res}</span>`;
      resultsContainer.appendChild(li);
    });

    // Tech stack tags
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '';
    data.techStack.forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-cyan-300 font-mono';
      tag.textContent = t;
      techContainer.appendChild(tag);
    });

    // Live Web button & Action button
    const liveBtn = document.getElementById('modal-live-btn');
    if (liveBtn) {
      if (data.liveUrl) {
        liveBtn.href = data.liveUrl;
        liveBtn.style.display = 'inline-flex';
      } else {
        liveBtn.style.display = 'none';
      }
    }

    const actionBtn = document.getElementById('modal-action-btn');
    if (actionBtn) {
      actionBtn.href = data.demoUrl;
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  detailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   5. INTERACTIVE PROJECT ESTIMATOR & B2B CONTACT FORM
   ========================================================================== */
function initProjectEstimator() {
  const servicePills = document.querySelectorAll('.service-choice-pill');
  const urgencyPills = document.querySelectorAll('.urgency-choice-pill');
  const form = document.getElementById('tech-contact-form');
  const detailsInput = document.getElementById('form-details');

  let selectedService = 'Landing Page de Alta Conversión';
  let selectedUrgency = 'Normal (2 a 4 semanas)';

  servicePills.forEach(pill => {
    pill.addEventListener('click', () => {
      servicePills.forEach(p => p.classList.remove('active', 'border-cyan-400', 'bg-cyan-500/10', 'text-cyan-400'));
      pill.classList.add('active', 'border-cyan-400', 'bg-cyan-500/10', 'text-cyan-400');
      selectedService = pill.getAttribute('data-value');
    });
  });

  urgencyPills.forEach(pill => {
    pill.addEventListener('click', () => {
      urgencyPills.forEach(p => p.classList.remove('active', 'border-purple-400', 'bg-purple-500/10', 'text-purple-400'));
      pill.classList.add('active', 'border-purple-400', 'bg-purple-500/10', 'text-purple-400');
      selectedUrgency = pill.getAttribute('data-value');
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value.trim();
      const email = document.getElementById('form-email')?.value.trim();
      const details = detailsInput?.value.trim() || 'Sin detalles adicionales especificados.';

      if (!name || !email) {
        showToast('⚠️ Por favor completa tu nombre y correo electrónico.');
        return;
      }

      // Generate structured WhatsApp message
      const textMessage = `Hola Vanina! Soy ${name} (${email}).%0A%0A` +
        `Quiero consultar sobre un proyecto:%0A` +
        `📌 Servicio: ${encodeURIComponent(selectedService)}%0A` +
        `⏱ Plazo deseado: ${encodeURIComponent(selectedUrgency)}%0A` +
        `📝 Detalle: ${encodeURIComponent(details)}`;

      const waUrl = `https://wa.link/fvf6tt?text=${textMessage}`;

      showToast('🚀 Redirigiendo a WhatsApp con tu propuesta...');

      setTimeout(() => {
        window.open(waUrl, '_blank');
        form.reset();
      }, 1000);
    });
  }
}

/* ==========================================================================
   6. CLIPBOARD HELPERS & TOAST NOTIFICATION
   ========================================================================== */
function initClipboardHelpers() {
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'vaninatravesani@gmail.com';

      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showToast('✓ Email copiado: vaninatravesani@gmail.com');
        }).catch(() => {
          prompt('Copia el email:', email);
        });
      } else {
        prompt('Copia el email:', email);
      }
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('tech-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'tech-toast';
    toast.className = 'tech-toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span class="text-cyan-400">●</span> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3800);
}

/* ==========================================================================
   7. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('close-mobile-drawer');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   8. ABOUT ME TABS (FILOSOFÍA / STACK / TRAYECTORIA)
   ========================================================================== */
function initAboutTabs() {
  const tabBtns = document.querySelectorAll('.about-tab-btn');
  const tabPanels = document.querySelectorAll('.about-tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('active', 'text-cyan-400', 'border-cyan-400', 'bg-cyan-500/10');
        b.classList.add('text-slate-400', 'border-transparent');
      });

      btn.classList.add('active', 'text-cyan-400', 'border-cyan-400', 'bg-cyan-500/10');
      btn.classList.remove('text-slate-400', 'border-transparent');

      const targetId = btn.getAttribute('data-target');

      tabPanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.remove('hidden');
          setTimeout(() => {
            panel.style.opacity = '1';
            panel.style.transform = 'translateY(0)';
          }, 20);
        } else {
          panel.style.opacity = '0';
          panel.style.transform = 'translateY(8px)';
          panel.classList.add('hidden');
        }
      });
    });
  });
}