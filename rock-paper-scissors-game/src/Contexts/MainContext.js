import { createContext, useState } from "react"

export const MainContext = createContext();

const MainContextProvider = (props) => {
    const [show, setShow] = useState(false)
    const [playAgain, setPlayAgain] = useState(false)
    const [selected, setSelected] = useState([{ id: "", iconName: "" }]);
    const [result, setResult] = useState("")
    const [score, setScore] = useState(0)
    const [number, setNumber] = useState()
    const win = "you win"
    const lost = "you lose"
    const draw = "draw"
    const gameStep = [
        {
            id: 1,
            icon: "selectedPaper"
        },
        {
            id: 2,
            icon: "selectedScissors"
        },
        {
            id: 3,
            icon: "selectedRock"
        },
    ]

    const scoreTable = () => {
        if (result === win) {
            setScore((prev) => prev + 1)
        } else if (result === lost) {
            setScore((prev) => prev - 1)

        }
    }

    const RandomNumber = () => {
        setTimeout(() => {
            const number = Math.ceil(Math.random() * 3)
            setNumber(number)
        }
            , 1000)

    }

    const gameResult = (number) => {
        if (Number(selected[0].id) < number) {
            if (Number(selected[0].id) === 1) {
                if (number === 3) {
                    setResult(win)
                } else {
                    setResult(lost)
                }

            } else {
                setResult(lost)
            }

        } else if (Number(selected[0].id) === number) {
            setResult(draw)
        } else if (Number(selected[0].id) > number) {
            if (number === 1) {
                if (Number(selected[0].id) === 3) {
                    setResult(lost)
                } else {
                    setResult(win)
                }
            } else {
                setResult(win)
            }


        }
        else {
            setResult(lost)
        }
    }
    const methods = {
        show,
        setShow,
        selected,
        setSelected,
        playAgain,
        setPlayAgain,
        gameStep,
        gameResult,
        result,
        win,
        lost,
        score,
        scoreTable,
        number,
        RandomNumber,
    }

    return (
        <MainContext.Provider value={methods}>
            {props.children}
        </MainContext.Provider>
    )

}
export default MainContextProvider;
