import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
    return (
    <section className={styles.footer}>
        <p>Made with love &copy; 2025 Sophia Chung</p>
        <a href="https://www.linkedin.com/in/sophia-c-88571a2b1" className={styles.link} target="_blank">LinkedIn</a>
    </section>
    );
};