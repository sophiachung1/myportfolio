import React, {useState} from "react";
import { getVideoUrl } from "../../utils";
import { getImageUrl } from "../../utils";
import styles from "./Play.module.css";

export const Play = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
    <section className={styles.container} id="play">
        <div className={styles.content}>
            <h2 className={styles.title}>Sidequest</h2>
            <div className={styles.gallery}>
            <div
                className={styles.galleryItem}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
            <video  
            className={styles.videoCenter}
            autoPlay muted loop controls width="300px">
                <source src={getVideoUrl("pottery.mp4")} type="video/mp4"/>
            </video>
            
            {isHovered && (
                <div className={styles.overlay}>
                    <h3>Pottery</h3>
                    <p className={styles.description}>Started pottery as a hobby and im learning to make a vase</p>
                    </div>
            )}
                </div>

            <div className={styles.galleryItem}
              onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>

                <img
                src={getImageUrl("coffee3.png")}
                alt="coffee"
                className={styles.image}
                />
                {isHovered && (
                <div className={styles.overlay}>
                    <h3>Latte art</h3>
                    <p className={styles.description}>I love coffee and have been practicing my latte art!</p>
                    </div>
            )}
            </div>
            </div>
        </div>
       
    </section>
    );
};