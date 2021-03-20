import React, {useState} from 'react';
import faker from 'faker';
import RandomTile from './randomTile';
import cssColors from 'css-color-names';

export default function SoRandom(props) {
    const colorNames = Object.keys(cssColors);
    const populateFakeArray = (num) => {
        const arr = [];
        for (let i = 0; i < num; i++) {
            const categories = Object.keys(faker);
            const randomCategory = categories[Math.floor(Math.random()*categories.length)];
            const subCategories = Object.keys(faker[randomCategory]);
            const randomSubCategory = subCategories[Math.floor(Math.random()*subCategories.length)];

            if (faker[randomCategory][randomSubCategory] && {}.toString.call(faker[randomCategory][randomSubCategory]) === '[object Function]') {
                arr.push(JSON.stringify(faker[randomCategory][randomSubCategory].call()).split("\"")[1])
            }
        }

        return arr;
    }

    const [wordsArray, setWordsArray] = useState(populateFakeArray(100))

    document.body.style.backgroundColor = `${colorNames[Math.floor(Math.random() * colorNames.length)]}`;

    return (
        <div className="so-random-list">
            {wordsArray.map(word => {
                return <RandomTile words={word} />
            })}
        </div>
    )
}