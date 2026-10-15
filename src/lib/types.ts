export type Locale = "bn" | "en";

export interface NavItem {
  id: string;
  href: string;
  label: string;
}

export interface BrandInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  body: string;
  image: string;
}

export interface ObjectiveCard {
  id: string;
  value: string;
  label: string;
}

export interface ProblemSolution {
  id: string;
  problem: string;
  solution: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  summary: string;
  intro: string;
  benefits: string[];
  audience: string;
  ctaType: "farmer" | "buyer" | "hub" | "sponsor";
}

export interface EcosystemStep {
  id: string;
  title: string;
  body: string;
}

export interface TeamMember {
  id: string;
  nameBn: string;
  nameEn: string;
  role: string;
  title: string;
  bio: string;
  responsibilities: string[];
  photo: string | null;
}

export interface ArticleItem {
  id: string;
  slug: string;
  category: string;
  isDraft: boolean;
  publishedAt: string | null;
  title: string;
  excerpt: string;
  paragraphs: string[];
}

export interface FaqItem {
  id: string;
  category: string;
  q: string;
  a: string;
}

export interface SiteCopy {
  schemaVersion: number;
  brand: BrandInfo;
  nav: NavItem[];
  common: {
    join: string;
    farmerCta: string;
    buyerCta: string;
    partnerCta: string;
    learnMore: string;
    readMore: string;
    planned: string;
    target: string;
    comingSoon: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    selectLanguage: string;
    required: string;
    optional: string;
    submit: string;
    sending: string;
    liveSuccess: string;
    demoSuccess: string;
    failure: string;
    demoBanner: string;
    reference: string;
    privacyConsent: string;
    newsletterConsent: string;
    newsletterPending: string;
    notFoundTitle: string;
    notFoundBody: string;
    noResults: string;
    validation: {
      name: string;
      phone: string;
      email: string;
      district: string;
      consent: string;
      quantity: string;
      message: string;
      rateLimit: string;
    };
  };
  home: {
    seo: { title: string; description: string };
    eyebrow: string;
    heroSlides: HeroSlide[];
    objectiveCards: ObjectiveCard[];
    problemsHeading: string;
    problemsIntro: string;
    problemSolutions: ProblemSolution[];
    servicesHeading: string;
    servicesIntro: string;
    ecosystemHeading: string;
    ecosystemIntro: string;
    journeyHeading: string;
    networkHeading: string;
    networkIntro: string;
    teamHeading: string;
    insightsHeading: string;
    faqHeading: string;
    ctaTitle: string;
    ctaBody: string;
  };
  about: {
    title: string;
    intro: string;
    visionTitle: string;
    vision: string;
    missionTitle: string;
    missions: string[];
    valuesTitle: string;
    values: { title: string; body: string }[];
    businessModelTitle: string;
    businessModelIntro: string;
    revenueStreams: { title: string; body: string }[];
    team: TeamMember[];
  };
  services: {
    title: string;
    intro: string;
    items: ServiceItem[];
  };
  ecosystem: {
    title: string;
    intro: string;
    steps: EcosystemStep[];
    dataNote: string;
    phaseNote: string;
  };
  farmers: {
    title: string;
    intro: string;
    benefits: { title: string; body: string }[];
    steps: string[];
    formTitle: string;
    formIntro: string;
  };
  buyers: {
    title: string;
    intro: string;
    benefits: string[];
    steps: string[];
    formTitle: string;
  };
  partners: {
    title: string;
    intro: string;
    types: { id: string; title: string; body: string }[];
    formTitle: string;
    hubFormTitle: string;
    sponsorFormTitle: string;
  };
  network: {
    title: string;
    intro: string;
    status: string;
    legendPlanned: string;
    districtSelect: string;
    selectedDistrict: string;
    noActiveHubs: string;
  };
  marketplace: {
    title: string;
    intro: string;
    notice: string;
    categories: { id: string; title: string }[];
    emptyTitle: string;
    emptyBody: string;
  };
  insights: {
    title: string;
    intro: string;
    emptyTitle: string;
    emptyBody: string;
    all: string;
    articles: ArticleItem[];
  };
  contact: {
    title: string;
    intro: string;
    formTitle: string;
    missingContact: string;
    newsletterTitle: string;
    newsletterBody: string;
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  footer: {
    description: string;
    explore: string;
    connect: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: string;
    availability: string;
  };
}

export interface District {
  id: string;
  nameBn: string;
  nameEn: string;
  divisionId: string;
  divisionBn: string;
  divisionEn: string;
  networkStatus: string;
  hubCount: number | null;
}

export interface SiteConfig {
  companyNameBn: string;
  companyNameEn: string;
  defaultLocale: Locale;
  locales: Locale[];
  timezone: string;
  productionUrl: string | null;
  email: string | null;
  phone: string | null;
  whatsapp: string | null;
  addressBn: string | null;
  addressEn: string | null;
  privacyContactEmail: string | null;
  socialLinks: Record<string, string>;
  logoSource: string;
  headerLogo: string | null;
  registration: {
    verified: boolean;
    number: string | null;
    tradeLicence: string | null;
    tin: string | null;
    bin: string | null;
  };
  featureFlags: {
    manualHeroSlides: boolean;
    newsletter: boolean;
    publishedInsights: boolean;
    activeHubDirectory: boolean;
    liveMarketplace: boolean;
    payments: boolean;
    financingTransactions: boolean;
    publicTraceability: boolean;
    analytics: boolean;
  };
  activeDistricts: string[];
  confirmedPartners: string[];
  approvedTestimonials: string[];
  verifiedMetrics: string[];
  ownerReview: {
    teamEnglishSpellings: boolean;
    privacyAndTerms: boolean;
    photographyRights: boolean;
    serviceAvailability: boolean;
  };
}

export type LeadKind = "farmer" | "buyer" | "hub" | "partner" | "sponsor" | "contact";

export interface LeadEnvelope {
  kind: LeadKind;
  locale: Locale;
  districtId?: string;
  consent: boolean;
  consentVersion: string;
  website?: string; // honeypot
  idempotencyKey: string;
  fields: Record<string, any>;
}

export interface StoredLead {
  id: string;
  reference: string;
  kind: LeadKind;
  locale: Locale;
  name: string;
  phone?: string | null;
  email?: string | null;
  district_id?: string | null;
  organization?: string | null;
  fields: Record<string, any>;
  consent: boolean;
  consent_version: string;
  consented_at: string;
  idempotency_key: string;
  request_hash: string;
  status: "new" | "contacted" | "qualified" | "closed";
  internal_notes: string;
  created_at: string;
  updated_at: string;
}