import { Footer } from '../../Components/Footer';
import { Header } from '../../Components/Header';
import { charactersList, comicsDetailsList } from '../../Components/mockListItem/mockListItem';
import './character-details.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

type details = {
    title: string;
    description: string;
    Image: string;
  };
export const CharacterDetails = () => {
    const { id } = useParams();

    const [character, setCharacter] = useState<details | undefined>(undefined);
        useEffect(() => {
            const fetchData = async () => {
                if (id) {
                    setCharacter(charactersList[Number(id)]);
                }};
            fetchData();
        }, [id]);

    return (
        <div className="character-details">
            <Header />
            <div className="character-details__wrapper">
                <img src={character?.Image} alt="" className="character-details__image" />
                <div className="character-details__content">
                    <div className="character-details__info">
                        <h3 className="character-details__title">{character?.title}</h3>
                        <p className="character-details__description">{character?.description}</p>
                    </div>
                    <div className="character-details__comics">
                        <h5>Комиксы</h5>
                        {comicsDetailsList.map((comics) => (
                            <a target="blank" href={comics.link}>
                            {comics.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
  );
};