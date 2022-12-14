import { Link } from "react-router-dom";

import "./index.css";

const Card = ({children, href, image, title, subtitle}) => {
    const validImage = "/images/" + image;

    // We need to link to another page.
    if (href) {
        return (
            <li className="Card">
                <Link to={href}>
                    <img className="Card__image" src={validImage} alt={title} />
                    <h3 className="Card__title">{title}</h3>
                    <p className="Card__subtitle">{subtitle}</p>
                    {children}
                </Link>
            </li>
        );
    }

    // We don't need to link to another page.
    return (
        <li className="Card">
                <img className="Card__image" src={validImage} alt={title} />
                <h3 className="Card__title">{title}</h3>
                <p className="Card__subtitle">{subtitle}</p>
                {children}
        </li>
    );
}

export default Card;