import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return (
        <>
            <h1 className="header">{title}</h1>
            <h3 title="My Header" data-testid="header-3" className="header">Hello</h3>
            <h3 >Goodby</h3>
        </>
    )
}
