import { Footer } from '../../Components/Footer';
import { Header } from '../../Components/Header';
import { ListItem } from '../../Components/List-item';
import { SearchButton } from '../../Components/search-button';
import { SearchInput } from '../../Components/search-input';
import { charactersList } from '../../Components/mockListItem/mockListItem';
import './characters.scss';
export const Characters = () => {
  return (
    <div className="characters">
      <Header />
      <h2 className="characters__title">
        Characters<span className="characters__count">(46510)</span>
      </h2>
      <div className="characters__field">
        <SearchInput placeholder="Search Characters by name" />
        <SearchButton />
      </div>
      <div className="characters__items">
        {charactersList.map((c) => (
          <ListItem
            id = {c.id}
            Image = {c.Image}
            title = {c.title}
            description = {c.description}
            parent = "characters"
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};