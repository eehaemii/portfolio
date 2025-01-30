import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './styled';
import { IPropsBox, ItemType } from '@/components/Card/interface';
import Tag from '@/components/Tag';

const ProjectCard: React.FC<IPropsBox> = ({ name, thumbnail, demoLink, list = [] }) => {
  const [imageClass, setImageClass] = useState('');

  return (
    <S.Card>
      <S.Thumbnail
        className={imageClass}
        onMouseEnter={() => setImageClass('hover')}
        onMouseLeave={() => setImageClass('')}
      >
        <Image
          src={thumbnail!}
          alt={`${name} thumbnail`}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
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
