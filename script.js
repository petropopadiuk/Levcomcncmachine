// Simple bilingual switcher (en / ua) for static pages.
// All translatable text elements use attribute `data-key` with a key that matches T[lang][key].
const T = {
  en: {
    nav_home: "Home", nav_about: "About", nav_services: "Services", nav_portfolio: "Portfolio", nav_contact: "Contact",
    tagline: "Precision CNC Metal Machining",
    hero_title: "Precision CNC Metal Machining on Demand",
    hero_sub: "Custom milling, turning, and finishing for prototypes and production runs. ISO-level accuracy and fast turnaround.",
    hero_cta: "Get a Quote",
    intro_title: "Why choose Levcom",
    intro_text: "Experienced machinists, modern Haas/Fanuc equipment, inspection and quality control, fast lead times.",
    about_title: "About Levcom",
    about_text: "Levcom provides precision CNC milling and turning services with experienced machinists and modern equipment. We specialize in close-tolerance parts for aerospace, automotive, medical and industrial customers.",
    about_experience_title: "Experience & Equipment",
    about_item1: "Haas & Fanuc CNC machines — 3- and 5-axis",
    about_item2: "Turning centers and multi-axis capabilities",
    about_item3: "Quality control: CMM, inspection reports",
    services_title: "Our Services",
    svc_milling: "CNC Milling", svc_milling_text: "3- and 5-axis milling for prototypes and series production.",
    svc_turning: "CNC Turning", svc_turning_text: "High-precision turning for shafts, bushings and threaded components.",
    svc_finishing: "Finishing & Treatment", svc_finishing_text: "Anodizing, powder coating, passivation, surface treatments.",
    svc_cadcam: "CAD / CAM", svc_cadcam_text: "3D modelling, CAD cleanup and G-code generation.",
    portfolio_title: "Portfolio",
    contact_title: "Contact & Quote",
    contact_text: "Upload your drawing (.STEP, .STP, .DXF, .DWG) and we will reply within 24 hours.",
    contact_send: "Send Request",
    contact_phone: "Phone: (to add)",
    contact_email: "Email: info@levcom.example (to update)",
    footer_copy: "Precision CNC Metal Machining"
  },
  ua: {
    nav_home: "Головна", nav_about: "Про нас", nav_services: "Послуги", nav_portfolio: "Портфоліо", nav_contact: "Контакти",
    tagline: "Високоточна ЧПУ-обробка металу",
    hero_title: "Високоточна ЧПУ-обробка на замовлення",
    hero_sub: "Фрезерування, токарна обробка та фінішне оздоблення для прототипів і серій. Точність ISO та швидкий термін виконання.",
    hero_cta: "Отримати прорахунок",
    intro_title: "Чому Levcom",
    intro_text: "Досвідчені майстри, сучасне обладнання Haas/Fanuc, контроль якості та швидкі терміни.",
    about_title: "Про Levcom",
    about_text: "Levcom надає послуги з точного фрезерування та токарної обробки на сучасному обладнанні. Ми спеціалізуємося на деталях з малими допусками для аерокосмічної, автомобільної, медичної та промислової галузей.",
    about_experience_title: "Досвід та обладнання",
    about_item1: "ЧПУ-станки Haas та Fanuc — 3- і 5-осьові",
    about_item2: "Токарні центри та багатоколісні конфігурації",
    about_item3: "Контроль якості: CMM, звіти інспекції",
    services_title: "Наші послуги",
    svc_milling: "Фрезерування на ЧПУ", svc_milling_text: "3- та 5-осьове фрезерування, прототипи та серійне виробництво.",
    svc_turning: "Токарна обробка на ЧПУ", svc_turning_text: "Високоточне точіння валів, втулок і різьбових деталей.",
    svc_finishing: "Фінішні покриття", svc_finishing_text: "Анодування, порошкове покриття, пасивація, обробка поверхні.",
    svc_cadcam: "CAD / CAM", svc_cadcam_text: "3D моделювання, підготовка креслень та генерація G-коду.",
    portfolio_title: "Портфоліо",
    contact_title: "Контакти та прорахунок",
    contact_text: "Завантажте креслення (.STEP, .STP, .DXF, .DWG) — ми відповімо протягом 24 годин.",
    contact_send: "Надіслати запит",
    contact_phone: "Телефон: (додати)",
    contact_email: "Email: info@levcom.example (оновити)",
    footer_copy: "Високоточна ЧПУ-обробка металу"
  }
};

function setLanguage(lang){
  document.body.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (T[lang] && T[lang][key]) el.textContent = T[lang][key];
  });
  // update nav too (some nav anchors in header use data-key)
  document.querySelectorAll('.main-nav a').forEach(a=>{
    const k = a.getAttribute('data-key');
    if (k && T[lang] && T[lang][k]) a.textContent = T[lang][k];
  });
  // highlight active language button
  document.getElementById('btn-en').style.opacity = (lang==='en')? '1':'0.6';
  document.getElementById('btn-ua').style.opacity = (lang==='ua')? '1':'0.6';
}

// set default language on load
document.addEventListener('DOMContentLoaded', ()=> setLanguage('en'));

// Demo form submit handler (no backend included)
function demoSubmit(e){
  e.preventDefault();
  alert((document.body.getAttribute('data-lang')==='ua') ? 'Ця демо-сторінка не надсилає файли. Налаштуйте Formspree/Netlify Forms або бекенд (PHP/Node) згідно README.' : 'This demo page does not upload files. Configure Formspree/Netlify Forms or a backend (PHP/Node) per README.');
  return false;
}
