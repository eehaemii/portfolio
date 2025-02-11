import React, { useState } from 'react';
import * as S from './styled';
import { IPropsBox, ItemType } from '@/components/Card/interface';
import Tag from '@/components/Tag';

const ProjectCard: React.FC<IPropsBox> = ({ name, thumbnail, demoLink, list = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <S.Card>
      <S.Thumbnail onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <S.StyledImage
          src={thumbnail!}
          alt={`${name} thumbnail`}
          layout="fill"
          objectFit="cover"
          objectPosition={isHovered ? 'bottom' : 'top'}
        />
      </S.Thumbnail>

      <S.Content>
        <S.Title>{name}</S.Title>
        {list.map((item: ItemType, index: number) => (
          <Tag key={index} message={item.message} themeType={item.theme} />
        ))}
        {demoLink && (
          <S.Link href={demoLink} target="_blank">
            🔗 LINK
          </S.Link>
        )}
      </S.Content>
    </S.Card>
  );
};

export default ProjectCard;
