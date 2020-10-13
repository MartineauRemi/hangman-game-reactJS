import React from 'react'
import PropTypes from 'prop-types'
import './Key.css'

const Key = ({letter, index, type, feedback, onClick}) => (
    <div className={`${type} ${feedback}`} index={index} feedback={feedback} onClick = {() => {onClick(index)}}>
        <span className='letter'>
            {letter}
        </span>
    </div>
)

Key.propTypes = {
    letter: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'visible',
        'hidden',
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Key;