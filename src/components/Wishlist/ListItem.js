import React, {useEffect, useState} from 'react';
import './listItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUserFriends, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {firebase, db} from "../../firebase";



export default function ListItem(props) {
    const {item, isListOwner, getItem, index, handleDelete, askToGoIn, updateWishlistItem} = props
    const [wishlistUsers, setWishlistUsers] = useState([])

    useEffect( () => {
        firebase.db.ref('users').on("value", snapshot => {
            setWishlistUsers(snapshot.val())
        });
        // confirmItemGetters()
        // confirmItemWantToGetters()
    }, []);

    const getPrice = (price) => {
        return formatter.format(price);
    }

    const confirmItemGetters = async () => {
        if(!item.gotten) return
        const getters = item.gotten;
        for(const person of getters) {
            if(!wishlistUsers[person]) {
                // if the person doesn't exist anymore, call the getItem method, which will remove them if they're already on the list
                const updatedItem = item
                updatedItem.gotten.splice(item.gotten.indexOf(person), 1)
                await updateWishlistItem(updatedItem, index)
            }
        }
    }

    const confirmItemWantToGetters = async () => {
        if(!item.wantToGet) return
        const getters = item.wantToGet;
        for(const person of getters) {
            if(!wishlistUsers[person]) {
                // if the person doesn't exist anymore, call the getItem method, which will remove them if they're already on the list
                const updatedItem = item
                updatedItem.wantToGet.splice(item.wantToGet.indexOf(person), 1)
                await updateWishlistItem(updatedItem, index)
            }
        }
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
        if(!isListOwner && itemData.gotten && item.gotten.length > 0 && itemData.gotten.indexOf(getUserId()) === -1) {
            return "listItemGotten"
        }
        if(!isListOwner && itemData.wantToGet && item.wantToGet.length > 0 && itemData.wantToGet.indexOf(getUserId()) > -1) {
            return "listItemWantToGet"
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

    const getWantsToGetList = (item) => {
        return item.wantToGet.map((name, index) => {
            if(name && wishlistUsers && wishlistUsers[name]) {
                return (<span className="wantsToGetListName" key={name}> {index > 0 ? 'and ' : ''}{wishlistUsers[name].name}</span>)
            }
        })
    }

    const getWantsToGetSuffix = (item) => {
        return item.wantToGet.length === 1 ? ' wants someone to go in with them on this' : ' want someone to go in with them on this'
    }

    return (
        <div className={getItemClassName(item)}>
            {item.image_url && <img className={"image"} src={item.image_url} alt={item.name}/>}
            <div className={"name"}>{item.name}</div>
            {item.link && <a className={"link"} href={item.link}>Visit link</a>}
            {item.price && <div className={"price"}>Approximate price: {getPrice(item.price)}</div>}
            {item.notes && <div className={"notes"}><b>Notes:</b> {item.notes}</div>}
            <div className={"actionButtons"}>
                {(isListOwner || (!isListOwner && item.isCustom && item.gotten.includes(getUserId()))) && <button onClick={() => handleDelete(index, item)} title="delete"><FontAwesomeIcon icon={faTrash} /></button>}
                {!isListOwner && <button onClick={() => getItem(index, item)} title="Click if you are getting this"><FontAwesomeIcon icon={faShoppingCart} /></button>}
                {!isListOwner && <button onClick={() => askToGoIn(index, item)} title="I want to get this with other people"><FontAwesomeIcon icon={faUserFriends} /></button>}
            </div>
            {item.wantToGet && item.wantToGet.length > 0 && !isListOwner && !(item.gotten && item.gotten.length > 0) &&<div className={'wantsToGetList'}>{getWantsToGetList(item)}{getWantsToGetSuffix(item)}</div>}
            {item.gotten && item.gotten.length > 0 && !isListOwner && item.gotten.includes(getUserId()) && <div className={'youGotThis'}>You're getting this</div>}
            {item.gotten && item.gotten.length > 0 && !isListOwner && !item.gotten.includes(getUserId()) && <div className={'gottenCover'}>Gotten by:{getGottenByList(item)}</div>}
        </div>
    );
}

