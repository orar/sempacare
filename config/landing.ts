import { FeatureLdg, InfoLdg, TestimonialType } from "types";

export const infos: InfoLdg[] = [
  {
    title: "Sometimes, it gets difficult",
    description: "We understand how it feels when unexpectedly when you have to combine additional responsibility of taking care of your loved one. Don't worry, we can help in 3 easy steps!",
    image: "/_static/stocks/woman_child.jpg",
    list: [
      {
        title: "Free Consultation",
        description: "Request for a free consultation for us to understand the medical situation of your loved one",
        icon: "cross",
      },{
        title: "Inspection",
        description: "We will pay a quick visit to your loved one depending on its urgency. This step is very important.",
        icon: "home",
      },{
        title: "Let's Agree to Start",
        description: "With your agreement and our specialty, we can begin to get your loved one to feel better",
        icon: "heartPulse",
      },
    ]
  },
];

export const features: FeatureLdg[] = [
  {
    title: "Personal Care Services",
    description:
      "Our trained caregivers provide gentle assistance with everyday activities, ensuring comfort and independence in your loved one's routine.",
    link: "/personal-care",
    icon: "cherry",
  },
  {
    title: "Companion Care",
    description:
      "Our caregivers offer genuine companionship and engaging activities that enrich daily life and promote emotional wellbeing.",
    link: "/companion-care",
    icon: "dog",
  },
  {
    title: "Daily Living Support",
    description:
      "We handle the day-to-day essentials so your loved ones can focus on what matters most – enjoying life in their own home with peace of mind.",
    link: "/services/daily-living-support",
    icon: "leafyGreen",
  },
  {
    title: "Respite Care",
    description:
      "Take the time you need to recharge while knowing your loved one is in capable, caring hands. Whether planned or emergency care, we're here when you need us.",
    link: "/services/respite-care",
    icon: "home",
  },
  {
    title: "Skilled Nursing Care",
    description:
      "Our licensed nurses provide expert clinical services and monitoring, ensuring your loved one receives the highest standard of medical attention while maintaining their comfort.",
    link: "/services/skilled-nursing-care",
    icon: "user",
  },
  {
    title: "Specialized Care Services",
    description:
      "Our specialized caregivers are trained to provide focused support and management for conditions requiring detailed attention and understanding.",
    link: "/services/specialized-care",
    icon: "stethoscope",
  },
];

export const testimonials: TestimonialType[] = [
  {
    name: "Margaret Botwe",
    job: "Daughter of client Helen Saah, 72",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    review:
    "When my 72-year-old mother was diagnosed with early-stage dementia, we were overwhelmed. Their compassionate caregiver, Sarah, not only helps with daily tasks but truly connects with my mom. She understands her unique needs, keeps her engaged through gentle activities, and gives our entire family peace of mind. The care is professional, personalized, and goes beyond what we ever expected. They're not just a service—they've become an extension of our family."
  },
  {
    name: "David Twum-Barima",
    job: "Son of client Michael Asafo Twum, 68",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
    "Our dad struggled with mobility after his stroke. ComfortCare's nurses helped him regain confidence through patient, skilled rehabilitation. Their care went beyond medical support—they restored hope for our entire family."
  },
  {
    name: "Susan Kyeremanteng",
    job: "Client, 55",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "After my surgery, I needed reliable home care. These guys were professional, attentive, and made my recovery smooth. Their expertise gave me confidence to heal comfortably at home."
  },
  {
    name: "Michelle Panford",
    job: "Daughter of client",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review:
    "Caring for my elderly mother was challenging until ComfortCare stepped in. Their nurses were compassionate, reliable, and truly understood our need. I could finally breathe easier."
  },
  {
    name: "Emily A. Mintah",
    job: "Client, 38",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review:
    "Life-changing care. ComfortCare gives mom the support she needs with professionalism and heart."
  },
  {
    name: "Samira Anaba",
    job: "Daught of client, 59",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
    "During my mummy's critical hospital stay, clashing with my trips abroad, ComfortCare's professional nurse stepped in like family. She was our constant support, communicating with doctors, managing her care, and providing emotional comfort when I couldn't be there. My mum liked her and was later comforting me that she's ok. God bless them so much"
  },
  {
    name: "Jennifer Chidi",
    job: "Client, 45",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    review:
    "When my little brother was hospitalized in Accra, ComfortCare became our family's lifeline. Their professional caregiver Maria was more than a nurse—she was our advocate, ensuring his medical needs were met with compassion and personal attention. She sat in for me everytime when he needed me day and night"
  },
];
