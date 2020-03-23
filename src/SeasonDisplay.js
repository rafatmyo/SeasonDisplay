import React from 'react';

const SeasonConfig = {
    summer : {
        text: "Let's hit the Beach",
        iconName: 'sun'
    },
    winter : {
        text: "Burh it's cold",
        iconName: 'snowflake'
    }
};
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer': 'winter';
    } else {
        return lat > 0 ? 'winter': 'summer';
    }

};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = SeasonConfig[season];
    return (
        <div>
            <i className={`${iconName} massive icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} massive icon`} />
        </div>
    );

};

export default SeasonDisplay;