const Item = ({ name, img }) => {
    return(
        
        <li> 
            <img src={img} alt={name} />
            <br/>
            {name} 
            </li>
    )
}

export default Item