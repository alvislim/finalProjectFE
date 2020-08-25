import React, { useState, useEffect }       from 'react';
import api                                  from '../../api';
import Cards                                from '../general/Cards';
// import { useHistory }                 from "react-router-dom";
import styles                               from './styles.module.css'


function ItemCard(props) {
    const [ userItem, setUserItem ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    // let history = useHistory();
    // fetch api for data

    // call the api
    useEffect(() => {
        const getUserItems = async() => {
            try {
                let getEmail = await api.verifyUser()
                setIsLoading(true)
                let email = getEmail.data
                let getItemData = await api.getItem(email)
                if (getItemData.data.success) {
                    setUserItem(getItemData.data.payload)
                    setIsLoading(false)
                } else {
                    return;
                }
            } catch (err) {
                console.log(err)
            }
        }
        getUserItems();
    },[])

    const handleDelete = async (id) => {
        try {
            const data = { id: id }
            const response = await api.deleteItem(data)
            console.log(response)
            if(response.data.success) window.location.reload(false);
        } catch (err) {
            console.log(err)
        }
    }
    

    return (
        <div className={styles.cards}>
            {userItem.map((items,i) => {
                if(items.desiredPrice <= items.price) {
                    return (
                        <Cards payload={items} key={i} handleDelete={handleDelete} priceMet={true}/>
                    )
                } else {
                    return (
                        <Cards payload={items} key={i} handleDelete={handleDelete} />
                    )
                }

            })}
        </div>
    )
}

export default ItemCard;