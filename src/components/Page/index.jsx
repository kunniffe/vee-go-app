import "./index.css";

const Page = ({children, title}) => (
    <div className="Page">
        <h2 className="Page__title">{title}</h2>
        {children}
    </div>
);

export default Page;