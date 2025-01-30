import { EThemeTag } from '@/components/Tag/interface';

export interface IPropsBox {
  period?: string;
  companyName?: string;
  partTime?: boolean;
  list?: ItemType[];
}

export interface ItemType {
  message: string;
  theme: EThemeTag;
}
