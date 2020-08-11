import React from 'react'
import './css/sample-wallpaper.css'

function Wallpaper(props) {
    return (
        
            <article class="wallpaper">
            <img src={props.pic} alt="Wallpaper #1" class="wallpaper" />
            </article>
        
    )
}

export default Wallpaper
