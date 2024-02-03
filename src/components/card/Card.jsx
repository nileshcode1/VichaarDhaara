// import Image from "next/image";
// import styles from "./card.module.css";
// import Link from "next/link";

// const Card = ({key,item}) => {
//   return (
//     <div className={styles.container} key={key} >
//       <div className={styles.imageContainer}>
//         <Image src="/p1.jpeg" alt="" fill className={styles.image} />
//       </div>
//       <div className={styles.textContainer}>
//         <div className={styles.textContainer}>
//           <div className={styles.detail}>
//             <span className={styles.date}>11.02.2023</span>
//             <span className={styles.category}>CULTURE</span>
//           </div>
//           <Link href="/">
//             <h1>{item.title}</h1>
//           </Link> 
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
//             aperiam praesentium laudantium culpa quae maxime illum tempore,
//             magni assumenda doloremque sapiente quaerat ea voluptatibus, beatae
//             facere accusantium, mollitia ducimus tenetur!
//           </p>
//           <Link href="/">Read more</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
        />
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
