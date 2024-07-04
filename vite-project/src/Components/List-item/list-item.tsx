import './list-item.scss'

type ListItemProps={
    title:string;
    description:string;
    Image:string
}
export const ListItem:React.FC<ListItemProps> = ({title,Image,description}) => {
    return ( 
       <div className="list__item">
        <img src={Image} alt="" className="list__img" />
            <p  className="list__title">{title}</p>
            <p  className="list__desciption">{description}</p>
       </div>
     );
}

