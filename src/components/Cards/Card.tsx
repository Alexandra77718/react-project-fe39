import React, {FC} from "react";
import { CardProps } from "./types";


const Card:FC<CardProps> = ({card, size}) => {
    const {title, text, date, image  } = card;
    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>{title}</div>
                        <div>{date}</div>
                    </div>
                    <div>{text}</div>
                </div>
                <img src={image} />
            </div>
            <div>
                <div></div>
                <div></div>
            </div>

        </div>);
}

export default Card;