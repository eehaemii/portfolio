export enum EThemeTag {
  HTML = 'HTML',
  CSS = 'CSS',
  SCSS = 'SCSS',
  JQUERY = 'JQUERY',
  JAVASCRIPT = 'JAVASCRIPT',
  REACT = 'REACT',
  VUE = 'VUE',
  NEXT = 'NEXT',
  TAILWINDCSS = 'TAILWINDCSS',
  CSSMODULE = 'CSSMODULE',
  BOOTSTRAP = 'BOOTSTRAP',
  STYLEDCOMPONENT = 'STYLEDCOMPONENT',
}

export interface IPropsTag {
  message?: string;
  themeType?: EThemeTag;
}

export type TThemeInfo = {
  [key in EThemeTag]: {
    background: string;
  };
};
