import "./container.scss";

type ContainerProps = {
    children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps): JSX.Element => 
    <div><div className="container">{children}</div></div>
    