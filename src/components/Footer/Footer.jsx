import React from "react";
import styles from "./Footer.module.css";


export const Footer = () => {
    return (
    <section className={styles.footer}>
        <div className={styles.left}>
        <h1 className={styles.headline}>Let's chat! ˙ᵕ˙ ✿</h1>
        <h3>Built with React, Javascript, & lots of coffee</h3>
        <p>  &copy; 2026 Sophia Chung</p>
        </div>

        <div className={styles.right}>
            <div className={styles.column}>
                <h3 className={styles.columnTitle}>Say hello!</h3>
                <a href="https://www.linkedin.com/in/sophia-c-88571a2b1" className={styles.link} target="_blank">LinkedIn</a>
                <a href="mailto:sxhchung@gmail.com" className={styles.link}>Email</a>
                <a href="https://github.com/sophiachung1" className={styles.link} target="_blank">GitHub</a>
            </div>
        </div>
        
    </section>
    );
};