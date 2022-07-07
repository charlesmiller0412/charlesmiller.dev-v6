import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function MobileNav() {
    return (
        <div id="mobileNav">
            <div id="mobileNav__close">
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div id="mobileNav__open">
                <FontAwesomeIcon icon={faXmark} />
            </div>
        </div>
    );
}
