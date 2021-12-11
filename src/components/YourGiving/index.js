import React from 'react';
import "./main.css"


export default function YourGiving(props) {
    const {wishlists, userId, getUserById} = props


    const getYourItems = () => {
        const returnItems = []
        if(!wishlists) return [];
        for(const wishlist in wishlists) {
            const parsedWishlist = JSON.parse(wishlists[wishlist])
            const userName = getUserById(wishlist).name;
            for(const item of parsedWishlist) {
                if(item.gotten && item.gotten.includes(userId)) {
                    returnItems.push(<div className={"givingItem"}>
                        <div className={"givingItemPerson"}>
                            {userName}
                        </div>
                        <div className={"givingItemName"}>
                            {item.name}
                        </div>
                    </div>)
                }
            }
        }
        return returnItems;
    }
    return (
        <div className={"yourGivingContainer"}>
            <h2 className={"yourGivingTitle"}>You're giving:</h2>
            {getYourItems()}
        </div>
    );
}

