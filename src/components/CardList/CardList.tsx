import React, { FC } from 'react';
import Card from '../Card';
import { CardSize, CardType } from '../Card/types';
import styles from './CardList.module.scss';

// export type MOCK_ARRAY_Type = {
//     id: number;
//     image: string;
//     text: string;
//     date: string;
//     lesson_num: number;
//     title: string;
//     description: string;
//     author: number;
// } [];

export const MOCK_ARRAY = [
    {
        id: 0,
        image:
          "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
          "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 1,
        image:
          "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
          "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 2,
        image:
          "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
          "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 3,
        image:
          "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
          "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 4,
        image:
          "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
          "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 5,
        image:
          "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
          "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 6,
        image:
          "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
          "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 7,
        image:
          "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
          "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 8,
        image:
          "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
          "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
    {
        id: 9,
        image:
          "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "12-10-2023",
        lesson_num: 12,
        title:
          "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        description: "Описание поста",
        author: 10,
    },
]

type CardListProps = {
    cardList: CardType[];
};
const CardsList: FC<CardListProps> = ({ cardList }) => {
    return cardList.length > 0 ? (
        <div className={styles.container}>
            <div>
                <Card card={cardList[0]} size={CardSize.Large} />
                <div className={styles.mediumContainer}>
                    {cardList.map((item, index) => {
                        if (index > 0 && index < 5) {
                            return <Card key={item.id} card={item} size={CardSize.Medium} />;
                        }
                    }
                    )}
                </div>
            </div>
            <div className={styles.rightSideContainer}>
                {cardList.map((item, index) => {
                    if (index > 5) {
                        return <Card key={item.id} card={item} size={CardSize.Small} />;
                    }
                }
                )}
            </div>
        </div>
    ) : null;      
};

export default CardsList;