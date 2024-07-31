interface Pagination {
  total: number;
  lastPage: number;
  currentPage: number;
  perPage: number;
}

interface RelatedTag {
  slug: string;
  name: string;
  url: string | null;
}

interface Author {
  id: number;
  name: string;
  slug: string;
  avatar: string;
  assets: number;
}

interface Preview {
  width: number;
  height: number;
  url: string;
}

interface Item {
  hasPrompt: boolean;
  isAIGenerated: boolean;
  isEditableInWepik: boolean;
  topSearchExpressions: string[];
  isEditableInMockup: boolean;
  id: number;
  name: string;
  slug: string;
  url: string;
  premium: boolean;
  new: boolean;
  type: string;
  author: Author;
  preview: Preview;
  pixel: string;
}

export interface FreePikSchema {
  pagination: Pagination;
  term: string;
  track: string;
  relatedTags: RelatedTag[];
  relatedCollectionsTotal: number;
  nextSearch: string | null;
  tagDescription: string | null;
  canonicalPath: string | null;
  redirectUrl: string | null;
  items: Item[];
}
