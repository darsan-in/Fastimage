interface Asset {
  aspectratio: number;
  assetType: string;
  author_avatar_large: string | null;
  author_avatar_medium: string | null;
  author_supplier_page: string | null;
  author_url: string | null;
  createdAt: string;
  description: string;
  downloaded: number;
  height: number;
  id: string;
  isComplexSVG: boolean;
  isSVG: boolean;
  isTransparent: boolean;
  isinPW: boolean;
  keywords: string[];
  keywordsList: string;
  keywordsranking: string;
  orientation: string;
  tags: string;
  title: string;
  url_medium: string;
  url_small: string;
  url_thumb: string;
  width: number;
  displayHeight: number;
  displayWidth: number;
  referral_url: string;
}

export interface PicwizardSchema {
  similarSearches: string[];
  assets: Asset[];
  onlySponsored: boolean;
}
