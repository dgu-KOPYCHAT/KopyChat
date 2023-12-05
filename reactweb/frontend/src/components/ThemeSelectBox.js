import React, { useState } from 'react';
import Select from 'react-select';

const optionsarray = [
    "monokai",
    "twilight",
    "terminal",
    "solarized_dark",
    "solarized_light",
    "github",
    "tomorrow",
    "kuroir",
    "xcode",
    "textmate",
]

const options = optionsarray.map((value)=>({
    value: value,
    label: value,
}));

const styles = {
    control: (css) => ({
        ...css,
        width: "140px"
      }),
};

const ThemeSelectBox = ({onSelect}) => {
    return (
        <Select onChange={(e)=>{onSelect(e.value)}} options={options} styles={styles}/>
    );
};

export default ThemeSelectBox;