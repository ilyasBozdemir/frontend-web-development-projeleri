import React, { useContext } from 'react'
import { MainContext } from '../Contexts/MainContext'
import GamePage from './GamePage'
import Modal from './Modal'
import SelectedIcon from './SelectedIcon'

const PlayGame = () => {
    const { show, setShow, selected, playAgain } = useContext(MainContext)

    return (
        <>
            {
                !selected[0].id || playAgain === false ? <GamePage /> : <SelectedIcon />
            }


            <Modal show={show} onClose={() => setShow(false)} />
        </>
    )
}

export default PlayGame
