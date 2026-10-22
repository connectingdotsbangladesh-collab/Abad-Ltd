export type StoreBrand = "soteja" | "rosod" | "sudha";

export interface BrandMeta {
  id: StoreBrand;
  nameBn: string;
  nameEn: string;
  taglineBn: string;
  taglineEn: string;
  descriptionBn: string;
  descriptionEn: string;
  colorPrimary: string; // e.g. text or bg
  colorAccent: string;
  colorBgLight: string;
  borderAccent: string;
  badgeBg: string;
  badgeText: string;
  heroImage: string;
  iconName: string;
}

export interface StoreCategory {
  id: string;
  brand: StoreBrand;
  nameBn: string;
  nameEn: string;
  slug: string;
  icon: string;
}

export interface PackSize {
  labelBn: string;
  labelEn: string;
  weight: string;
  price: number;
  originalPrice?: number;
}

export interface Product {
  id: string;
  slug: string;
  brand: StoreBrand;
  categoryId: string;
  categoryBn: string;
  categoryEn: string;
  nameBn: string;
  nameEn: string;
  subtitleBn: string;
  subtitleEn: string;
  price: number;
  originalPrice?: number;
  unitBn: string;
  unitEn: string;
  packSizes: PackSize[];
  inStock: boolean;
  stockCount: number;
  badgeBn?: string;
  badgeEn?: string;
  descriptionBn: string;
  descriptionEn: string;
  storageGuidanceBn: string;
  storageGuidanceEn: string;
  originBn: string;
  originEn: string;
  image: string;
  gallery: string[];
  seasonal?: boolean;
  featured?: boolean;
}

export interface CartItem {
  id: string; // `${product.id}-${packSize.weight}`
  productId: string;
  slug: string;
  brand: StoreBrand;
  nameBn: string;
  nameEn: string;
  image: string;
  packSize: PackSize;
  unitPrice: number;
  quantity: number;
}

export interface DeliveryConfig {
  baseFee: number;
  freeDeliveryThreshold: number;
  estimatedHours: string;
  coverageNoteBn: string;
  coverageNoteEn: string;
}

export interface CustomerOrderDetails {
  name: string;
  phone: string;
  district: string;
  area: string;
  address: string;
  notes?: string;
  paymentMethod: "cod" | "bkash" | "nagad" | "card";
}
