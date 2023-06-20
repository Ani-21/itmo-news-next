export interface NewsResponse<T> {
  category: number;
  total: number;
  page: number;
  per_page: number;
  last_page: number;
  news: T[];
}
