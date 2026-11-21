import { IMAGES } from "./images";

export const en = {
  ui: {
    bookNow: "Book Now",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    language: "Language",
    previous: "Previous",
    next: "Next",
    close: "Close",
    backToTop: "Back to top",
    popular: "Most popular",
    perMonth: "/month",
    pricesNote: "Illustrative prices — replace with your real rates.",
    demoNoticeTitle: "Demo mode",
    learnMore: "Learn more",
    minRead: "min",
  },
  nav: [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "why-us", label: "Why Us" },
    { id: "membership", label: "Membership" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ],
  hero: {
    badge: "Premium car care studio",
    line1: "YOUR CAR.",
    line2: "OUR PASSION.",
    line3: "PERFECTION.",
    subtitle:
      "Experience the next level of car care. Premium washing, professional detailing, and a shine that speaks for itself.",
    primary: "Book your wash",
    secondary: "Explore services",
    trust: ["Premium Car Care", "Professional Team", "Quality Guaranteed"],
    scroll: "Scroll to explore",
  },
  stats: [
    { value: 5000, suffix: "+", label: "Happy Customers" },
    { value: 10000, suffix: "+", label: "Cars Cleaned" },
    { value: 5, suffix: "+", label: "Years of Experience" },
    { value: 100, suffix: "%", label: "Care & Quality" },
  ],
  services: {
    eyebrow: "What we do",
    title: "Our premium services",
    subtitle: "Everything your car needs to look its absolute best.",
    explore: "Explore service",
    items: [
      {
        id: "exterior",
        title: "Exterior Wash",
        description:
          "Professional exterior cleaning to restore your car's shine.",
        price: "From $25",
        duration: "30–45 min",
        image: IMAGES.exterior,
      },
      {
        id: "interior",
        title: "Interior Cleaning",
        description:
          "Deep cleaning for seats, carpets, dashboard, and interior surfaces.",
        price: "From $45",
        duration: "1–2 hours",
        image: IMAGES.interior,
      },
      {
        id: "detailing",
        title: "Full Detailing",
        description:
          "Complete interior and exterior detailing for a premium finish.",
        price: "From $120",
        duration: "3–5 hours",
        image: IMAGES.detailing,
      },
      {
        id: "engine",
        title: "Engine Cleaning",
        description:
          "Careful engine bay cleaning using professional techniques.",
        price: "From $60",
        duration: "1 hour",
        image: IMAGES.engine,
      },
      {
        id: "wax",
        title: "Wax & Polish",
        description:
          "Enhance paint shine and protect your vehicle's exterior.",
        price: "From $55",
        duration: "1.5 hours",
        image: IMAGES.wax,
      },
      {
        id: "ceramic",
        title: "Ceramic Coating",
        description:
          "Advanced paint protection with a long-lasting glossy finish.",
        price: "From $350",
        duration: "1 day",
        image: IMAGES.ceramic,
      },
    ],
  },
  why: {
    eyebrow: "Why Shark Clean",
    titleLine1: "More than a car wash.",
    titleLine2: "It's car care.",
    description:
      "We combine meticulous handwork, premium products, and modern technology to give every vehicle the attention it deserves. Because the details are everything.",
    image: IMAGES.why,
    badgeValue: "5+",
    badgeLabel: "Years of hands-on experience",
    features: [
      {
        title: "Premium Quality",
        description: "Professional products and equipment.",
      },
      {
        title: "Expert Team",
        description: "Experienced professionals who care about every detail.",
      },
      {
        title: "Modern Equipment",
        description: "Advanced cleaning technology for better results.",
      },
      {
        title: "Customer Satisfaction",
        description: "We treat every vehicle like our own.",
      },
    ],
  },
  steps: {
    eyebrow: "How it works",
    title: "Your perfect shine in 3 simple steps",
    subtitle: "A seamless experience from the first click to the final wipe.",
    items: [
      {
        number: "01",
        title: "Choose Your Service",
        description: "Select the cleaning package that matches your needs.",
      },
      {
        number: "02",
        title: "Visit Our Center",
        description: "Bring your vehicle to our professional car wash center.",
      },
      {
        number: "03",
        title: "Enjoy the Shine",
        description: "Drive away with a spotless, refreshed vehicle.",
      },
    ],
  },
  pricing: {
    eyebrow: "Membership",
    title: "The smarter way to keep your car clean",
    subtitle:
      "Join the Shark Clean club and enjoy a consistently immaculate vehicle.",
    plans: [
      {
        id: "basic",
        name: "Basic",
        price: "$29",
        description: "Essential care, always ready.",
        features: [
          "Exterior Wash",
          "Interior Vacuum",
          "Dashboard Cleaning",
          "Standard Service",
        ],
      },
      {
        id: "silver",
        name: "Silver",
        price: "$59",
        description: "Our most popular balance of care and value.",
        features: [
          "Everything in Basic",
          "Premium Interior Cleaning",
          "Wax Protection",
          "Priority Service",
        ],
      },
      {
        id: "gold",
        name: "Gold",
        price: "$99",
        description: "The complete Shark Clean experience.",
        features: [
          "Everything in Silver",
          "Full Detailing Benefits",
          "Premium Paint Protection",
          "Exclusive Offers",
        ],
      },
    ],
    choose: "Choose plan",
  },
  gallery: {
    eyebrow: "Our gallery",
    title: "The Shark Clean experience",
    subtitle: "A closer look at the craft, care, and shine behind every visit.",
    items: [
      { title: "Foam wash in progress", image: IMAGES.galleryFoam },
      { title: "Snow foam texture", image: IMAGES.galleryBubbles },
      { title: "Interior detailing", image: IMAGES.galleryInterior },
      { title: "Machine polishing", image: IMAGES.galleryPolish },
      { title: "Professional hand wash", image: IMAGES.galleryTeam },
      { title: "Wax & shine", image: IMAGES.galleryWax },
    ],
    open: "Open image",
    counter: "Image",
    hint: "Use arrow keys to navigate",
  },
  compare: {
    eyebrow: "Before & after",
    title: "See the transformation",
    subtitle:
      "Drag the slider to reveal what professional care can do. Same car, remarkable difference.",
    before: "Before",
    after: "After",
    hint: "Drag to compare",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What our customers say",
    subtitle: "Real words from drivers who expect nothing but the best.",
    items: [
      {
        name: "Daniel R.",
        role: "Full Detailing customer",
        quote:
          "The attention to detail is unreal. My car came back looking better than the day I bought it, and the team was professional from start to finish.",
        image: IMAGES.avatar1,
      },
      {
        name: "Sarah M.",
        role: "Monthly member",
        quote:
          "I have tried many car washes, but Shark Clean is in a different league. Reliable, fast, and the finish is consistently flawless.",
        image: IMAGES.avatar2,
      },
      {
        name: "Omar K.",
        role: "Ceramic Coating customer",
        quote:
          "The ceramic coating completely transformed the paint. The water beads off perfectly and the gloss is incredible. Worth every penny.",
        image: IMAGES.avatar3,
      },
      {
        name: "Lina T.",
        role: "Interior Cleaning customer",
        quote:
          "They removed stains I thought were permanent. The interior smells fresh and looks spotless. I would never go anywhere else.",
        image: IMAGES.avatar4,
      },
    ],
  },
  faq: {
    eyebrow: "Good to know",
    title: "Frequently asked questions",
    subtitle: "Everything you may want to know before your visit.",
    items: [
      {
        question: "What services does Shark Clean offer?",
        answer:
          "We offer exterior washes, deep interior cleaning, full detailing, engine bay cleaning, wax and polish, and ceramic coating. Every service can be tailored to your vehicle.",
      },
      {
        question: "How long does a car wash take?",
        answer:
          "A standard exterior wash takes about 30 to 45 minutes. Interior cleaning and detailing take longer depending on the condition of your vehicle and the package you choose.",
      },
      {
        question: "Do I need an appointment?",
        answer:
          "Walk-ins are welcome when capacity allows, but we recommend sending a booking request so we can reserve a slot and give your car the time it deserves.",
      },
      {
        question: "What is included in full detailing?",
        answer:
          "Full detailing combines a thorough exterior wash and paint care with deep interior cleaning, carpet and seat treatment, dashboard care, and finishing touches inside and out.",
      },
      {
        question: "Do you offer monthly memberships?",
        answer:
          "Yes. Our Basic, Silver, and Gold memberships are designed for regular care, with priority scheduling and exclusive benefits on higher tiers.",
      },
      {
        question: "Where is Shark Clean located?",
        answer:
          "Add your real address in the contact section. The current address shown on this page is a clearly marked placeholder for launch preparation.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact & booking",
    title: "Ready to give your car the shine it deserves?",
    description:
      "Send us a booking request and our team will get back to you to confirm your appointment. No payment required at this stage.",
    formTitle: "Booking request",
    fields: {
      name: "Full name",
      phone: "Phone number",
      vehicle: "Vehicle type",
      service: "Selected service",
      date: "Preferred date",
      notes: "Additional notes",
    },
    placeholders: {
      name: "e.g. Alex Morgan",
      phone: "+1 555 000 1234",
      vehicle: "Select vehicle type",
      service: "Select a service",
      notes: "Tell us anything we should know...",
    },
    vehicleOptions: ["Sedan", "SUV", "Hatchback", "Sports car", "Van", "Other"],
    serviceOptions: [
      "Exterior Wash",
      "Interior Cleaning",
      "Full Detailing",
      "Engine Cleaning",
      "Wax & Polish",
      "Ceramic Coating",
      "Not sure yet",
    ],
    submit: "Request a booking",
    successTitle: "Request sent!",
    successText:
      "Thanks! Your demo request passed validation. Connect a backend when you are ready to receive real bookings.",
    infoTitle: "Talk to our team",
    infoText:
      "Prefer to chat first? Reach out and we will help you choose the right package.",
    phoneLabel: "Phone",
    phoneValue: "[Your phone number — placeholder]",
    emailLabel: "Email",
    emailValue: "hello@sharkclean.example",
    addressLabel: "Visit us",
    addressValue: "[Your street address, city — placeholder]",
    hoursLabel: "Opening hours",
    hoursValue: "Mon–Sat: 9:00 AM – 7:00 PM [placeholder]",
    whatsapp: "Chat on WhatsApp",
    whatsappNotice:
      "Add your WhatsApp number in src/data/site.ts to enable this link.",
    errors: {
      name: "Please enter your full name (at least 2 characters).",
      phone: "Please enter a valid phone number (7–15 digits).",
      vehicle: "Please select your vehicle type.",
      service: "Please select a service.",
      date: "Please choose a preferred date.",
    },
  },
  footer: {
    description:
      "Premium car wash and auto detailing for drivers who expect more. Precision, care, and a finish that speaks for itself.",
    navigation: "Navigation",
    services: "Services",
    contact: "Contact",
    hours: "Hours",
    rights: "All rights reserved.",
    note: "Demo website — replace placeholder contact details before launch.",
    socialNotice: "Add your social profile URLs in src/data/site.ts.",
  },
  booking: {
    title: "Let's book your shine",
    subtitle: "Pick your service, then complete the quick request form.",
    selected: "Selected service",
    noService: "Not sure yet — help me choose",
    continue: "Continue to booking form",
    note: "No payment is taken on this website.",
  },
};

export type Content = typeof en;
export type Language = "en" | "ar";

export const ar: Content = {
  ui: {
    bookNow: "احجز الآن",
    openMenu: "افتح قائمة التنقل",
    closeMenu: "أغلق قائمة التنقل",
    language: "اللغة",
    previous: "السابق",
    next: "التالي",
    close: "إغلاق",
    backToTop: "العودة للأعلى",
    popular: "الأكثر شيوعاً",
    perMonth: "/شهرياً",
    pricesNote: "أسعار توضيحية — استبدلها بأسعارك الفعلية.",
    demoNoticeTitle: "وضع العرض",
    learnMore: "اعرف المزيد",
    minRead: "دقيقة",
  },
  nav: [
    { id: "home", label: "الرئيسية" },
    { id: "services", label: "الخدمات" },
    { id: "why-us", label: "لماذا نحن" },
    { id: "membership", label: "العضوية" },
    { id: "about", label: "من نحن" },
    { id: "contact", label: "تواصل معنا" },
  ],
  hero: {
    badge: "استوديو العناية الفاخرة بالسيارات",
    line1: "سيارتك.",
    line2: "شغفنا.",
    line3: "إتقان بلا حدود.",
    subtitle:
      "اختبر مستوى جديداً من العناية بسيارتك. غسيل فاخر، تلميح احترافي، ولمعان يتحدث عن نفسه.",
    primary: "احجز غسيلك",
    secondary: "استكشف الخدمات",
    trust: ["عناية فاخرة", "فريق محترف", "جودة مضمونة"],
    scroll: "مرر للاستكشاف",
  },
  stats: [
    { value: 5000, suffix: "+", label: "عميل سعيد" },
    { value: 10000, suffix: "+", label: "سيارة تم تنظيفها" },
    { value: 5, suffix: "+", label: "سنوات من الخبرة" },
    { value: 100, suffix: "%", label: "عناية وجودة" },
  ],
  services: {
    eyebrow: "ما نقدمه",
    title: "خدماتنا الفاخرة",
    subtitle: "كل ما تحتاجه سيارتك لتبدو بأفضل حالاتها.",
    explore: "استكشف الخدمة",
    items: [
      {
        id: "exterior",
        title: "غسيل خارجي",
        description: "تنظيف خارجي احترافي يعيد لسيارتك لمعانها.",
        price: "يبدأ من 25$",
        duration: "٣٠–٤٥ دقيقة",
        image: IMAGES.exterior,
      },
      {
        id: "interior",
        title: "تنظيف داخلي",
        description: "تنظيف عميق للمقاعد والسجاد ولوحة القيادة والأسطح الداخلية.",
        price: "يبدأ من 45$",
        duration: "١–٢ ساعة",
        image: IMAGES.interior,
      },
      {
        id: "detailing",
        title: "تلميح شامل",
        description: "تلميح داخلي وخارجي كامل للحصول على تشطيب فاخر.",
        price: "يبدأ من 120$",
        duration: "٣–٥ ساعات",
        image: IMAGES.detailing,
      },
      {
        id: "engine",
        title: "تنظيف المحرك",
        description: "تنظيف حجرة المحرك بعناية باستخدام تقنيات احترافية.",
        price: "يبدأ من 60$",
        duration: "١ ساعة",
        image: IMAGES.engine,
      },
      {
        id: "wax",
        title: "الشمع والتلميع",
        description: "تعزيز لمعان الطلاء وحماية الهيكل الخارجي لسيارتك.",
        price: "يبدأ من 55$",
        duration: "١٫٥ ساعة",
        image: IMAGES.wax,
      },
      {
        id: "ceramic",
        title: "الطلاء السيراميكي",
        description: "حماية متقدمة للطلاء مع لمعان يدوم طويلاً.",
        price: "يبدأ من 350$",
        duration: "يوم واحد",
        image: IMAGES.ceramic,
      },
    ],
  },
  why: {
    eyebrow: "لماذا شارك كلين",
    titleLine1: "أكثر من مجرد غسيل سيارات.",
    titleLine2: "إنها عناية حقيقية.",
    description:
      "نجمع بين الدقة اليدوية والمنتجات الفاخرة والتقنية الحديثة لنمنح كل سيارة العناية التي تستحقها. لأن التفاصيل تصنع الفرق.",
    image: IMAGES.why,
    badgeValue: "+٥",
    badgeLabel: "سنوات من الخبرة العملية",
    features: [
      { title: "جودة فاخرة", description: "منتجات ومعدات احترافية." },
      {
        title: "فريق خبير",
        description: "محترفون يهتمون بكل تفصيلة.",
      },
      {
        title: "معدات حديثة",
        description: "تقنيات تنظيف متقدمة لنتائج أفضل.",
      },
      {
        title: "رضا العملاء",
        description: "نعامل كل سيارة كأنها سيارتنا.",
      },
    ],
  },
  steps: {
    eyebrow: "كيف نعمل",
    title: "لمعانك المثالي في ٣ خطوات بسيطة",
    subtitle: "تجربة سلسة من النقرة الأولى حتى آخر مسحة.",
    items: [
      {
        number: "٠١",
        title: "اختر خدمتك",
        description: "اختر باقة التنظيف المناسبة لاحتياجاتك.",
      },
      {
        number: "٠٢",
        title: "زر مركزنا",
        description: "أحضر سيارتك إلى مركز الغسيل الاحترافي لدينا.",
      },
      {
        number: "٠٣",
        title: "استمتع باللمعان",
        description: "انطلق بسيارة نظيفة ومنعشة تماماً.",
      },
    ],
  },
  pricing: {
    eyebrow: "العضوية",
    title: "الطريقة الأذكى لإبقاء سيارتك نظيفة",
    subtitle: "انضم إلى نادي شارك كلين واستمتع بسيارة متألقة باستمرار.",
    plans: [
      {
        id: "basic",
        name: "الأساسية",
        price: "٢٩$",
        description: "عناية أساسية في كل الأوقات.",
        features: ["غسيل خارجي", "شفط داخلي", "تنظيف لوحة القيادة", "خدمة قياسية"],
      },
      {
        id: "silver",
        name: "الفضية",
        price: "٥٩$",
        description: "أفضل توازن بين العناية والقيمة.",
        features: [
          "كل ما في الأساسية",
          "تنظيف داخلي فاخر",
          "حماية بالشمع",
          "أولوية في الخدمة",
        ],
      },
      {
        id: "gold",
        name: "الذهبية",
        price: "٩٩$",
        description: "تجربة شارك كلين الكاملة.",
        features: [
          "كل ما في الفضية",
          "مزايا التلميح الشامل",
          "حماية فاخرة للطلاء",
          "عروض حصرية",
        ],
      },
    ],
    choose: "اختر الباقة",
  },
  gallery: {
    eyebrow: "معرض الصور",
    title: "تجربة شارك كلين",
    subtitle: "نظرة أقرب إلى الحرفية والعناية واللمعان وراء كل زيارة.",
    items: [
      { title: "غسيل بالرغوة", image: IMAGES.galleryFoam },
      { title: "رغوة كثيفة", image: IMAGES.galleryBubbles },
      { title: "تلميح داخلي", image: IMAGES.galleryInterior },
      { title: "تلميع آلي", image: IMAGES.galleryPolish },
      { title: "غسيل يدوي احترافي", image: IMAGES.galleryTeam },
      { title: "شمع ولمعان", image: IMAGES.galleryWax },
    ],
    open: "افتح الصورة",
    counter: "صورة",
    hint: "استخدم أسهم لوحة المفاتيح للتنقل",
  },
  compare: {
    eyebrow: "قبل وبعد",
    title: "شاهد التحول",
    subtitle: "اسحب المؤشر لترى ما تصنعه العناية الاحترافية. نفس السيارة، فرق مذهل.",
    before: "قبل",
    after: "بعد",
    hint: "اسحب للمقارنة",
  },
  testimonials: {
    eyebrow: "آراء العملاء",
    title: "ماذا يقول عملاؤنا",
    subtitle: "كلمات حقيقية من سائقين لا يقبلون إلا الأفضل.",
    items: [
      {
        name: "دانيال ر.",
        role: "عميل التلميح الشامل",
        quote:
          "الاهتمام بالتفاصيل مذهل. عادت سيارتي أجمل من يوم شرائها، والفريق كان محترفاً من البداية للنهاية.",
        image: IMAGES.avatar1,
      },
      {
        name: "سارة م.",
        role: "عضوة شهرية",
        quote:
          "جرّبت الكثير من مراكز غسيل السيارات، لكن شارك كلين في مستوى آخر. موثوق وسريع والنتيجة دائماً مثالية.",
        image: IMAGES.avatar2,
      },
      {
        name: "عمر ك.",
        role: "عميل الطلاء السيراميكي",
        quote:
          "الطلاء السيراميكي غيّر مظهر السيارة تماماً. الماء يتجمع بشكل مثالي واللمعان لا يُصدق. يستحق كل قرش.",
        image: IMAGES.avatar3,
      },
      {
        name: "لينا ت.",
        role: "عميلة التنظيف الداخلي",
        quote:
          "أزالوا بقعاً كنت أظنها مستحيلة. الداخلية نظيفة تماماً وتفوح منها رائحة منعشة. لن أذهب إلى مكان آخر.",
        image: IMAGES.avatar4,
      },
    ],
  },
  faq: {
    eyebrow: "معلومات مفيدة",
    title: "الأسئلة الشائعة",
    subtitle: "كل ما قد ترغب في معرفته قبل زيارتك.",
    items: [
      {
        question: "ما الخدمات التي يقدمها شارك كلين؟",
        answer:
          "نقدم غسيلاً خارجياً، تنظيفاً داخلياً عميقاً، تلميحاً شاملاً، تنظيف حجرة المحرك، شمعاً وتلميعاً، وطلاءً سيراميكياً. يمكن تخصيص كل خدمة حسب سيارتك.",
      },
      {
        question: "كم يستغرق غسيل السيارة؟",
        answer:
          "يستغرق الغسيل الخارجي العادي حوالي ٣٠ إلى ٤٥ دقيقة. يستغرق التنظيف الداخلي والتلميح وقتاً أطول حسب حالة السيارة والباقة المختارة.",
      },
      {
        question: "هل أحتاج إلى موعد مسبق؟",
        answer:
          "نرحب بالزيارات بدون موعد عندما تسمح الطاقة الاستيعابية، لكننا ننصح بإرسال طلب حجز لضمان وقت مناسب لسيارتك.",
      },
      {
        question: "ماذا يشمل التلميح الشامل؟",
        answer:
          "يجمع التلميح الشامل بين غسيل خارجي دقيق والعناية بالطلاء مع تنظيف داخلي عميق ومعالجة السجاد والمقاعد ولوحة القيادة ولمسات نهائية داخل وخارج السيارة.",
      },
      {
        question: "هل تقدمون اشتراكات شهرية؟",
        answer:
          "نعم. باقات الأساسية والفضية والذهبية مصممة للعناية المنتظمة، وتشمل أولوية في الحجز ومزايا حصرية في المستويات الأعلى.",
      },
      {
        question: "أين يقع شارك كلين؟",
        answer:
          "أضف عنوانك الحقيقي في قسم التواصل. العنوان المعروض حالياً في هذه الصفحة توضيحي ومُعلَّم بوضوح تحضيراً للإطلاق.",
      },
    ],
  },
  contact: {
    eyebrow: "تواصل وحجز",
    title: "هل أنت مستعد لمنح سيارتك اللمعان الذي تستحقه؟",
    description:
      "أرسل طلب حجز وسيعود إليك فريقنا لتأكيد موعدك. لا يوجد أي دفعة في هذه المرحلة.",
    formTitle: "طلب حجز",
    fields: {
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      vehicle: "نوع السيارة",
      service: "الخدمة المختارة",
      date: "التاريخ المفضل",
      notes: "ملاحظات إضافية",
    },
    placeholders: {
      name: "مثال: أحمد محمد",
      phone: "+٩٦٦ ٥٥ ٠٠٠ ١٢٣٤",
      vehicle: "اختر نوع السيارة",
      service: "اختر خدمة",
      notes: "أخبرنا بأي شيء يجب أن نعرفه...",
    },
    vehicleOptions: ["سيدان", "دفع رباعي", "هاتشباك", "سيارة رياضية", "فان", "أخرى"],
    serviceOptions: [
      "غسيل خارجي",
      "تنظيف داخلي",
      "تلميح شامل",
      "تنظيف المحرك",
      "الشمع والتلميع",
      "الطلاء السيراميكي",
      "لست متأكداً بعد",
    ],
    submit: "إرسال طلب الحجز",
    successTitle: "تم إرسال الطلب!",
    successText:
      "شكراً لك! اجتاز طلبك التحقق في وضع العرض. اربط خادماً خلفياً عند رغبتك في استقبال حجوزات حقيقية.",
    infoTitle: "تحدث مع فريقنا",
    infoText: "تفضل التواصل أولاً؟ سنساعدك في اختيار الباقة المناسبة.",
    phoneLabel: "الهاتف",
    phoneValue: "[رقم هاتفك — توضيحي]",
    emailLabel: "البريد الإلكتروني",
    emailValue: "hello@sharkclean.example",
    addressLabel: " زرنا",
    addressValue: "[عنوانك ومدينتك — توضيحي]",
    hoursLabel: "ساعات العمل",
    hoursValue: "الإثنين–السبت: ٩ صباحاً – ٧ مساءً [توضيحي]",
    whatsapp: "الدردشة على واتساب",
    whatsappNotice: "أضف رقم واتساب في src/data/site.ts لتفعيل هذا الرابط.",
    errors: {
      name: "يرجى إدخال الاسم الكامل (حرفان على الأقل).",
      phone: "يرجى إدخال رقم هاتف صالح (٧–١٥ رقماً).",
      vehicle: "يرجى اختيار نوع السيارة.",
      service: "يرجى اختيار خدمة.",
      date: "يرجى اختيار التاريخ المفضل.",
    },
  },
  footer: {
    description:
      "غسيل سيارات فاخر وتلميح احترافي لسائقين يتوقعون المزيد. دقة وعناية ولمعان يتحدث عن نفسه.",
    navigation: "التنقل",
    services: "الخدمات",
    contact: "التواصل",
    hours: "ساعات العمل",
    rights: "جميع الحقوق محفوظة.",
    note: "موقع توضيحي — استبدل بيانات التواصل قبل الإطلاق.",
    socialNotice: "أضف روابط حساباتك الاجتماعية في src/data/site.ts.",
  },
  booking: {
    title: "لنحجز لمعان سيارتك",
    subtitle: "اختر خدمتك ثم أكمل نموذج الطلب السريع.",
    selected: "الخدمة المختارة",
    noService: "لست متأكداً بعد — ساعدني في الاختيار",
    continue: "متابعة إلى نموذج الحجز",
    note: "لا يتم تحقيق أي دفعة عبر هذا الموقع.",
  },
};

export const content: Record<Language, Content> = { en, ar };
