import { EThemeTag } from '@/components/Tag/interface';

export interface IPropsBox {
  list?: ItemType[];
  name?: string;
  thumbnail?: string;
  isOpen: boolean; // 필수 prop
  onClose: () => void; // 필수 prop
  children?: React.ReactNode;
}

export interface ItemType {
  message: string;
  theme: EThemeTag;
}
