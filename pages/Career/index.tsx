import LineCard from '@/components/LineCard';
import styles from './career.module.css';

import { EThemeTag } from '@/components/Tag/interface';
import { useState } from 'react';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Career = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const CareerList = [
    {
      data: '2024.10 ~ 2024.11',
      name: '비티소프트',
      partTime: true,
      list: [
        { message: 'html', theme: EThemeTag.HTML },
        { message: 'scss', theme: EThemeTag.SCSS },
      ],
    },
    {
      data: '2024.02 ~ 2024.05',
      name: '엘핀',
      partTime: true,
      list: [
        { message: 'react', theme: EThemeTag.REACT },
        { message: 'tailwindcss', theme: EThemeTag.TAILWINDCSS },
      ],
    },
    {
      data: '2023.10 ~ 2023.12',
      name: '펜타웍스',
      partTime: true,
      list: [
        { message: 'next', theme: EThemeTag.NEXT },
        { message: 'css-module', theme: EThemeTag.CSSMODULE },
      ],
    },
    {
      data: '2022.3 ~ 2023.09',
      name: '위펀',
      list: [
        { message: 'vue', theme: EThemeTag.VUE },
        { message: 'react', theme: EThemeTag.REACT },
        { message: 'javascript', theme: EThemeTag.JAVASCRIPT },
        { message: 'scss', theme: EThemeTag.SCSS },
      ],
    },
    {
      data: '2021.1 ~ 2022.3',
      name: '스카이앤드',
      list: [
        { message: 'html', theme: EThemeTag.HTML },
        { message: 'css', theme: EThemeTag.CSS },
        { message: 'bootstrap', theme: EThemeTag.BOOTSTRAP },
        { message: 'jQuery', theme: EThemeTag.JQUERY },
        { message: 'react', theme: EThemeTag.REACT },
      ],
    },
    {
      data: '2019.1 ~ 2020.5',
      name: '카이아이컴퍼니',
      list: [
        { message: 'html', theme: EThemeTag.HTML },
        { message: 'css', theme: EThemeTag.CSS },
        { message: 'bootstrap', theme: EThemeTag.BOOTSTRAP },
        { message: 'jQuery', theme: EThemeTag.JQUERY },
      ],
    },
    {
      data: '2018.1 ~ 2018.12',
      name: '이노아이티',
      list: [
        { message: 'html', theme: EThemeTag.HTML },
        { message: 'css', theme: EThemeTag.CSS },
        { message: 'scss', theme: EThemeTag.SCSS },
        { message: 'jQuery', theme: EThemeTag.JQUERY },
      ],
    },
  ];

  const visibleCareers = showAll ? CareerList : CareerList.slice(0, 4);

  return (
    <section className={styles.careerArea}>
      <h2 className={styles.careerTitle}>CAREER</h2>

      <ul className={styles.careerList}>
        {visibleCareers.map((item, index) => (
          <li key={index} className={styles.careerItem}>
            <LineCard
              period={item.data}
              companyName={item.name}
              partTime={item.partTime}
              list={item.list}
            />
          </li>
        ))}
      </ul>

      <button
        onClick={handleToggle}
        className={`${styles.moreButton} ${showAll ? styles.isActiveMoreButton : ''}`}
      >
        <span className={`${styles.icon} ${showAll ? styles.iconActive : ''}`}>
          <FaChevronDown />
        </span>
      </button>
    </section>
  );
};

export default Career;
