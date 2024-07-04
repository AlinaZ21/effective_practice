import { Footer } from '../../Components/Footer';
import { Header } from '../../Components/Header';
import { comicsList, characterDetailsList } from '../../Components/mockListItem/mockListItem';
import './comics-details.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
type details = {
  title: string;
  fulldescription: string;
  Image: string;
};
export const ComicsDetails = () => {
  const { id } = useParams();

  const [comics, setComics] = useState<details | undefined>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setComics(comicsList[Number(id)]);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="comics-details">
      <Header />
      <div className="comics-details__wrapper">
        <img src={comics?.Image} alt="" className="comics-details__image" />
        <div className="character-details__content">
          <div className="comics-details__info">
            <h3 className="comics-details__title">{comics?.title}</h3>
            <p className="comics-details__fulldescription">{comics?.fulldescription}</p>
          </div>
          <div className="comics-details__comics">
            <h5>Персонажи</h5>
            {characterDetailsList.map((comics) => (
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