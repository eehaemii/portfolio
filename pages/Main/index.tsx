import styles from './main.module.css';

const Main = () => {
  return (
    <section className={styles.mainContainer}>
      <h1 className="blind">main</h1>

      <div>
        <span className={styles.mainTitle}>HAEMI</span>
        <span className={styles.mainTitle}>PORTFOLIO</span>
      </div>
    </section>
  );
};

export default Main;
