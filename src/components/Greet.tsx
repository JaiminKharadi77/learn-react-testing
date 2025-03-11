type GreetProps = {
    name?: string; // Optional prop
};

const Greet: React.FC<GreetProps> = ({ name }) => {
    return (
        <div>
            <p>Hello {name || ""}</p>
        </div>
    );
};

export default Greet;
