import { IPropsTag } from './interface';
import * as S from './styled';

const Tag = ({ message, themeType }: IPropsTag) => {
  return <S.Tag themeType={themeType}>{message}</S.Tag>;
};

export default Tag;
