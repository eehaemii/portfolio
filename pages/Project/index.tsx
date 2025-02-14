import ProjectCard from '@/components/Card/index';
import styles from './project.module.css';
import { EThemeTag } from '@/components/Tag/interface';

const ProjectPage = () => {
  const projects = [
    {
      name: '블록체인 퍼블리싱',
      thumbnail: '/images/project07.jpg',
      list: [
        { message: 'react', theme: EThemeTag.REACT },
        { message: 'styled-component', theme: EThemeTag.STYLEDCOMPONENT },
      ],
      demoLink: 'https://www.notion.so/eehaemii/c4aee3e1bd034dc78557ceb5d7bc6939?pvs=4',
      role: '퍼블리싱 100%',
      details: '상세 설명 텍스트',
    },
    {
      name: '숨마 엘릭서 에센스 스페셜 에디션',
      thumbnail: '/images/project06.jpg',
      list: [
        { message: 'html', theme: EThemeTag.HTML },
        { message: 'css', theme: EThemeTag.CSS },
        { message: 'jquery', theme: EThemeTag.JQUERY },
      ],
      demoLink: 'https://www.sum37.co.kr/reem_acra/views/main.html',
      role: '퍼블리싱 100%',
      details: '상세 설명 텍스트',
    },
    {
      name: '출판물불법유통신고센터',
      thumbnail: '/images/project04.jpg',
      list: [
        { message: 'html', theme: EThemeTag.HTML },
        { message: 'css', theme: EThemeTag.CSS },
        { message: 'jquery', theme: EThemeTag.JQUERY },
      ],
      demoLink: 'https://e.kpipa.or.kr/cleanBook/main/main.do',
      role: '퍼블리싱 100%',
      details: '상세 설명 텍스트',
    },
    {
      name: '내부 프로젝트 업로드',
      thumbnail: '/images/project03.jpg',
      list: [
        { message: 'html', theme: EThemeTag.HTML },
        { message: 'css', theme: EThemeTag.CSS },
        { message: 'jquery', theme: EThemeTag.JQUERY },
        { message: 'bootstrap', theme: EThemeTag.BOOTSTRAP },
      ],
      demoLink: 'https://eehaemii.github.io/designUploadSite/views/intro.html',
      role: '퍼블리싱 100%',
      details: '상세 설명 텍스트',
    },
    {
      name: '학교안전중앙공제회',
      thumbnail: '/images/project02.jpg',
      list: [
        { message: 'html', theme: EThemeTag.HTML },
        { message: 'scss', theme: EThemeTag.SCSS },
        { message: 'jquery', theme: EThemeTag.JQUERY },
      ],
      demoLink: 'https://www.ssif.or.kr/',
      role: '퍼블리싱 100%',
      details: '상세 설명 텍스트',
    },
  ];

  return (
    <section className={styles.projectArea}>
      <h2 className={styles.projectTitle}>PROJECT</h2>

      <div className={styles.projectInner}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            thumbnail={project.thumbnail}
            name={project.name}
            list={project.list}
            role={project.role}
            demoLink={project.demoLink || ''}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
