import React from "react"

// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
    return (
        <button type="submit">{children}</button>
    )
}

export default Button;