export const WHATSAPP_NUMBER = "916396348034";

export const WHATSAPP_MESSAGE = encodeURIComponent(
  `Pranam 🙏\nI would like to get information about online puja and spiritual guidance through Adhyatmik Sankalp.`
);

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Online Puja", href: "#services" },
  { label: "Meditation", href: "#about" },
  { label: "Spiritual Guidance", href: "#how-it-works" },
  { label: "Ritual Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#booking" },
] as const;

export const SERVICES = [
  {
    title: "Online Puja",
    description:
      "Experience sacred rituals performed by verified pandits, streamed live to your home with complete vedic authenticity.",
    icon: "Flame",
  },
  {
    title: "Mahamrityunjaya Jaap",
    description:
      "Powerful mantra chanting for health, longevity, and protection against untimely calamities and negative energies.",
    icon: "Shield",
  },
  {
    title: "Rudrabhishek",
    description:
      "Sacred abhishekam of Lord Shiva with holy offerings, invoking divine blessings for prosperity and peace.",
    icon: "Droplets",
  },
  {
    title: "Griha Pravesh Puja",
    description:
      "Auspicious housewarming ceremony to purify and bless your new home with positive cosmic energies.",
    icon: "Home",
  },
  {
    title: "Kundli Guidance",
    description:
      "Personalized astrological consultation based on your birth chart for career, relationships, and life direction.",
    icon: "Star",
  },
  {
    title: "Meditation Sessions",
    description:
      "Guided spiritual meditation with experienced gurus to achieve inner peace, clarity, and elevated consciousness.",
    icon: "Brain",
  },
  {
    title: "Online Sankalp Path",
    description:
      "Sacred scripture readings and sankalp ceremonies performed with devotion for your specific intentions and wishes.",
    icon: "BookOpen",
  },
  {
    title: "Spiritual Healing",
    description:
      "Holistic energy healing sessions combining ancient wisdom and divine mantras for emotional and spiritual restoration.",
    icon: "Heart",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Adhyatmik Sankalp ne meri zindagi badal di. Online puja ka anubhav bilkul mandir jaisa tha. Guruji ka aashirvaad sachche dil se milta hai.",
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi, NCR",
    rating: 5,
    text: "Rudrabhishek ke baad se ghar mein bahut shanti aa gayi. Professional service aur Guruji ka divine connection kamaal ka hai.",
  },
  {
    name: "Anita Verma",
    location: "Lucknow, UP",
    rating: 5,
    text: "Meditation sessions ne mujhe andar se heal kiya. Guruji ke saath har session ek naya anubhav hota hai. Highly recommended!",
  },
  {
    name: "Vikash Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "Griha Pravesh puja bahut hi sundar tarike se hui. Poora vedic vidhi ka palan kiya gaya. Family bahut khush hai.",
  },
  {
    name: "Sunita Devi",
    location: "Varanasi, UP",
    rating: 5,
    text: "Mahamrityunjaya Jaap ke baad se health mein kaafi sudhar aaya. Guruji ki shakti aur bhakti dono anokhi hai.",
  },
  {
    name: "Amit Tiwari",
    location: "Jaipur, Rajasthan",
    rating: 5,
    text: "Kundli consultation itni accurate thi ki main hairan reh gaya. Guruji ne mere career ka bilkul sahi marg dikhaya.",
  },
  {
    name: "Kavita Singh",
    location: "Patna, Bihar",
    rating: 5,
    text: "Spiritual healing session ke baad mujhe aisi shanti mili jo salon mein nahi mili thi. Yeh platform sachmein divine hai.",
  },
  {
    name: "Deepak Mishra",
    location: "Bhopal, MP",
    rating: 5,
    text: "Sankalp Path sunke dil ko sukoon mila. Guruji ki awaaz mein ek alag hi shakti hai. Har baar naya anubhav hota hai.",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Select Ritual",
    description: "Choose from our curated collection of sacred rituals and spiritual services.",
  },
  {
    step: 2,
    title: "Choose Date & Time",
    description: "Pick an auspicious date and convenient time for your personalized ceremony.",
  },
  {
    step: 3,
    title: "Submit Sankalp",
    description: "Share your intentions, gotra, and details for a deeply personal spiritual experience.",
  },
  {
    step: 4,
    title: "Guru Performs Puja",
    description: "Watch your puja performed live with complete vedic authenticity and devotion.",
  },
  {
    step: 5,
    title: "Receive Blessings & Video",
    description: "Get divine blessings, prasad details, and a recorded video of your ceremony.",
  },
] as const;
