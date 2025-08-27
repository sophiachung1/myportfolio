import React, {useState} from 'react'
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">SC</a>
        <div className={styles.menu}>
            <img 
            className={styles.menuBtn} 
            src={
                menuOpen 
                ? getImageUrl("closemenuIcon.png")
                : getImageUrl("menu.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={()=> setMenuOpen(false)}
            >
                 <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#play">Play</a>
                </li>
                <li><a href="#about">About</a></li>
                <li><a href="https://drive.google.com/file/d/1bJvQaDp8LQBeHcUQaN2eSJ5TsLbGCkDx/view?usp=sharing">Resume</a></li>
            </ul>
        </div>
      </nav>
    )
};