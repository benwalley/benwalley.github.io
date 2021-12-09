import React, {useEffect, useState} from 'react';
import ListItem from './ListItem'
import {db, firebase} from "../../firebase";
import './wishlist.css'

export default function Wishlist(props) {
    const {id} = props
    const [wishlistData, setWishlistData] = useState([])
    const [isListOwner, setIsListOwner] = useState(true)
    const [customName, setCustomName] = useState('')

    const handleAddCustomItem = (e) => {
        e.preventDefault()
        const userId = getUserId()
        const listId = id;
        let dataCopy = wishlistData; // an array of items (each one is an object)
        let wishlistCopy
        if(dataCopy && dataCopy[listId]) {
            wishlistCopy = JSON.parse(wishlistData[id])
        } else {
            wishlistCopy = []
        }
        wishlistCopy.push({
            name: customName,
            gotten: [userId],
            isCustom: true
        })

        setCustomName('')

        db.doAddGift(listId, JSON.stringify(wishlistCopy));
    }

    const askToGoIn = (index, item) => {
        // update the item data to have you as one of the wantToGetters
        if(item.wantToGet) {
            if(item.wantToGet.indexOf(getUserId()) > -1) {
                //  If you already got it, remove it
                item.wantToGet.splice(item.wantToGet.indexOf(getUserId()), 1)
            } else {
                item.wantToGet.push(getUserId())
                item.wantToGet = [...new Set(item.wantToGet)]
            }
        } else {
            item.wantToGet = [getUserId()]
        }
        // update whole list with the updated item
        const listId = id;
        let dataCopy = wishlistData; // an array of items (each one is an object)
        let wishlistCopy
        if(dataCopy && dataCopy[listId]) {
            wishlistCopy = JSON.parse(wishlistData[id])
        } else {
            wishlistCopy = []
        }
        wishlistCopy[index] = item;
        db.doAddGift(listId, JSON.stringify(wishlistCopy));
    }

    const handleDelete = (index, item) => {
               // update whole list with the updated item
        const listId = id;
        let dataCopy = wishlistData; // an array of items (each one is an object)
        let wishlistCopy
        if(dataCopy && dataCopy[listId]) {
            wishlistCopy = JSON.parse(wishlistData[id])
        } else {
            wishlistCopy = []
        }
        wishlistCopy.splice(index, 1);
        db.doAddGift(listId, JSON.stringify(wishlistCopy));
    }

    useEffect(() => {
        setIsListOwner(getUserId() === id)
        try {
            firebase.db.ref(`wishlists`).on("value", snapshot => {
                setWishlistData(snapshot.val());
            });
        } catch (e) {

        }

    }, []);

    const getUserId = () => {
        try {
            return firebase.auth.currentUser.uid;
        } catch (e) {
            return ''
        }
    }

    const shouldShow = (item) => {
        if(isListOwner && !item.isCustom) {
            // if you're the owner, you should see all of your items, no matter what. (unless they're deleted) // add later
            return true;
        }
        if(isListOwner && item.isCustom) {
            return false;
        }
        return true;
    }

    const getItem = (index, item) => {
        // update the item data to have you as one of the getters
        if(item.gotten) {
            if(item.gotten.indexOf(getUserId()) > -1) {
                //  If you already got it, remove it
                item.gotten.splice(item.gotten.indexOf(getUserId()), 1)
            } else {
                item.gotten.push(getUserId())
                item.gotten = [...new Set(item.gotten)]
            }
        } else {
            item.gotten = [getUserId()]
        }
        // update whole list with the updated item
        const listId = id;
        let dataCopy = wishlistData; // an array of items (each one is an object)
        let wishlistCopy
        if(dataCopy && dataCopy[listId]) {
            wishlistCopy = JSON.parse(wishlistData[id])
        } else {
            wishlistCopy = []
        }
        wishlistCopy[index] = item;
        db.doAddGift(listId, JSON.stringify(wishlistCopy));
    }

    const updateWishlistItem = (newItem, index) => {
        const listId = id;
        let dataCopy = wishlistData;
        let wishlistCopy
        if(dataCopy && dataCopy[listId]) {
            wishlistCopy = JSON.parse(wishlistData[id])
        } else {
            wishlistCopy = []
        }
        wishlistCopy[index] = newItem;
        db.doAddGift(listId, JSON.stringify(wishlistCopy));
    }

    const listItems = () => {
        if (!wishlistData || wishlistData.length < 1 || !wishlistData[id]) return
        const parsedItems = JSON.parse(wishlistData[id])
        return parsedItems.map((item, index) => {
                //Don't show things that have been gotten if you are the list owner
                if (shouldShow(item)) {
                    return <ListItem key={index} item={item} isListOwner={isListOwner} getItem={getItem} index={index} handleDelete={handleDelete} askToGoIn={askToGoIn} updateWishlistItem={updateWishlistItem}/>

                }
            }
        )
    }

    return (
        <div className={"listContainer"}>
            {listItems()}
            {!isListOwner &&
            <div className="customItem">
                <h3>Get something that's not on the list</h3>
                <input value={customName} onChange={(e) => setCustomName(e.target.value)} className={"customItemName"} type="text" placeholder="What are you getting?"/>
                <button className={"addCustomButton"} onClick={handleAddCustomItem}>Add</button>
            </div>}
        </div>
    );
}

