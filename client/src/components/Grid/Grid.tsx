import "./grid.scss";

type GridProps = {
    children: React.ReactNode;
};

export const Grid = ({ children }: GridProps): JSX.Element => {
    return (
        <div className={"grid"}>
            {children}
        </div>
    )
}