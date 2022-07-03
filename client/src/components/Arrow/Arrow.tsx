import "./arrow.scss";

type ArrowProps = {
    text: string;
}

export const Arrow = ({ text }: ArrowProps): JSX.Element =>
    <div className={"arrow-container"}>
        <div className={"arrow"}/>
        <span className={"arrow-text"}>{text}</span>
    </div>
