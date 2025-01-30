import styled, { css } from 'styled-components';
import { IPropsTag, TThemeInfo, EThemeTag } from './interface';

export const ThemeTag: TThemeInfo = {
  [EThemeTag.HTML]: {
    background: 'var(--secondary1)',
  },
  [EThemeTag.CSS]: {
    background: 'var(--secondary2)',
  },
  [EThemeTag.SCSS]: {
    background: 'var(--secondary3)',
  },
  [EThemeTag.JQUERY]: {
    background: 'var(--secondary4)',
  },
  [EThemeTag.JAVASCRIPT]: {
    background: 'var(--secondary5)',
  },
  [EThemeTag.REACT]: {
    background: 'var(--secondary6)',
  },
  [EThemeTag.VUE]: {
    background: 'var(--secondary7)',
  },
  [EThemeTag.NEXT]: {
    background: 'var(--secondary8)',
  },
  [EThemeTag.TAILWINDCSS]: {
    background: 'var(--secondary9)',
  },
  [EThemeTag.CSSMODULE]: {
    background: 'var(--secondary10)',
  },
  [EThemeTag.BOOTSTRAP]: {
    background: 'var(--secondary11)',
  },
  [EThemeTag.STYLEDCOMPONENT]: {
    background: 'var(--secondary12)',
  },
};

export const themeStyle = css<IPropsTag>`
  ${({ themeType }) => {
    return (
      themeType &&
      css`
        background: ${ThemeTag[themeType].background};
      `
    );
  }}
`;

export const Tag = styled.span<IPropsTag>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
  border-radius: 10px;
  background-color: var(--secondary1);
  font-size: 0.7em;
  color: var(--base-black);
  word-break: break-word;

  &:not(:last-child) {
    margin-right: 4px;
  }

  ${themeStyle}
`;
