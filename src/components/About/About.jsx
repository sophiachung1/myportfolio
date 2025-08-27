import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}> Get to know more about Sophia</h2>
        <div className={styles.contentWrapper}>
        <div className={styles.text}>
        <p>Hi I'm Sophia! Originally from the Windy City of Chicago, now exploring product design and storytelling. 
            I'm a multidisciplinary designer and creator who loves blending color theory, minimalism, and human-centered experiences 
            into projects that feel thoughtful and playful. I'm always experimenting, learning, and building interfaces that connect 
            and inspire. Im excited to collaborate and chat —feel free to reach out anytime!</p>

        <h3>👩🏻‍💻 Area of expertise</h3>
            <ul>
                <li>Web Development</li>
                <li>UX Research</li>
                <li>Design</li>
            </ul>
        <h3>🍓 Personal interests</h3>
            <ul>
                <li>Traveling</li>
                <li>Film</li>
                <li>Coffee</li>
            </ul>
        </div>
        <img src={getImageUrl("profile.jpg")} alt="profile picture"
        className={styles.profileImg}/>
    </div>
    </section>
    );
};