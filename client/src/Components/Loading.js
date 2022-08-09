import React from "react";
import Images from ".././assets/Images";
import Lottie from "react-lottie";

export default function LoadingScreen() {
    const logoOptions = {
        loop: true,
        autoplay: true,
        animationData: Images.logos.loadingLogo,
    };
    const loadbarOptions = {
        loop: false,
        autoplay: true,
        animationData: Images.logos.loadingBar,
    };
    return (
        <>
            <div id="loadingScreen">
                <Lottie options={logoOptions} height={60} width={200} />
                <Lottie options={loadbarOptions} height={80} width={200} />
            </div>
        </>
    );
}
