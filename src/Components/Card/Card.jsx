import React from 'react'
import styles from './Card.module.css'
import PropTypes from 'prop-types'

const Card = ({ id, imgSrc, title, desc }) => {
    return (
        <div className={styles.cardDiv}>
            <img className={styles.img} src={imgSrc} alt="" />
            <h1>{id}</h1>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
}
export default Card