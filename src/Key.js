import React from 'react'
import PropTypes from 'prop-types'
import './Key.css'

const Key = ({letter, index, feedback, onClick}) => (
    <div className={`key ${feedback}`}>
        <span className='letter' index={index} feedback={feedback} onClick = {() => {onClick(index)}}>
            {letter}
        </span>
    </div>
)

Key.propTypes = {
    letter: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    feedback: PropTypes.oneOf([
        'visible',
        'hidden',
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Key;