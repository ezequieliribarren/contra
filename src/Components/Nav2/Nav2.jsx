import React, { useState } from 'react';
import What from '../What/What';

const Nav2 = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return (
        <>
            <a className="project-bottom-right-button">Abstract</a>
            <a className="project-top-right-button" onClick={handleOpen}>
                What
            </a>
            {open && <What onClose={handleClose} />}
        </>
    );
}

export default Nav2;
