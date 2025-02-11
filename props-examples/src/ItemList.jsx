import React from 'react'

const ItemList = ({ items }) => {
    return (
        <div>

            <ul>
                {
                    items.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>

        </div>
    )
}

export default ItemList