import React, {useEffect, useState} from 'react';
import Wishlist from '../Wishlist'
import Navigation from "../Navigation";
import { firebase } from '../../firebase'

export default function ViewWishlistPage(props) {
    const [wishlistUsers, setWishlistUsers] = useState([])

    useEffect( () => {
        firebase.db.ref('users').on("value", snapshot => {
            setWishlistUsers(snapshot.val())
        });

    }, []);
    const getId = () => {
        const path = window.location.pathname;
        return path.split('/wishlist/')[1]
    }

    const getUserId = () => {
        try {
            return firebase.auth.currentUser.uid;
        } catch (e) {
            return ''
        }
    }

    const getContents = () => {
        if(!getUserId()) {
            return <h1>You must be logged in to see this wishlist</h1>
        } else if ( getId() !== getUserId()){
            return <Wishlist id={getId()}/>
        }
        return <h1>This is your wishlist, You can't see it</h1>
    }

    const getUserName = () => {
        const id = getId();
        try {
            return `${wishlistUsers[id].name}'s`
        } catch(e) {
            return ''
        }
    }

    return (
        <div>
            <h1 className={"pageTitle"}>{getUserName()} wishlist</h1>
            {getContents()}
        </div>
    );
}

