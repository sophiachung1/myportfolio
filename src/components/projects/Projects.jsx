import React from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

const projectItems = [
    {title: "Cafe Personality Quiz",
    description: "A fun interactive quiz built with HTML, CSS, and JavaScript.",
    image: getImageUrl("peeptherat.png"),
    link: "https://sophiachung1.github.io/peeptheratcafe/"       
    },
    {title: "Bookworm",
    description: "Designed for students to reflect and grow their reading habit.",
    image: getImageUrl(""),
    link: "https://www.notion.so/Bookworm-19157e020dfb80b2a1fedf56d020a78a?source=copy_link"       
    },
    {title: "MAYA",
    description: "A companion app designed to support emotional wellness and connection.",
    image: getImageUrl(""),
    link: "https://www.notion.so/MAYA-24857e020dfb8059a77ecfaba1773fcf?source=copy_link"       
    },
] 

export const Projects = () => {
    return (
    <section className={styles.projectSection} id="work">
        <h2>Projects</h2>
        <div className={styles.grid}>
            {projectItems.map((item, index) => (
              <a href={item.link} alt={item.title} className={styles.card} >
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.content}>
                <h3>{item.title}</h3>
              <p>{item.description}</p>
                </div> 
                </a>
            ))}
        </div>
    </section>
    );
};