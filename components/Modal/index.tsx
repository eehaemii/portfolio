import React from 'react';
import Image from 'next/image';
import * as S from './styled';
import { IPropsBox, ItemType } from '@/components/Modal/interface';
import Tag from '@/components/Tag';

const Modal: React.FC<IPropsBox> = ({ list = [], name, thumbnail, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        {/* 닫기 버튼 */}
        <S.CloseButton onClick={onClose}>&times;</S.CloseButton>

        {/* 썸네일 이미지 */}
        {thumbnail && (
          <S.Thumbnail>
            <Image
              src={thumbnail}
              alt={`${name} thumbnail`}
              layout="fill"
              objectFit="contain"
              priority
            />
          </S.Thumbnail>
        )}

        {/* 프로젝트 이름 */}
        {name && <h3>{name}</h3>}

        {/* 추가 내용 */}
        {children}

        {/* 리스트 (옵션으로 추가 가능) */}
        {list.map((item: ItemType, index: number) => (
          <Tag key={index} message={item.message} themeType={item.theme} />
        ))}
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default Modal;
