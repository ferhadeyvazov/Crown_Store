import React from 'react'

function Items({ title, imageUrl }) {
    return (
        <>
            <div className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </>

    )
}

export default Items