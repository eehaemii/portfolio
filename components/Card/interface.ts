import { EThemeTag } from '@/components/Tag/interface';

export interface IPropsBox {
  list?: ItemType[];
  name?: string;
  thumbnail?: string;
  demoLink?: string;
  participation?: string;
  onClick?: () => void;
}

export interface ItemType {
  message: string;
  theme: EThemeTag;
}
