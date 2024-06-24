import React, { useState } from 'react';

const FormCard = ({ title, content }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const style = {
        width: "600px",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        border: "1px solid #ccc",
        padding: "15px",
        backgroundColor: "hsla(0, 100%, 98%, 0.886)",
        margin: "12px 0",
        marginBottom: "30px"
    }

    const formHeadingStyle = {
        padding: "10px",
        fontSize: "1.8rem",
        fontWeight: "bold",
    }

    const formContent = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isActive ? "rgb(26, 150, 50)" : (isHovered ? "rgb(26, 200, 50)" : "rgb(26, 224, 83)"),
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        padding: "10px",
        transition: "background-color 0.3s",
        cursor: "pointer"
    }

    const incontent = {
        textAlign: "center",
        fontSize: "1.1rem",
        fontWeight: "bold",
    }

    return (
        <div className="form-card" style={style}>
            <h2 style={formHeadingStyle}>{title}</h2>
            <div className="content-base">
                <div
                    style={formContent}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setIsActive(!isActive)}
                >
                    <p style={incontent}>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default FormCard;
