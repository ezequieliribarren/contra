import React, { useEffect } from "react";
import { preLoaderAnim } from "../../js/preloader";

const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <div className="preloader">
            <div className="image-container">
                <img src="images/video.png" alt="Imagen 1" />
                <img src="images/lupa.png" alt="Imagen 2" />
                <img src="images/x.png" alt="Imagen 3" />
            </div>
        </div>
    );
};

export default PreLoader;
