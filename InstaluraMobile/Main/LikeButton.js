import { IconButton } from "./styles";
import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";

export function LikeButton({ liked }) {
    return (
        <IconButton>
                <Icon
                    name={liked ? "md-heart" : "md-heart-empty"}
                    color={liked ? "#ff0000" : "#000"}
                    size={25}
                />
        </IconButton>
    )
}