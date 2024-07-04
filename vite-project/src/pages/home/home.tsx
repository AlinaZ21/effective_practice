import marvel from '../../assets/marvel.png'
import './home.scss'
import { Footer } from '../../Components/Footer';
import { Header } from '../../Components/Header';
export const Home = () => {
    return ( 
        <div className="home">
            <Header/>
                <div className="home__content">
                <img src={marvel} alt="" className="home__logo" />
                </div>
            <Footer/>
        </div>
     );
}
