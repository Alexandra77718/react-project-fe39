import { useState, useEffect } from "react";
import Title from '../../components/Title';
import Tabs from "../../components/Tabs";
import CardList, { MOCK_ARRAY } from '../../components/CardList';
import { CardType } from '../../components/Card/types';



const Home = () => {
    
    const [cardsList, setCardsList] = useState<CardType[]>([]);

    useEffect(() => {
        setCardsList(MOCK_ARRAY);
    }, [MOCK_ARRAY]);

    return (
        <div>
            <Title title={"Blog"} />
            <Tabs />
            <CardList cardList={cardsList} />
        </div>
    );
};

export default Home;