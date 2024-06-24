
const Card = ({title, body}) => {
    const style = {
        borderRadius:"12px",
        boxShadow:"0 0 10px rgba(0,0,0,0.2)",
        border:"1px solid #ccc",
        padding:"15px",
        backgroundColor:"#DDD",
        margin :"12px 0"
    }
  return (
    <div className="card" style={style}> 
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
  )
}

export default Card;