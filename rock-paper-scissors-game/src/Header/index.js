import React, { useContext } from 'react'
import { MainContext } from '../Contexts/MainContext'
import styles from "./stles.module.css"
const Header = () => {
    const { score } = useContext(MainContext)

    return (
        <div className={styles.header}>
            <div className={styles.text}>
                <span>ROCK</span>
                <span>PAPER</span>
                <span>SCISSORS</span>
            </div>
            <div className={styles.scoreBox}>
                <span>Score</span>
                <div className={styles.score}>{score}</div>
            </div>
        </div>
    )
}

export default Header
