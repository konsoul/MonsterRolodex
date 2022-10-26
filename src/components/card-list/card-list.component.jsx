import CardContainer from "../card-container/card-container";
import './card-list.styles.css'

//Remember functional components only get two arguments, the first is the proper
const CardList = ({ monsters }) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        return <CardContainer monster={ monster } key={monster.id}/>
      })} 
  </div>
  )
}

export default CardList