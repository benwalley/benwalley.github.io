import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import * as routes from "../constants/routes";
import SignOutButton from './SignOut';
import {auth} from '../firebase/firebase';
import './navigation.css'
import {firebase, db} from "../firebase";
import { Redirect } from "react-router-dom";



export default function Navigation(props) {
    const [user, setUsername] = useState('')
    const [popupOpen, setPopupOpen] = useState(false)
    const [wishlistUsers, setWishlistUsers] = useState([])
    const [wishlists, setWishlists] = useState()

    useEffect( () => {
        const currentUserId = getUserId()
        firebase.db.ref('users/' + getUserId()).on("value", snapshot => {
            setUsername(snapshot.val());
        });
        firebase.db.ref('users').on("value", snapshot => {
            setWishlistUsers(snapshot.val())
        });

        try {
            firebase.db.ref(`wishlists`).on("value", snapshot => {
                setWishlists(snapshot.val());
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


    const getWishlists = () => {
        const wishlistArray = [];
        for(const user in wishlistUsers) {
            // make sure the wishlist is not yours, and the user has a wishlist
            if(user !== getUserId() && wishlists[user]) {
                wishlistArray.push(
                    <div key={user} className={"popupItem"}>
                        <Link to={'/wishlist/' + user}>
                            {wishlistUsers[user].name}
                        </Link>
                    </div>
                )
            }

        }
        return wishlistArray
    }

    const getName = () => {
        try {
            return wishlistUsers[user].name;
        } catch(e) {
            return "Home"
        }
    }


    return (
        <div className="navbar">
            {auth.currentUser === null ? (
                    <Link to={routes.SIGN_IN}>
                        <button>SignIn/SignUp</button>
                    </Link>
                ) :
                (<>
                        <button className={"blueButton"} onClick={() => setPopupOpen(!popupOpen)}>View other wishlists</button>
                        <h2>
                            <Link to={'/'}>
                                {getName()}
                            </Link>
                        </h2>
                        <SignOutButton/>
                        {popupOpen && <>
                            <div className="popupBackground" onClick={() => setPopupOpen(false)}></div>
                            <div className={"popup"}>
                                <h2 className="ppTitle">Check out someone else's wishlist</h2>
                                {getWishlists()}
                            </div>
                            </>}
                    </>
                )
            }
        </div>
    )
}

