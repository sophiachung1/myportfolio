import React from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

const projectItems = [
    {title: "Cafe Personality Quiz",
    description: "A fun interactive quiz built with HTML, CSS, and JavaScript.",
    image: getImageUrl("peeptherat.png"),
    link: "https://your-link.com"       
    },
    {title: "Cafe Personality Quiz",
    description: "A fun interactive quiz built with HTML, CSS, and JavaScript.",
    image: getImageUrl("peeptherat.png"),
    link: "https://your-link.com"       
    },
    {title: "Cafe Personality Quiz",
    description: "A fun interactive quiz built with HTML, CSS, and JavaScript.",
    image: getImageUrl("peeptherat.png"),
    link: "https://your-link.com"       
    }
]

export const Projects = () => {
    return (
    <section className={styles.projectSection} id="work">
        <h2>Projects</h2>
        <div className={styles.grid}>
            {projectItems.map((item, index) => (
              <a href={item.link} alt={item.title} className={styles.image} >
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