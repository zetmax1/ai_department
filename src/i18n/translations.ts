export type Lang = "uz" | "en" | "ru";

export const LANG_LABELS: Record<Lang, string> = {
  uz: "O'zbek",
  en: "English",
  ru: "Русский",
};

type Dict = {
  nav: { about: string; careers: string; facilities: string; vision: string; apply: string };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    learn: string;
    apply: string;
  };
  why: {
    title: string;
    intro: string;
    motto: string;
    cards: { title: string; text: string }[];
  };
  careers: {
    title: string;
    intro: string;
    roles: { title: string; short: string; details: string; tools: string }[];
  };
  curriculum: {
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  facilities: {
    title: string;
    intro: string;
    rooms: { title: string; text: string; equipment: string[] }[];
  };
  vision: { title: string; lines: string[] };
  testimonials: {
    title: string;
    items: { quote: string; name: string; role: string }[];
  };
  apply: {
    title: string;
    intro: string;
    name: string;
    email: string;
    phone: string;
    language: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    successText: string;
    error: string;
    consent: string;
  };
  footer: { contact: string; address: string; rights: string };
};

export const TRANSLATIONS: Record<Lang, Dict> = {
  uz: {
    nav: { about: "yo'nalish haqida", careers: "kasblar", facilities: "imkoniyatlar", vision: "kelajak", apply: "ariza topshirish" },
    hero: {
      eyebrow: "yangi yo'nalish · sun'iy intellekt",
      title1: "sun'iy intellekt",
      title2: "kelajak kasbi",
      subtitle: "ilm, tasavvur va mashinalar tilini birlashtirib, ertangi dunyoni bugun loyihalang.",
      learn: "batafsil",
      apply: "ariza topshirish",
    },
    why: {
      title: "nega aynan shu yo'nalish?",
      intro: "sun'iy intellekt allaqachon hayotimizning har bir sohasiga kirib keldi. mana faqat bir nechta misol.",
      motto: "kelajak — bu kim uni qura olsa, o'shaning qo'lida.",
      cards: [
        { title: "tibbiyot", text: "kasalliklarni erta aniqlash va aniq tashxis qo'yish." },
        { title: "moliya", text: "xavf-xatarlarni baholash va aqlli savdo tizimlari." },
        { title: "ta'lim", text: "har bir o'quvchi uchun shaxsiy ta'lim yo'lakchasi." },
        { title: "transport", text: "avtonom haydash va aqlli logistika tarmoqlari." },
        { title: "ilm-fan", text: "yangi materiallar va dorilarni kashf etish." },
      ],
    },
    careers: {
      title: "tamomlagandan so'ng siz kim bo'lasiz",
      intro: "har bir karta — alohida yo'l. ustiga bosing va batafsilini ko'ring.",
      roles: [
        { title: "AI muhandisi", short: "aqlli mahsulotlarni loyihalaydi", details: "ishlab chiqarishga tayyor sun'iy intellekt tizimlarini yaratadi va integratsiya qiladi.", tools: "python · pytorch · docker" },
        { title: "ma'lumotlar olimi", short: "raqamlardan ma'no topadi", details: "katta hajmdagi ma'lumotlardan biznes qarorlari uchun foydali xulosalar chiqaradi.", tools: "python · sql · pandas" },
        { title: "mashinaviy o'qitish muhandisi", short: "modellarni o'rgatadi va sozlaydi", details: "modellarning aniqligi, tezligi va barqarorligini ta'minlaydi.", tools: "tensorflow · mlflow · kubernetes" },
        { title: "robotexnika muhandisi", short: "mashinalarga harakat beradi", details: "sezgirlar, boshqaruv va sun'iy intellektni birlashtirib, robotlarni yaratadi.", tools: "ros · c++ · sensor fusion" },
        { title: "kompyuter ko'rishi muhandisi", short: "mashinalarni ko'rishga o'rgatadi", details: "video va tasvirlarni real vaqtda tahlil qiladigan tizimlar quradi.", tools: "opencv · yolo · cuda" },
        { title: "tabiiy til muhandisi", short: "matn va nutqni tushuntiradi", details: "chatbotlar, tarjima va kontent tahlili uchun til modellarini ishlab chiqadi.", tools: "transformers · llm · rag" },
      ],
    },
    curriculum: {
      title: "o'qiladigan asosiy fanlar",
      intro: "mustahkam poydevor, zamonaviy texnologiyalar va amaliyot.",
      items: [
        { title: "matematika asoslari", text: "chiziqli algebra, ehtimollar, statistika." },
        { title: "dasturlash", text: "python, ma'lumotlar tuzilmalari, algoritmlar." },
        { title: "mashinaviy o'qitish", text: "klassik modellardan zamonaviy uslublargacha." },
        { title: "chuqur o'qitish", text: "neyron tarmoqlari, transformerlar." },
        { title: "kompyuter ko'rishi", text: "tasvir va videolarni tahlil qilish." },
        { title: "tabiiy tilni qayta ishlash", text: "matn, nutq va katta til modellari." },
        { title: "robotexnika", text: "sensorlar, boshqaruv va avtonom tizimlar." },
        { title: "AI etikasi", text: "mas'uliyatli va xavfsiz AI yaratish." },
      ],
    },
    facilities: {
      title: "bizning laboratoriyalar",
      intro: "har bir xona — alohida tajriba. kartani bosing va ichkariga qarang.",
      rooms: [
        { title: "AI laboratoriyasi", text: "kuchli ish stantsiyalari va o'quv muhiti.", equipment: ["yuqori unumli kompyuterlar", "ikkitadan monitor", "tezkor internet", "interaktiv doska"] },
        { title: "robotexnika xonasi", text: "robot prototiplarini yig'ish va sinash.", equipment: ["robot qo'llari", "humanoid platformalar", "3d printerlar", "elektron asboblar"] },
        { title: "GPU klaster xonasi", text: "katta modellarni o'rgatish uchun hisoblash quvvati.", equipment: ["NVIDIA GPU serverlar", "yuqori tezlikdagi tarmoq", "sovutish tizimi"] },
        { title: "hamkorlik maydoni", text: "g'oyalar tug'iladigan ochiq makon.", equipment: ["katta doskalar", "moslashuvchan stollar", "video qo'ng'iroq jihozlari"] },
      ],
    },
    vision: {
      title: "kelajak — siz quradigan dunyo",
      lines: [
        "sun'iy intellekt — bu nafaqat texnologiya, balki yangi tafakkur usuli.",
        "ertangi shifokor, muhandis va tadqiqotchi — bularning barchasi AI bilan ishlaydi.",
        "siz shu yo'lning boshida turibsiz. birinchi qadamni bugun qo'ying.",
      ],
    },
    testimonials: {
      title: "ular nima deyishadi",
      items: [
        { quote: "AI yo'nalishi talabalarga nafaqat bilim, balki kelajakka ishonch beradi.", name: "Dilshod Karimov", role: "fakultet dekani" },
        { quote: "biz bitiruvchilarni ish bilan ta'minlashga tayyormiz. kadrlar tanqisligi katta.", name: "Madina Rahimova", role: "IT kompaniyasi rahbari" },
        { quote: "amaliyot va laboratoriya — bu yerdagi eng kuchli tomonlar.", name: "Jasur Tursunov", role: "ikkinchi kurs talabasi" },
      ],
    },
    apply: {
      title: "ariza topshirish",
      intro: "bir necha qadamda biz bilan bog'laning. tez orada javob beramiz.",
      name: "to'liq ism",
      email: "elektron pochta",
      phone: "telefon raqami",
      language: "ta'lim tili",
      message: "qo'shimcha xabar",
      submit: "yuborish",
      sending: "yuborilmoqda...",
      success: "rahmat!",
      successText: "arizangiz qabul qilindi. tez orada siz bilan bog'lanamiz.",
      error: "xatolik yuz berdi. iltimos, qayta urinib ko'ring.",
      consent: "ma'lumotlaringiz faqat qabul jarayoni uchun ishlatiladi.",
    },
    footer: { contact: "bog'lanish", address: "manzil", rights: "barcha huquqlar himoyalangan." },
  },
  en: {
    nav: { about: "about", careers: "careers", facilities: "facilities", vision: "vision", apply: "apply" },
    hero: {
      eyebrow: "new program · artificial intelligence",
      title1: "artificial intelligence",
      title2: "the field of the future",
      subtitle: "join science, imagination and the language of machines to design tomorrow's world today.",
      learn: "learn more",
      apply: "apply now",
    },
    why: {
      title: "why this program",
      intro: "ai is already part of every part of our lives. here are just a few examples.",
      motto: "the future belongs to those who can build it.",
      cards: [
        { title: "healthcare", text: "early detection and more accurate diagnoses." },
        { title: "finance", text: "smart risk scoring and trading systems." },
        { title: "education", text: "a personal learning path for every student." },
        { title: "transport", text: "autonomous driving and smart logistics." },
        { title: "science", text: "discovering new materials and medicines." },
      ],
    },
    careers: {
      title: "who you can become after graduation",
      intro: "each card is a different path. tap to see more.",
      roles: [
        { title: "ai engineer", short: "designs intelligent products", details: "builds and ships production-grade ai systems end to end.", tools: "python · pytorch · docker" },
        { title: "data scientist", short: "finds meaning in numbers", details: "turns data into business insights and predictions.", tools: "python · sql · pandas" },
        { title: "machine learning engineer", short: "trains and tunes models", details: "ensures models are accurate, fast and reliable in production.", tools: "tensorflow · mlflow · kubernetes" },
        { title: "robotics engineer", short: "gives motion to machines", details: "combines sensors, control and ai to build robots.", tools: "ros · c++ · sensor fusion" },
        { title: "computer vision engineer", short: "teaches machines to see", details: "builds systems that understand images and video in real time.", tools: "opencv · yolo · cuda" },
        { title: "nlp engineer", short: "makes machines understand language", details: "builds chatbots, translation and content systems with language models.", tools: "transformers · llm · rag" },
      ],
    },
    curriculum: {
      title: "what you will study",
      intro: "strong foundations, modern tools, and hands-on practice.",
      items: [
        { title: "math foundations", text: "linear algebra, probability, statistics." },
        { title: "programming", text: "python, data structures, algorithms." },
        { title: "machine learning", text: "from classical models to modern methods." },
        { title: "deep learning", text: "neural networks and transformers." },
        { title: "computer vision", text: "analyzing images and video." },
        { title: "natural language", text: "text, speech and large language models." },
        { title: "robotics", text: "sensors, control and autonomous systems." },
        { title: "ai ethics", text: "building responsible and safe ai." },
      ],
    },
    facilities: {
      title: "our facilities",
      intro: "every room is a different experience. open a card to look inside.",
      rooms: [
        { title: "ai lab", text: "powerful workstations and a focused learning space.", equipment: ["high-performance pcs", "dual monitors", "fast internet", "interactive board"] },
        { title: "robotics room", text: "where prototypes are built and tested.", equipment: ["robotic arms", "humanoid platforms", "3d printers", "electronics tools"] },
        { title: "gpu cluster room", text: "compute power for training large models.", equipment: ["nvidia gpu servers", "high-speed network", "cooling system"] },
        { title: "collaboration space", text: "an open place where ideas are born.", equipment: ["large whiteboards", "flexible desks", "video call equipment"] },
      ],
    },
    vision: {
      title: "the future is the world you build",
      lines: [
        "ai is not just a technology, it is a new way of thinking.",
        "tomorrow's doctors, engineers and researchers will all work with ai.",
        "you are at the start of that path. take the first step today.",
      ],
    },
    testimonials: {
      title: "what people say",
      items: [
        { quote: "this program gives students more than knowledge — it gives them confidence in their future.", name: "Dilshod Karimov", role: "faculty dean" },
        { quote: "we are ready to hire graduates. the demand for ai talent is huge.", name: "Madina Rahimova", role: "head of an it company" },
        { quote: "the practice and the labs are the strongest part of studying here.", name: "Jasur Tursunov", role: "second-year student" },
      ],
    },
    apply: {
      title: "apply now",
      intro: "a few short steps and we will get back to you soon.",
      name: "full name",
      email: "email",
      phone: "phone number",
      language: "preferred language",
      message: "additional message",
      submit: "send",
      sending: "sending...",
      success: "thank you!",
      successText: "your application was received. we will contact you soon.",
      error: "something went wrong. please try again.",
      consent: "your data will only be used for the admission process.",
    },
    footer: { contact: "contact", address: "address", rights: "all rights reserved." },
  },
  ru: {
    nav: { about: "о программе", careers: "профессии", facilities: "лаборатории", vision: "будущее", apply: "подать заявку" },
    hero: {
      eyebrow: "новое направление · искусственный интеллект",
      title1: "искусственный интеллект",
      title2: "профессия будущего",
      subtitle: "соедините науку, воображение и язык машин, чтобы создавать завтрашний мир уже сегодня.",
      learn: "узнать больше",
      apply: "подать заявку",
    },
    why: {
      title: "почему это направление",
      intro: "ии уже вошёл в каждую сферу нашей жизни. вот лишь несколько примеров.",
      motto: "будущее принадлежит тем, кто умеет его строить.",
      cards: [
        { title: "медицина", text: "ранняя диагностика и точные решения." },
        { title: "финансы", text: "умная оценка рисков и торговые системы." },
        { title: "образование", text: "персональный путь обучения для каждого." },
        { title: "транспорт", text: "автономное вождение и умная логистика." },
        { title: "наука", text: "открытие новых материалов и лекарств." },
      ],
    },
    careers: {
      title: "кем вы сможете стать",
      intro: "каждая карточка — отдельный путь. нажмите, чтобы узнать больше.",
      roles: [
        { title: "инженер ии", short: "создаёт умные продукты", details: "разрабатывает и внедряет промышленные системы искусственного интеллекта.", tools: "python · pytorch · docker" },
        { title: "data scientist", short: "находит смысл в числах", details: "превращает данные в бизнес-инсайты и прогнозы.", tools: "python · sql · pandas" },
        { title: "ml-инженер", short: "обучает и настраивает модели", details: "обеспечивает точность, скорость и надёжность моделей в продакшене.", tools: "tensorflow · mlflow · kubernetes" },
        { title: "инженер робототехники", short: "оживляет машины", details: "соединяет датчики, управление и ии для создания роботов.", tools: "ros · c++ · sensor fusion" },
        { title: "инженер компьютерного зрения", short: "учит машины видеть", details: "строит системы анализа изображений и видео в реальном времени.", tools: "opencv · yolo · cuda" },
        { title: "nlp-инженер", short: "учит машины понимать язык", details: "разрабатывает чат-ботов, перевод и анализ текста с языковыми моделями.", tools: "transformers · llm · rag" },
      ],
    },
    curriculum: {
      title: "что вы будете изучать",
      intro: "крепкая база, современные технологии и практика.",
      items: [
        { title: "основы математики", text: "линейная алгебра, вероятности, статистика." },
        { title: "программирование", text: "python, структуры данных, алгоритмы." },
        { title: "машинное обучение", text: "от классики до современных методов." },
        { title: "глубокое обучение", text: "нейронные сети и трансформеры." },
        { title: "компьютерное зрение", text: "анализ изображений и видео." },
        { title: "обработка языка", text: "текст, речь и большие языковые модели." },
        { title: "робототехника", text: "датчики, управление и автономные системы." },
        { title: "этика ии", text: "создание ответственного и безопасного ии." },
      ],
    },
    facilities: {
      title: "наши лаборатории",
      intro: "каждая комната — отдельный опыт. откройте карточку и загляните внутрь.",
      rooms: [
        { title: "лаборатория ии", text: "мощные рабочие станции и удобное пространство для учёбы.", equipment: ["производительные пк", "по два монитора", "быстрый интернет", "интерактивная доска"] },
        { title: "комната робототехники", text: "здесь собирают и тестируют прототипы.", equipment: ["роботизированные руки", "гуманоидные платформы", "3d-принтеры", "электронные инструменты"] },
        { title: "gpu-кластер", text: "вычислительная мощность для обучения больших моделей.", equipment: ["серверы nvidia gpu", "быстрая сеть", "система охлаждения"] },
        { title: "пространство для совместной работы", text: "открытое место, где рождаются идеи.", equipment: ["большие доски", "гибкие столы", "оборудование для видеосвязи"] },
      ],
    },
    vision: {
      title: "будущее — это мир, который строите вы",
      lines: [
        "ии — это не просто технология, это новый способ мышления.",
        "врачи, инженеры и исследователи завтрашнего дня будут работать с ии.",
        "вы стоите в начале этого пути. сделайте первый шаг сегодня.",
      ],
    },
    testimonials: {
      title: "что говорят люди",
      items: [
        { quote: "программа даёт студентам не только знания, но и уверенность в будущем.", name: "Дильшод Каримов", role: "декан факультета" },
        { quote: "мы готовы брать выпускников на работу. спрос на специалистов огромный.", name: "Мадина Рахимова", role: "руководитель ит-компании" },
        { quote: "практика и лаборатории — самое сильное здесь.", name: "Джасур Турсунов", role: "студент второго курса" },
      ],
    },
    apply: {
      title: "подать заявку",
      intro: "несколько коротких шагов — и мы скоро свяжемся с вами.",
      name: "полное имя",
      email: "электронная почта",
      phone: "номер телефона",
      language: "язык обучения",
      message: "дополнительное сообщение",
      submit: "отправить",
      sending: "отправка...",
      success: "спасибо!",
      successText: "ваша заявка получена. мы свяжемся с вами в ближайшее время.",
      error: "что-то пошло не так. пожалуйста, попробуйте снова.",
      consent: "ваши данные будут использованы только для процесса приёма.",
    },
    footer: { contact: "контакты", address: "адрес", rights: "все права защищены." },
  },
};
