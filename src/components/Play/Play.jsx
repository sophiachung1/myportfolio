import React from "react";
import { getVideoUrl } from "../../utils";
import styles from "./Play.module.css";

export const Play = () => {
    return (
    <section className={styles.container} id="play">
        <div className={styles.content}>
            <h2 className={styles.title}>Pottery</h2>
            <p className={styles.description}>something i have been learning.</p>
            
            <video  
            className={styles.videoCenter}
            autoPlay muted loop controls width="300px">
                <source src={getVideoUrl("pottery.mp4")} type="video/mp4"/>
            </video>
        </div>
       
    </section>
    );
};