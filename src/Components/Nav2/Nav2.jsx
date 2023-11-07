import React, { useState } from 'react';
import What from '../What/What';

const Nav2 = ({ onAbstractClick, onWhatClick }) => {
    const [openAbstract, setOpenAbstract] = useState(false);
    const [openWhat, setOpenWhat] = useState(false);

    const handleClose = () => {
        setOpenAbstract(false);
        setOpenWhat(false);
    };

    const handleAbstractClick = () => {
        if (onAbstractClick) {
            onAbstractClick();
        }
        setOpenAbstract(true);
    };

    const handleWhatClick = () => {
        if (onWhatClick) {
            onWhatClick();
        }
        setOpenWhat(true);
    };

    return (
        <>
            <a className="project-bottom-right-button" onClick={handleAbstractClick}>
                Abstract
            </a>
            <a className="project-top-right-button" onClick={handleWhatClick}>
                What
            </a>
            {(openAbstract || openWhat) && <What onClose={handleClose} />}
        </>
    );
}

export default Nav2;
