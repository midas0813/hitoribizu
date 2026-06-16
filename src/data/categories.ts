import { User, Briefcase, Rocket, PiggyBank, Home, LayoutGrid } from "lucide-react";
import { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "hitori-kaigyo",
    name: "一人開業",
    description: "スタッフを雇わず一人でできるビジネスモデル",
    icon: User,
    imageUrl: "/images/hero.jpg",
  },
  {
    slug: "fukugyo",
    name: "副業",
    description: "本業を続けながら始められる副収入プラン",
    icon: Briefcase,
    imageUrl: "/images/case-tech.jpg",
  },
  {
    slug: "dokuritsu",
    name: "独立開業",
    description: "会社を辞めて本格的に独立するプラン",
    icon: Rocket,
    imageUrl: "/images/category-dokuritsu.jpg",
  },
  {
    slug: "tei-shikkin",
    name: "低資金",
    description: "100万円以下の小資本で始められるビジネス",
    icon: PiggyBank,
    imageUrl: "/images/cta-banner.jpg",
  },
  {
    slug: "mu-tenpo",
    name: "無店舗",
    description: "店舗不要・在宅・訪問型で展開できるビジネス",
    icon: Home,
    imageUrl: "/images/case-tech.jpg",
  },
  {
    slug: "gyoshu",
    name: "業種から選ぶ",
    description: "飲食・サービス・IT・介護など業種別に探す",
    icon: LayoutGrid,
    imageUrl: "/images/category-gyoshu.jpg",
  },
];
