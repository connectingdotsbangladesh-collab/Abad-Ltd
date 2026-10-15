import { Locale, SiteCopy, District, LeadKind } from "@/lib/types";

export interface LeadFormProps {
  kind: LeadKind;
  locale: Locale;
  copy: SiteCopy;
  districts: District[];
  prefilledDistrictId?: string;
  className?: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  organization: string;
  upazila: string;
  farmType: string;
  farmTypeOther: string;
  farmName: string;
  products: string;
  buyerType: string;
  buyerTypeOther: string;
  productCategory: string;
  productCategoryOther: string;
  quantity: string;
  quantityUnit: string;
  quantityUnitOther: string;
  deliveryFrequency: string;
  requiredBy: string;
  specification: string;
  partnerType: string;
  partnerTypeOther: string;
  spaceDescription: string;
  storageType: string;
  transportAvailable: string;
  collaborationInterest: string;
  topic: string;
  message: string;
  notes: string;
  consent: boolean;
  website: string;
}