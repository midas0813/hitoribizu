import type { LucideIcon } from "lucide-react";

export type CategorySlug =
  | "hitori-kaigyo"
  | "fukugyo"
  | "dokuritsu"
  | "tei-shikkin"
  | "mu-tenpo"
  | "gyoshu";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
}

export type InvestmentRange =
  | "under100"
  | "100to300"
  | "300to500"
  | "over500";

export interface Case {
  id: string;
  title: string;
  companyName: string;
  categories: CategorySlug[];
  investmentMin: number;
  investmentMax: number;
  investmentRange: InvestmentRange;
  catchCopy: string;
  description: string;
  features: string[];
  earnings: string;
  royalty: string;
  contractPeriod: string;
  supportDetails: string[];
  requirements: string[];
  imageUrl: string;
  logoUrl?: string;
  badge?: string;
  isNew?: boolean;
  isPopular?: boolean;
  prefecture?: string[];
  startupPeriod: string;
}

export interface FormData {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  email: string;
  phone: string;
  prefecture: string;
  occupation: string;
  selfFunding: string;
  startupTiming: string;
  selectedCases: string[];
  message: string;
  agreeToTerms: boolean;
  agreeToPrivacy: boolean;
}
