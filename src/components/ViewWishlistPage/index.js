import React, {useEffect, useState} from 'react';
import Wishlist from '../Wishlist'
import Navigation from "../Navigation";
import { firebase } from '../../firebase'

export default function ViewWishlistPage(props) {
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

    return (
        <div>
            {getId() !== getUserId() ?
                <Wishlist id={getId()}/>
                :
                <h1>This is your wishlist, You can't see it</h1>
            }

        </div>
    );
}

