export interface IButtonLanguage {
  icon: React.ReactNode;
  label: string;
}

export interface IPost {
  id: number;
  title: string;
  image_small: string;
  image_big: string;
  creation_date: string;
  date: string;
  view_count: number;
  parent_category: {
    category_id: number;
    category_title: string;
    color_title: string;
    color: string;
  };
  category: {
    category_id: number;
    category_title: string;
    color_title: string;
    color: string;
  };
  url: string;
  lead: string;
}
