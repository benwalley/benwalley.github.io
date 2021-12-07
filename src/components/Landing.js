import React, {useEffect, useState} from 'react';
import Navigation from "./Navigation";
import AddGiftForm from './AddGiftForm';
import Wishlist from './Wishlist';
import { db, firebase } from "../firebase";
import './landing.css';

export default function Landing() {
    const [gift, setGift] = useState({})
    const [wishlistItems, setWishlistItems] = useState([])

    const [wishlistUsers, setUsers] = useState([])

    useEffect(() => {
        // if not logged in, redirect to sign in

        firebase.db.ref('users').on("value", snapshot => {
            setUsers(snapshot.val())
        });

        try {
            firebase.db.ref(`wishlists`).on("value", snapshot => {
                setWishlistItems(snapshot.val());
            });
        } catch (e) {

        }

    }, []);


    const setGiftItem = (name, value) => {
        const updatedGift = gift
        updatedGift[name] = value
        setGift({...updatedGift})
    }

    const getUserId = () => {
        try {
            return firebase.auth.currentUser.uid;
        } catch (e) {
            return ''
        }
    }

    const handleSubmit = async (e) => {
        const userId = getUserId()
        let dataCopy = wishlistItems || {};
        let myWishlist
        if(dataCopy && dataCopy[userId]) {
            myWishlist = JSON.parse(dataCopy[userId])
        } else {
            myWishlist = []
        }
        myWishlist.push(gift)
        db.doAddGift(userId, JSON.stringify(myWishlist));
    }



    return (
        <div>
            {getUserId() ?
                <>
                    <AddGiftForm setGiftItem={setGiftItem} gift={gift} handleSubmit={handleSubmit}/>
                    <Wishlist id={getUserId()}/>
                </>
                :
                <h1 className={"notLoggedIn"}>Please log in to continue</h1>
            }
        </div>
    );
}

