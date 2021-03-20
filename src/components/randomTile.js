import React from 'react';
import cssColors from 'css-color-names';
import seedrandom from 'seedrandom';

export default function RandomTile(props) {
    seedrandom(props.words, {global: true, entropy: true});
    const borderStyles = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'];
    const animationStyles = ['spin 20s linear infinite', 'move 20s linear infinite', 'fade 2s linear infinite']
    const colorNames = Object.keys(cssColors);

    const startingLeft = `${Math.random()*100}vw`;
    const goingToLeft = `${Math.random()*100}vw`;
    const startingTop = `${Math.random()*100}vh`;
    const goingToTop = `${Math.random()*100}vh`;

    const style = {
        width: `${Math.random() * 500}px`,
        height: `${Math.random() * 500}px`,
        border: `${Math.random() * 15}px ${borderStyles[Math.floor(Math.random()*borderStyles.length)]} ${colorNames[Math.floor(Math.random() * colorNames.length)]}`,
        color: `${colorNames[Math.floor(Math.random() * colorNames.length)]}`,
        backgroundColor: `${colorNames[Math.floor(Math.random() * colorNames.length)]}`,
        zIndex: Math.floor(Math.random*1000)-500,
        left: startingLeft,
        top: startingTop,
        position: "absolute",
        animation: `${animationStyles[Math.floor(Math.random()*animationStyles.length)]}`
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
        <>
            <div style={style}>
                {content}
            </div>
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    50% { transform: rotate(${Math.random()*360}deg); }
                    100% { transform: rotate(0deg); }
                }
            `}</style>
            <style>{`
                @keyframes move {
                    0% { left: ${startingLeft}; top: ${startingTop} }
                    50% { left: ${goingToLeft}; top: ${goingToTop} }
                    100% { left: ${startingLeft}; top: ${startingTop} }
                }
            `}</style>
            <style>{`
                @keyframes fade {
                    0% { opacity: 0; }
                    50% { opacity: ${Math.random()*100}; }
                    100% { opacity: 0; }
                }
            `}</style>
        </>
    )
}