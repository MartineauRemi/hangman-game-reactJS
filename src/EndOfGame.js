import React from 'react'
import PropTypes from 'prop-types'
import './EndOfGame.css'

const EndOfGame = ({message, onClick}) => (
    <div className='endOfGame'>
        <p className = 'msgEndOfGame'>{message}</p>
        <button className = 'btnEndOfGame' onClick={()=> {onClick()}}>PLAY AGAIN</button>
    </div>
)

EndOfGame.propTypes = {
    message: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
export default EndOfGame