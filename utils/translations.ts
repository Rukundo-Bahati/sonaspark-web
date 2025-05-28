// Translation dictionary
const translations: Record<string, Record<string, string>> = {
  // Navigation and common terms
  home: {
    en: "Home",
    fr: "Accueil",
    rw: "Ahabanza",
  },
  alerts: {
    en: "Alerts",
    fr: "Alertes",
    rw: "Imenyesha",
  },
  toolkit: {
    en: "Toolkit",
    fr: "Outils",
    rw: "Ibikoresho",
  },
  policy: {
    en: "Policy",
    fr: "Politique",
    rw: "Amategeko",
  },
  funding: {
    en: "Funding",
    fr: "Financement",
    rw: "Inkunga",
  },
  education: {
    en: "Education",
    fr: "Éducation",
    rw: "Uburezi",
  },

  // Air quality related
  airQualityIndex: {
    en: "Air Quality Index",
    fr: "Indice de Qualité de l'Air",
    rw: "Igipimo cy'Umwuka",
  },
  airQuality: {
    en: "Air Quality",
    fr: "Qualité de l'Air",
    rw: "Ubwiza bw'Umwuka",
  },
  pm25: {
    en: "PM2.5",
    fr: "PM2.5",
    rw: "PM2.5",
  },
  viewDetails: {
    en: "View Details",
    fr: "Voir Détails",
    rw: "Reba Birambuye",
  },

  // Hazard alerts
  hazardAlerts: {
    en: "Hazard Alerts",
    fr: "Alertes de Danger",
    rw: "Imenyesha y'Akaga",
  },
  floodWarning: {
    en: "Flood Warning",
    fr: "Alerte d'inondation",
    rw: "Imenyesha y'Umwuzure",
  },
  coastalAreas: {
    en: "Coastal areas",
    fr: "Zones côtières",
    rw: "Inkengero z'amazi",
  },
  twoHoursAgo: {
    en: "2 hours ago",
    fr: "il y a 2 heures",
    rw: "hashize amasaha 2",
  },

  // Status and severity
  moderate: {
    en: "Moderate",
    fr: "Modéré",
    rw: "Biraringaniye",
  },
  good: {
    en: "Good",
    fr: "Bon",
    rw: "Byiza",
  },
  unhealthyForSensitiveGroups: {
    en: "Unhealthy for Sensitive Groups",
    fr: "Malsain pour Groupes Sensibles",
    rw: "Bibi ku Bantu Bafite Intege Nke",
  },
  unhealthy: {
    en: "Unhealthy",
    fr: "Malsain",
    rw: "Bibi",
  },
  veryUnhealthy: {
    en: "Very Unhealthy",
    fr: "Très Malsain",
    rw: "Bibi Cyane",
  },
  hazardous: {
    en: "Hazardous",
    fr: "Dangereux",
    rw: "Byica",
  },

  // Common actions
  active: {
    en: "Active",
    fr: "Actif",
    rw: "Birakora",
  },
  new: {
    en: "New",
    fr: "Nouveau",
    rw: "Bishya",
  },
  share: {
    en: "Share",
    fr: "Partager",
    rw: "Gusangiza",
  },
  view: {
    en: "View",
    fr: "Voir",
    rw: "Kureba",
  },
  download: {
    en: "Download",
    fr: "Télécharger",
    rw: "Kumanura",
  },
  apply: {
    en: "Apply Now",
    fr: "Postuler Maintenant",
    rw: "Saba Nonaha",
  },

  // Education related
  progress: {
    en: "Progress",
    fr: "Progrès",
    rw: "Intambwe",
  },

  // Toolkit related
  adaptationToolkit: {
    en: "Adaptation Toolkit",
    fr: "Boîte à Outils",
    rw: "Ibikoresho byo Kwihangana",
  },
  resources: {
    en: "Resources",
    fr: "Ressources",
    rw: "Ibikoresho",
  },

  // Health related
  healthRisks: {
    en: "Health Risks",
    fr: "Risques Santé",
    rw: "Ingaruka ku Buzima",
  },

  // Other common terms
  trends: {
    en: "Trends",
    fr: "Tendances",
    rw: "Imigendekere",
  },
  week: {
    en: "Week",
    fr: "Semaine",
    rw: "Icyumweru",
  },
  month: {
    en: "Month",
    fr: "Mois",
    rw: "Ukwezi",
  },
  all: {
    en: "All",
    fr: "Tous",
    rw: "Byose",
  },
  offline: {
    en: "Offline",
    fr: "Hors Ligne",
    rw: "Nta Murandasi",
  },
  popular: {
    en: "Popular",
    fr: "Populaire",
    rw: "Bikunzwe",
  },
  total: {
    en: "Total",
    fr: "Total",
    rw: "Igiteranyo",
  },
  learnMore: {
    en: "Learn More",
    fr: "En Savoir Plus",
    rw: "Menya Byinshi",
  },
  currentAQI: {
    en: "Current AQI",
    fr: "IQA Actuel",
    rw: "Igipimo cy'Umwuka Ubu",
  },
}

export function getTranslation(key: string, language: string): string {
  if (!translations[key]) {
    console.warn(`Translation key not found: ${key}`)
    return key
  }

  if (!translations[key][language]) {
    // Fallback to English if the requested language is not available
    return translations[key]["en"] || key
  }

  return translations[key][language]
}
