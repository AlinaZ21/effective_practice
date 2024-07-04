import { Footer } from '../../Components/Footer';
import { Header } from '../../Components/Header';
import { ListItem } from '../../Components/List-item';
import { SearchButton } from '../../Components/search-button';
import { SearchInput } from '../../Components/search-input';
import { comicsList } from '../../Components/mockListItem/mockListItem';
import './comics.scss';
export const Comics = () => {
  return (
    <div className="comics">
      <Header />
      <h2 className="comics__title">
        Comics<span className="comics__count">(19500)</span>
      </h2>
      <div className="comics__field">
        <SearchInput placeholder="Search comics by name" />
        <SearchButton />
      </div>
      <div className="comics__items">
        {comicsList.map((c) => (
          <ListItem 
            id = {c.id}
            Image = {c.Image} 
            title = {c.title} 
            description = {c.description}
            parent = 'comics' />
        ))}
      </div>
      <Footer />
    </div>
  );
};