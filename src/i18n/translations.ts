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
    nav: { about: "Yo'nalish haqida", careers: "Kasblar", facilities: "Imkoniyatlar", vision: "Kelajak", apply: "Ariza topshirish" },
    hero: {
      eyebrow: "Yangi yo'nalish · Sun'iy intellekt",
      title1: "Su'niy intellekt",
      title2: "Kelajak kasbi",
      subtitle: "Ilm, tasavvur va mashinalar tilini birlashtirib, ertangi dunyoni bugun loyihalang.",
      learn: "Batafsil",
      apply: "Ariza topshirish",
    },
    why: {
      title: "Nega aynan shu yo'nalish?",
      intro: "Sun'iy intellekt allaqachon hayotimizning har bir sohasiga kirib keldi. Mana faqat bir nechta misol.",
      motto: "Kelajak — bu kim uni qura olsa, o'shaning qo'lida.",
      cards: [
        { title: "Tibbiyot", text: "Kasalliklarni erta aniqlash va aniq tashxis qo'yish." },
        { title: "Moliya", text: "Xavf-xatarlarni baholash va aqlli savdo tizimlari." },
        { title: "Ta'lim", text: "Har bir o'quvchi uchun shaxsiy ta'lim yo'lakchasi." },
        { title: "Transport", text: "Avtonom haydash va aqlli logistika tarmoqlari." },
        { title: "Ilm-fan", text: "Yangi materiallar va dorilarni kashf etish." },
      ],
    },
    careers: {
      title: "Tamomlagandan so'ng siz kim bo'lasiz",
      intro: "Har bir karta — alohida yo'l. Ustiga bosing va batafsilini ko'ring.",
      roles: [
        { title: "AI muhandisi", short: "Aqlli mahsulotlarni loyihalaydi", details: "Ishlab chiqarishga tayyor sun'iy intellekt tizimlarini yaratadi va integratsiya qiladi.", tools: "Python · PyTorch · Docker" },
        { title: "Ma'lumotlar olimi", short: "Raqamlardan ma'no topadi", details: "Katta hajmdagi ma'lumotlardan biznes qarorlari uchun foydali xulosalar chiqaradi.", tools: "Python · SQL · Pandas" },
        { title: "Mashinaviy o'qitish muhandisi", short: "Modellarni o'rgatadi va sozlaydi", details: "Modellarning aniqligi, tezligi va barqarorligini ta'minlaydi.", tools: "TensorFlow · MLflow · Kubernetes" },
        { title: "Robotexnika muhandisi", short: "Mashinalarga harakat beradi", details: "Sezgirlar, boshqaruv va sun'iy intellektni birlashtirib, robotlarni yaratadi.", tools: "ROS · C++ · Sensor Fusion" },
        { title: "Kompyuter ko'rishi muhandisi", short: "Mashinalarni ko'rishga o'rgatadi", details: "Video va tasvirlarni real vaqtda tahlil qiladigan tizimlar quradi.", tools: "OpenCV · YOLO · CUDA" },
        { title: "Tabiiy til muhandisi", short: "Matn va nutqni tushuntiradi", details: "Chatbotlar, tarjima va kontent tahlili uchun til modellarini ishlab chiqadi.", tools: "Transformers · LLM · RAG" },
      ],
    },
    curriculum: {
      title: "O'qiladigan asosiy fanlar",
      intro: "Mustahkam poydevor, zamonaviy texnologiyalar va amaliyot.",
      items: [
        { title: "Matematika asoslari", text: "Chiziqli algebra, ehtimollar, statistika." },
        { title: "Dasturlash", text: "Python, ma'lumotlar tuzilmalari, algoritmlar." },
        { title: "Mashinaviy o'qitish", text: "Klassik modellardan zamonaviy uslublargacha." },
        { title: "Chuqur o'qitish", text: "Neyron tarmoqlari, transformerlar." },
        { title: "Kompyuter ko'rishi", text: "Tasvir va videolarni tahlil qilish." },
        { title: "Tabiiy tilni qayta ishlash", text: "Matn, nutq va katta til modellari." },
        { title: "Robotexnika", text: "Sensorlar, boshqaruv va avtonom tizimlar." },
        { title: "AI etikasi", text: "Mas'uliyatli va xavfsiz AI yaratish." },
      ],
    },
    facilities: {
      title: "Bizning laboratoriyalar",
      intro: "Har bir xona — alohida tajriba. Kartani bosing va ichkariga qarang.",
      rooms: [
        { title: "AI laboratoriyasi", text: "Kuchli ish stantsiyalari va o'quv muhiti.", equipment: ["Yuqori unumli kompyuterlar", "Ikkitadan monitor", "Tezkor internet", "Interaktiv doska"] },
        { title: "Robotexnika xonasi", text: "Robot prototiplarini yig'ish va sinash.", equipment: ["Robot qo'llari", "Humanoid platformalar", "3D printerlar", "Elektron asboblar"] },
        { title: "GPU klaster xonasi", text: "Katta modellarni o'rgatish uchun hisoblash quvvati.", equipment: ["NVIDIA GPU serverlar", "Yuqori tezlikdagi tarmoq", "Sovutish tizimi"] },
        { title: "Hamkorlik maydoni", text: "G'oyalar tug'iladigan ochiq makon.", equipment: ["Katta doskalar", "Moslashuvchan stollar", "Video qo'ng'iroq jihozlari"] },
      ],
    },
    vision: {
      title: "Kelajak — siz quradigan dunyo",
      lines: [
        "Sun'iy intellekt — bu nafaqat texnologiya, balki yangi tafakkur usuli.",
        "Ertangi shifokor, muhandis va tadqiqotchi — bularning barchasi AI bilan ishlaydi.",
        "Siz shu yo'lning boshida turibsiz. Birinchi qadamni bugun qo'ying.",
      ],
    },
    testimonials: {
      title: "Dunyoning eng yaxshi aqllar nima deyishadi",
      items: [
        { quote: "Sun'iy intellekt — bu inson tarixidagi eng muhim kashfiyotlardan biri. U hamma narsani o'zgartiradi.", name: "Elon Musk", role: "Tesla va SpaceX asoschisi" },
        { quote: "AI — bu elektr energiyasiga o'xshaydi: u hamma sohani tubdan o'zgartirib yuboradi.", name: "Andrew Ng", role: "DeepLearning.AI asoschisi, Stanford professori" },
        { quote: "Biz neyron tarmoqlarning qanday ishlashini hali to'liq tushunmaymiz, ammo ular insoniyatni o'zgartirmoqda.", name: "Geoffrey Hinton", role: "Tyuring mukofoti laureati, «AI otasi»" },
        { quote: "AI — bu insoniyat kelajagi. Undan qo'rqmaslik kerak, balki uni boshqarishni o'rganish kerak.", name: "Yann LeCun", role: "Meta AI bosh olimi, Tyuring mukofoti laureati" },
        { quote: "DeepMind maqsadi — inson aqli qiladigan har bir ishni kompyuterda amalga oshirish.", name: "Demis Hassabis", role: "Google DeepMind asoschisi va bosh direktori" },
        { quote: "Neyron tarmoqlarni o'rganish — bu oddiy muhandislik emas, bu yangi dunyo kashfiyotidir.", name: "Andrej Karpathy", role: "Tesla AI sobiq rahbari, OpenAI tadqiqotchisi" },
      ],
    },
    apply: {
      title: "Ariza topshirish",
      intro: "Bir necha qadamda biz bilan bog'laning. Tez orada javob beramiz.",
      name: "To'liq ism",
      email: "Elektron pochta",
      phone: "Telefon raqami",
      language: "Ta'lim tili",
      message: "Qo'shimcha xabar",
      submit: "Yuborish",
      sending: "Yuborilmoqda...",
      success: "Rahmat!",
      successText: "Arizangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.",
      error: "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
      consent: "Ma'lumotlaringiz faqat qabul jarayoni uchun ishlatiladi.",
    },
    footer: { contact: "Bog'lanish", address: "Manzil", rights: "Barcha huquqlar himoyalangan." },
  },
  en: {
    nav: { about: "About", careers: "Careers", facilities: "Facilities", vision: "Vision", apply: "Apply" },
    hero: {
      eyebrow: "New program · Artificial intelligence",
      title1: "Artificial intelligence",
      title2: "The field of the future",
      subtitle: "Join science, imagination and the language of machines to design tomorrow's world today.",
      learn: "Learn more",
      apply: "Apply now",
    },
    why: {
      title: "Why this program",
      intro: "AI is already part of every part of our lives. Here are just a few examples.",
      motto: "The future belongs to those who can build it.",
      cards: [
        { title: "Healthcare", text: "Early detection and more accurate diagnoses." },
        { title: "Finance", text: "Smart risk scoring and trading systems." },
        { title: "Education", text: "A personal learning path for every student." },
        { title: "Transport", text: "Autonomous driving and smart logistics." },
        { title: "Science", text: "Discovering new materials and medicines." },
      ],
    },
    careers: {
      title: "Who you can become after graduation",
      intro: "Each card is a different path. Tap to see more.",
      roles: [
        { title: "AI engineer", short: "Designs intelligent products", details: "Builds and ships production-grade AI systems end to end.", tools: "Python · PyTorch · Docker" },
        { title: "Data scientist", short: "Finds meaning in numbers", details: "Turns data into business insights and predictions.", tools: "Python · SQL · Pandas" },
        { title: "Machine learning engineer", short: "Trains and tunes models", details: "Ensures models are accurate, fast and reliable in production.", tools: "TensorFlow · MLflow · Kubernetes" },
        { title: "Robotics engineer", short: "Gives motion to machines", details: "Combines sensors, control and AI to build robots.", tools: "ROS · C++ · Sensor Fusion" },
        { title: "Computer vision engineer", short: "Teaches machines to see", details: "Builds systems that understand images and video in real time.", tools: "OpenCV · YOLO · CUDA" },
        { title: "NLP engineer", short: "Makes machines understand language", details: "Builds chatbots, translation and content systems with language models.", tools: "Transformers · LLM · RAG" },
      ],
    },
    curriculum: {
      title: "What you will study",
      intro: "Strong foundations, modern tools, and hands-on practice.",
      items: [
        { title: "Math foundations", text: "Linear algebra, probability, statistics." },
        { title: "Programming", text: "Python, data structures, algorithms." },
        { title: "Machine learning", text: "From classical models to modern methods." },
        { title: "Deep learning", text: "Neural networks and transformers." },
        { title: "Computer vision", text: "Analyzing images and video." },
        { title: "Natural language", text: "Text, speech and large language models." },
        { title: "Robotics", text: "Sensors, control and autonomous systems." },
        { title: "AI ethics", text: "Building responsible and safe AI." },
      ],
    },
    facilities: {
      title: "Our facilities",
      intro: "Every room is a different experience. Open a card to look inside.",
      rooms: [
        { title: "AI lab", text: "Powerful workstations and a focused learning space.", equipment: ["High-performance PCs", "Dual monitors", "Fast internet", "Interactive board"] },
        { title: "Robotics room", text: "Where prototypes are built and tested.", equipment: ["Robotic arms", "Humanoid platforms", "3D printers", "Electronics tools"] },
        { title: "GPU cluster room", text: "Compute power for training large models.", equipment: ["NVIDIA GPU servers", "High-speed network", "Cooling system"] },
        { title: "Collaboration space", text: "An open place where ideas are born.", equipment: ["Large whiteboards", "Flexible desks", "Video call equipment"] },
      ],
    },
    vision: {
      title: "The future is the world you build",
      lines: [
        "AI is not just a technology, it is a new way of thinking.",
        "Tomorrow's doctors, engineers and researchers will all work with AI.",
        "You are at the start of that path. Take the first step today.",
      ],
    },
    testimonials: {
      title: "What the world's greatest minds say",
      items: [
        { quote: "AI is one of the most important inventions in human history. It will change everything.", name: "Elon Musk", role: "Founder of Tesla & SpaceX" },
        { quote: "AI is the new electricity. Just as electricity transformed industries a century ago, AI will now do the same.", name: "Andrew Ng", role: "Founder of DeepLearning.AI, Stanford Professor" },
        { quote: "We don't fully understand how neural networks work, yet they are already transforming humanity.", name: "Geoffrey Hinton", role: "Turing Award Laureate, 'Godfather of AI'" },
        { quote: "AI is the future of humanity. We should not fear it, but learn to guide it.", name: "Yann LeCun", role: "Chief AI Scientist at Meta, Turing Award Laureate" },
        { quote: "DeepMind's goal is to solve intelligence — then use that to solve everything else.", name: "Demis Hassabis", role: "Co-founder & CEO of Google DeepMind" },
        { quote: "Studying neural networks is not just engineering — it is the discovery of a new world.", name: "Andrej Karpathy", role: "Former Head of Tesla AI, OpenAI researcher" },
      ],
    },
    apply: {
      title: "Apply now",
      intro: "A few short steps and we will get back to you soon.",
      name: "Full name",
      email: "Email",
      phone: "Phone number",
      language: "Preferred language",
      message: "Additional message",
      submit: "Send",
      sending: "Sending...",
      success: "Thank you!",
      successText: "Your application was received. We will contact you soon.",
      error: "Something went wrong. Please try again.",
      consent: "Your data will only be used for the admission process.",
    },
    footer: { contact: "Contact", address: "Address", rights: "All rights reserved." },
  },
  ru: {
    nav: { about: "О программе", careers: "Профессии", facilities: "Лаборатории", vision: "Будущее", apply: "Подать заявку" },
    hero: {
      eyebrow: "Новое направление · Искусственный интеллект",
      title1: "Искусственный интеллект",
      title2: "Профессия будущего",
      subtitle: "Соедините науку, воображение и язык машин, чтобы создавать завтрашний мир уже сегодня.",
      learn: "Узнать больше",
      apply: "Подать заявку",
    },
    why: {
      title: "Почему это направление",
      intro: "ИИ уже вошёл в каждую сферу нашей жизни. Вот лишь несколько примеров.",
      motto: "Будущее принадлежит тем, кто умеет его строить.",
      cards: [
        { title: "Медицина", text: "Ранняя диагностика и точные решения." },
        { title: "Финансы", text: "Умная оценка рисков и торговые системы." },
        { title: "Образование", text: "Персональный путь обучения для каждого." },
        { title: "Транспорт", text: "Автономное вождение и умная логистика." },
        { title: "Наука", text: "Открытие новых материалов и лекарств." },
      ],
    },
    careers: {
      title: "Кем вы сможете стать",
      intro: "Каждая карточка — отдельный путь. Нажмите, чтобы узнать больше.",
      roles: [
        { title: "Инженер ИИ", short: "Создаёт умные продукты", details: "Разрабатывает и внедряет промышленные системы искусственного интеллекта.", tools: "Python · PyTorch · Docker" },
        { title: "Data scientist", short: "Находит смысл в числах", details: "Превращает данные в бизнес-инсайты и прогнозы.", tools: "Python · SQL · Pandas" },
        { title: "ML-инженер", short: "Обучает и настраивает модели", details: "Обеспечивает точность, скорость и надёжность моделей в продакшене.", tools: "TensorFlow · MLflow · Kubernetes" },
        { title: "Инженер робототехники", short: "Оживляет машины", details: "Соединяет датчики, управление и ИИ для создания роботов.", tools: "ROS · C++ · Sensor Fusion" },
        { title: "Инженер компьютерного зрения", short: "Учит машины видеть", details: "Строит системы анализа изображений и видео в реальном времени.", tools: "OpenCV · YOLO · CUDA" },
        { title: "NLP-инженер", short: "Учит машины понимать язык", details: "Разрабатывает чат-ботов, перевод и анализ текста с языковыми моделями.", tools: "Transformers · LLM · RAG" },
      ],
    },
    curriculum: {
      title: "Что вы будете изучать",
      intro: "Крепкая база, современные технологии и практика.",
      items: [
        { title: "Основы математики", text: "Линейная алгебра, вероятности, статистика." },
        { title: "Программирование", text: "Python, структуры данных, алгоритмы." },
        { title: "Машинное обучение", text: "От классики до современных методов." },
        { title: "Глубокое обучение", text: "Нейронные сети и трансформеры." },
        { title: "Компьютерное зрение", text: "Анализ изображений и видео." },
        { title: "Обработка языка", text: "Текст, речь и большие языковые модели." },
        { title: "Робототехника", text: "Датчики, управление и автономные системы." },
        { title: "Этика ИИ", text: "Создание ответственного и безопасного ИИ." },
      ],
    },
    facilities: {
      title: "Наши лаборатории",
      intro: "Каждая комната — отдельный опыт. Откройте карточку и загляните внутрь.",
      rooms: [
        { title: "Лаборатория ИИ", text: "Мощные рабочие станции и удобное пространство для учёбы.", equipment: ["Производительные ПК", "По два монитора", "Быстрый интернет", "Интерактивная доска"] },
        { title: "Комната робототехники", text: "Здесь собирают и тестируют прототипы.", equipment: ["Роботизированные руки", "Гуманоидные платформы", "3D-принтеры", "Электронные инструменты"] },
        { title: "GPU-кластер", text: "Вычислительная мощность для обучения больших моделей.", equipment: ["Серверы NVIDIA GPU", "Быстрая сеть", "Система охлаждения"] },
        { title: "Пространство для совместной работы", text: "Открытое место, где рождаются идеи.", equipment: ["Большие доски", "Гибкие столы", "Оборудование для видеосвязи"] },
      ],
    },
    vision: {
      title: "Будущее — это мир, который строите вы",
      lines: [
        "ИИ — это не просто технология, это новый способ мышления.",
        "Врачи, инженеры и исследователи завтрашнего дня будут работать с ИИ.",
        "Вы стоите в начале этого пути. Сделайте первый шаг сегодня.",
      ],
    },
    testimonials: {
      title: "Что говорят великие умы мира",
      items: [
        { quote: "ИИ — одно из самых важных изобретений в истории человечества. Он изменит всё.", name: "Элон Маск", role: "Основатель Tesla и SpaceX" },
        { quote: "ИИ — это новое электричество. Как электричество изменило промышленность век назад, ИИ делает это сейчас.", name: "Эндрю Ын", role: "Основатель DeepLearning.AI, профессор Стэнфорда" },
        { quote: "Мы ещё не до конца понимаем, как работают нейросети, но они уже меняют человечество.", name: "Джеффри Хинтон", role: "Лауреат премии Тьюринга, «отец ИИ»" },
        { quote: "ИИ — это будущее человечества. Его не нужно бояться, нужно научиться им управлять.", name: "Янн ЛеКун", role: "Главный учёный Meta AI, лауреат премии Тьюринга" },
        { quote: "Цель DeepMind — решить задачу интеллекта, а затем использовать это для решения всего остального.", name: "Демис Хассабис", role: "Сооснователь и CEO Google DeepMind" },
        { quote: "Изучение нейросетей — это не просто инженерия, это открытие нового мира.", name: "Андрей Карпатий", role: "Бывший глава Tesla AI, исследователь OpenAI" },
      ],
    },
    apply: {
      title: "Подать заявку",
      intro: "Несколько коротких шагов — и мы скоро свяжемся с вами.",
      name: "Полное имя",
      email: "Электронная почта",
      phone: "Номер телефона",
      language: "Язык обучения",
      message: "Дополнительное сообщение",
      submit: "Отправить",
      sending: "Отправка...",
      success: "Спасибо!",
      successText: "Ваша заявка получена. Мы свяжемся с вами в ближайшее время.",
      error: "Что-то пошло не так. Пожалуйста, попробуйте снова.",
      consent: "Ваши данные будут использованы только для процесса приёма.",
    },
    footer: { contact: "Контакты", address: "Адрес", rights: "Все права защищены." },
  },
};
