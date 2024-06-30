import "../css/staffcard.css";

const Card = ({ photo, title, body }) => {
    const style = {
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        border: "1px solid #ccc",
        padding: "15px",
        backgroundColor: "#DDD",
        margin: "12px 21px",
        cursor: "pointer"
    }

    const staffheadingstyle = {
        // padding: "10px",
        fontSize: "1.1rem",
        fontWeight: "600",
        textShadow: "1px 1px 6px rgb(106, 104, 104)",
        textAlign: "center"
    }

    const staffbodystyle ={
        fontSize: "0.8rem",
        fontWeight: "300",
        textAlign: "center"
    }

    return (
        <div className="staff-card" style={style}>
            <img src={photo}  style={{ width: "200px", borderRadius: "100px" }} />
            <h4 style={staffheadingstyle}>{title}</h4>
            <p style={staffbodystyle}>{body}</p>
        </div>
    )
}

export default Card;
