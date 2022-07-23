import React, { useContext } from 'react'
import { MainContext } from '../Contexts/MainContext'
import styles from "./styles.module.css"
const GamePage = () => {
    const { setSelected, setPlayAgain } = useContext(MainContext)


    const handleClick = (e) => {
        setSelected(() => [{ id: e.target.id, iconName: e.target.title }])
        setPlayAgain(true)



    }

    return (
        <div className={styles.playGame}>
            <img src="https://react-js-rock-paper-scissors-game.vercel.app/bg-triangle.5da1a726.svg" className={styles.playGameImage} alt=""></img>
            <div className={styles.gameItem}>
                <div className={styles.gameIcon} name="paper" onClick={handleClick}>

                    <div id="1" title="selectedPaper" className={`${styles.paper} ${styles.icon}`} >
                    </div>
                </div>

                <div className={styles.gameIcon} onClick={handleClick}>

                    <div id="2" title="selectedScissors" className={`${styles.scissors} ${styles.icon}`}></div>
                </div>
                <div className={styles.gameIcon} onClick={handleClick}>
                    <div id="3" title="selectedRock" className={`${styles.rock} ${styles.icon}`}></div>
                </div>
            </div>
        </div>
    )
}

export default GamePage
