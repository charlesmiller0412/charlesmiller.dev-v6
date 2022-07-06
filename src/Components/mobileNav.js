import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class MobileNav extends React.Component {
    render() {
        return (
            <div id="mobileNav">
                <FontAwesomeIcon icon={faBars} />
            </div>
        );
    }
}
