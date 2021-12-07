import React, {useEffect, useState} from 'react';
import './listItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUserFriends, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {firebase} from "../../firebase";


export default function ListItem(props) {
    const {item, isListOwner, getItem, index, handleDelete, askToGoIn} = props
    const [wishlistUsers, setWishlistUsers] = useState([])

    useEffect( () => {
        firebase.db.ref('users').on("value", snapshot => {
            setWishlistUsers(snapshot.val())
        });

    }, []);

    const getPrice = (price) => {
        return formatter.format(price);
    }



    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const getUserId = () => {
        try {
            return firebase.auth.currentUser.uid;
        } catch (e) {
            return ''
        }
    }

    const getItemClassName = (itemData) => {
        if(itemData.gotten && itemData.gotten.indexOf(getUserId()) > -1) {
            return "listItemGottenYou"
        }
        if(itemData.gotten && item.gotten.length > 0 && itemData.gotten.indexOf(getUserId()) === -1) {
            return "listItemGotten"
        }
        return "listItem"
    }

    const getGottenByList = (item) => {
        return item.gotten.map(name => {
            if(name && wishlistUsers && wishlistUsers[name]) {
                return (<span key={name}> {wishlistUsers[name].name}</span>)
            }
        })
    }

    return (
        <div className={getItemClassName(item)}>
            {item.image_url && <img className={"image"} src={item.image_url} alt={item.name}/>}
            <div className={"name"}>{item.name}</div>
            {item.link && <a className={"link"} href={item.link}>Visit link</a>}
            {item.price && <div className={"price"}>Approximate price: {getPrice(item.price)}</div>}
            {item.notes && <div className={"notes"}>Notes: {item.notes}</div>}
            <div className={"actionButtons"}>
                {(isListOwner || (!isListOwner && item.isCustom && item.gotten.includes(getUserId()))) && <button onClick={() => handleDelete(index, item)} title="delete"><FontAwesomeIcon icon={faTrash} /></button>}
                {!isListOwner && <button onClick={() => getItem(index, item)} title="Click if you are getting this"><FontAwesomeIcon icon={faShoppingCart} /></button>}
                {!isListOwner && <button onClick={() => askToGoIn(index, item)} title="I want to get this with other people"><FontAwesomeIcon icon={faUserFriends} /></button>}
            </div>
            {item.gotten && item.gotten.length > 0 && !isListOwner && !item.gotten.includes(getUserId()) && <div className={'gottenCover'}>Gotten by:{getGottenByList(item)}</div>}
        </div>
    );
}

