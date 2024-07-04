import { useNavigate }from 'react-router-dom';
import './list-item.scss'

type ListItemProps={
    id: string;
    title: string;
    description: string;
    Image: string;
    parent: string;
}
export const ListItem:React.FC<ListItemProps> = ({id, title, Image, description, parent}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (parent == 'characters') {
        navigate(`/characters/${id}`);
        }
        if (parent == 'comics') {
        navigate(`/comics/${id}`);
        }
        };
        
    return ( 
        <div onClick={handleClick} className="list__item">
            <img src={Image} alt="" className="list__img" />
                <p  className="list__title">{title}</p>
                <p  className="list__desciption">{description}</p>
        </div>
        );
}

