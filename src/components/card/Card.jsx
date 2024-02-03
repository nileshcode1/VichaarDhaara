import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>11.02.2023</span>
            <span className={styles.category}>CULTURE</span>
          </div>
          <Link href="/">
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
          </Link>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            aperiam praesentium laudantium culpa quae maxime illum tempore,
            magni assumenda doloremque sapiente quaerat ea voluptatibus, beatae
            facere accusantium, mollitia ducimus tenetur!
          </p>
          <Link href="/">Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
