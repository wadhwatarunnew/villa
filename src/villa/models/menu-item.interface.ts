export interface MenuItem {
  id?: string | number;
  name: string;
  slug?: string;
  URL?: string;
  children?: MenuItem[];
}