import { IPropsBox, ItemType } from '@/components/LineCard/interface';
import * as S from './styled';

import Tag from '@/components/Tag';

const Box = ({ period, companyName, partTime, list }: IPropsBox) => {
  return (
    <S.LineCard>
      <S.Period>{period}</S.Period>
      <S.CompanyName>
        {companyName} {partTime && <S.PartTime>파트타임</S.PartTime>}
      </S.CompanyName>

      {list?.map((item: ItemType, index: number) => {
        return <Tag key={index} message={item.message} themeType={item.theme} />;
      })}
    </S.LineCard>
  );
};

export default Box;
