import React, { useEffect } from "react";
import { preLoaderAnim } from "../../js/preloader";

const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <div className="preloader">
            <div className="texts-container">
                <div className="preloader-1">
                    <h1 className="span-contra">CONTRA</h1>
                </div>
                <div className="preloader-2">
                    <h2>Architecture</h2>
                </div>

            </div>
        </div>
    );
};

export default PreLoader;
