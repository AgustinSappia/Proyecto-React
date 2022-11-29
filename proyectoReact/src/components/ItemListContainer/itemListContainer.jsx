import "./ItemListContainer.css"

const ItemListContainer = (props) => {
  return (
    <div className="itemListContainer">
    <ul className="itemListContainerUl">
        <p className="itemListContainerP">{props.titulo}</p>
        <li>{props.ele1}</li>
        <li>{props.ele2}</li>
    </ul>
    </div>
  )
}

export default ItemListContainer