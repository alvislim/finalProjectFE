import React  from 'react';
import Cards  from '../general/Cards';
import styles from './styles.module.css'


function ItemCard(props) {
    return (
        <div>
            {props.userItem!==[] && 
            <div className={styles.cards}>
            {props.userItem.map((items,i) => {
                if(items.desiredPrice <= items.price) {
                    return (
                        <Cards payload={items} key={i} handleDelete={props.handleDelete} handleNavigate={props.handleNavigate} priceMet={true} />
                    )
                } else {
                    return (
                        <Cards payload={items} key={i} handleDelete={props.handleDelete} handleNavigate={props.handleNavigate} />
                    )
                }

            })}
            </div>
            }
            </div>
    )
}

export default ItemCard;