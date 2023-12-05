import React, { useState } from 'react';
import './EditorResultCSS.css';
import { ReactComponent as Arrow } from '../images/arrow.svg';

const ExpandableElement = ({result}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const setExpand = () => {
        setIsExpanded(true);
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <React.Fragment>
            <button className="absoluteButton" onClick={toggleExpand}>
                <Arrow className={`absoluteArrow ${isExpanded ? 'expanded' : ''}`}/>
            </button>
            <div className={`expandable-container ${isExpanded ? 'expanded' : ''}`}>
                <div className="expandable-content">
                    {result}
                </div>
            </div>
        </React.Fragment>
    );
};

export default ExpandableElement;
