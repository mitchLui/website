import { Button, LinkButton } from "../Button/Button";
import "./cards.scss";

type CardProps = {
    key: number | string;
    name: string;
    title: string;
    thumbnail: string;
    alt: string;
    headline: string;
    git_url: null | string;
}

export const ProjectCard = ({ key, name, title, thumbnail, alt, headline, git_url }: CardProps): JSX.Element =>
    <article key={key} className={"card project " + name}>
        <h2>{title}</h2>
        <picture className={"thumbnail"}>
            <source srcSet={"/project_images/webp/"+thumbnail+".webp"} type="image/webp" />
            <img 
                src={"/project_images/png/"+thumbnail+".png"} 
                alt={alt} 
            />
        </picture>
        <div className={"card-content"}>{headline}</div>
        <footer>
            <LinkButton to={"/projects/"+name} text={"Learn more"}/>
            {
                git_url &&
                <Button url={git_url} target={"_blank"} text={"GitHub"}/>
            }
        </footer>
    </article>