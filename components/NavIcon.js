import React from "react";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";


const NavIcon = ({
    focused = true,
    name,
    color = "#262626",
    size = 30
}) => (
    <Ionicons
        name={name}
        color={focused ? color : "#999"}
        size={size}
    />
);

NavIcon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    focused: PropTypes.bool
};

export default NavIcon;
