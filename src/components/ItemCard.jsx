import React from 'react'

const ItemCard = ({ text }) => {
    return (
        <div className='drop-shadow-md bg-white px-7 py-3 dark:bg-[#2b3743]'>{text}</div>
    )
}

export default ItemCard