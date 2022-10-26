import './card-container.styles.css'

const CardContainer = ({ monster }) => {
  const { id, name, email } = monster;
  console.log(id)
  return(
    <div className="card-container">
      <img alt ={`monster ${name}`} src ={`https://robohash.org/${id}?set=set2&size=180x180`}/>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default CardContainer
