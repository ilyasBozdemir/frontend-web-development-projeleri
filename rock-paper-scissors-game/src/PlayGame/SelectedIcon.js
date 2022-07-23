import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../Contexts/MainContext'
import styles from "./styles.module.css"
import "./playGame.css"
const SelectedIcon = () => {
    const { selected, setPlayAgain, playAgain, gameStep, gameResult, result, win, lost, scoreTable, number, RandomNumber } = useContext(MainContext)

    const [time, setTime] = useState(3)


    let selectedIcon = selected[0].iconName

    let decreaseTime;
    let selectedGame = gameStep.filter(item => item.id === number);

    useEffect(() => {
        RandomNumber()

    }, [selected])
    useEffect(() => {
        gameResult(number)
        if (time === 0) {
            scoreTable()
        }
        if (time > 0) {
            decreaseTime = setInterval(() => {
                setTime(prev => prev - 1)

            }, 1000)

        }
        return () => clearInterval(decreaseTime);

    }, [time])

    const handlePlayAgain = () => {
        setPlayAgain(!playAgain)

    }


    return (
        <div className={styles.game}>
            <div className={styles.gameYou}>
                <span className={styles.text}>YOU PICKED</span>
                <div className={`${selectedIcon} ${styles.selectIcon} ${time === 0 && result === win ? "winner" : ""}`}></div>
            </div>

            <>
                {
                    time > 0 ?
                        <div className={styles.gameHouse}>
                            <span className={styles.text}>THE HOUSE PICKED</span>
                            <div className={`${styles.counter} ${styles.selectIcon} ${styles.timeIcon}`}>
                                <span>{time}</span>
                            </div>
                        </div>

                        :
                        <div className={styles.showResult}>
                            <div className={styles.gamePlay}>
                                <span className={styles.text}>{result}</span>
                                <button onClick={handlePlayAgain}>Play Again</button>
                            </div>

                            <div className={styles.gameHouse}>
                                <span className={styles.text}>THE HOUSE PICKED</span>
                                <div className={`${styles.selectIcon} ${selectedGame[0].icon} ${time === 0 && result === lost ? "winner" : ""}`}>

                                </div>
                            </div>
                        </div>


                }
            </>
        </div>
    )
}

export default SelectedIcon
