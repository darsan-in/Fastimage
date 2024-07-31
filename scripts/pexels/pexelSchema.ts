export interface PexelResponse {
  data: DataItem[];
  pagination: Pagination;
}

interface DataItem {
  id: string;
  type: string;
  attributes: Attributes;
  meta: Meta;
}

interface Attributes {
  id: number;
  slug: string;
  description: string | null;
  width: number;
  height: number;
  status: string;
  created_at: string;
  updated_at: string;
  publish_at: string;
  feed_at: string | null;
  title: string;
  aspect_ratio: number;
  license: string;
  published: boolean;
  starred: boolean;
  pending: boolean;
  user: User;
  tags: Tag[];
  liked: boolean;
  collection_ids: any[]; // Use specific type if available
  donate_url: string;
  main_color: number[];
  image: Image;
  alt: string;
  colors: string[];
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  slug: string;
  username: string;
  location: string;
  avatar: Avatar;
  hero: boolean;
  following: boolean;
}

interface Avatar {
  small: string;
  medium: string;
}

interface Tag {
  name: string;
  search_term: string;
}

interface Image {
  small: string;
  medium: string;
  large: string;
  download: string;
  download_link: string;
}

interface Meta {
  searchable: boolean;
  policy: Policy;
}

interface Policy {
  delete: boolean;
}

interface Pagination {
  current_page: number;
  total_pages: number;
  total_results: number;
}
