import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className="styles.button">Sends </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
            <div className={styles.userInfo}></div>
            <span className={styles.username}> John Doe </span>
            <span className={styles.date}> 01.0l.2023 </span>
          </div>
        </div>
        <p className={styles.desc} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fuga voluptatibus illum reiciendis cumque. Iure aut repudiandae deleniti dolores odio! Minima itaque suscipit porro. Autem aliquid assumenda illum porro ab.
        </p>
      </div>
    </div>
  );
};

export default Comments;
