import React from 'react';
import cssColors from 'css-color-names';

export default function RandomTile (props) {
    const borderStyles = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'];
    const colorNames = Object.keys(cssColors);

    const style = {
        width: `${Math.random() * 500}px`,
        height: `${Math.random() * 500}px`,
        border: `${Math.random() * 15}px ${borderStyles[Math.floor(Math.random()*borderStyles.length)]} ${colorNames[Math.floor(Math.random() * colorNames.length)]}`,
        color: `${colorNames[Math.floor(Math.random() * colorNames.length)]}`,
        backgroundColor: `${colorNames[Math.floor(Math.random() * colorNames.length)]}`,
        zIndex: Math.floor(Math.random*1000)-500,
        left: `${Math.random()*100}vw`,
        top: `${Math.random()*100}vh`,
        position: "absolute",
    }

    let content;
    if (props.words) {
        if (props.words.startsWith("http")) {
            content = <img src={props.words} alt="randomness"/>;
        } else {
            content = <p>{props.words}</p>
        }
    }

    return (
        <div style={style}>
            {content}
        </div>
    )
}