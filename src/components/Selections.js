import React from 'react'
//style
import "../styles/selection.css"

export default function Selections(props) {
    const {selection} = props;
    return (
        <div className="selection">
            <div className="title">{selection.title}</div>
            <div className="img">{selection.img}</div>
            <div className="description">{selection.description}</div>
        </div>
    )
}
