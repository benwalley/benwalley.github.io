import React, {useEffect, useState} from 'react';
import './index.css'

export default function AddGiftForm(props) {

    const {setGiftItem, gift, handleSubmit} = props
    const [isExpanded, setIsExpanded] = useState(false)

    const makeSimpleInput = (name, displayName, type) => {
        return (
            <div key={name} className={"formItem"}>
                <label htmlFor={name}>
                    {`${displayName}:`}
                </label>
                <input className="input" id={name} type={type || 'text'} value={gift[name]} onChange={(e) => {setGiftItem(name, e.target.value)}}/>
            </div>
        )
    }

    const doHandleSubmit = () => {
        setIsExpanded(false)
        handleSubmit()
    }

    return (
        <>
            <button className={"addWishlistButton"} onClick={()=>setIsExpanded(!isExpanded)}>Add Something to your Wishlist</button>
            {isExpanded &&
                <>
                    <div className="popupBackground" onClick={() => setIsExpanded(false)}></div>
                    <div className={"addForm"}>
                        <h2 className={"wishlistTitle"}>Add an item to your wishlist</h2>
                        <form>
                            {makeSimpleInput('name', 'Name')}
                            {makeSimpleInput('image_url', 'Image url')}
                            {makeSimpleInput('link', 'Link')}
                            {makeSimpleInput('price', 'Approximate Price', "number")}
                            {makeSimpleInput('notes', 'Notes')}
                        </form>
                        <button className={"blueButton"} onClick={doHandleSubmit}>Add To Wishlist</button>
                    </div>
                </>}
        </>
    );
}

