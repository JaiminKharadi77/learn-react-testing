import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet renders correctly without props", () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
});


test("Greet displays the passed name prop dynamically", () => {
    const name = "John K"; // Dynamic variable
    render(<Greet name={name} />);

    const textElement = screen.getByText(`Hello ${name}`); // Use variable in getByText
    expect(textElement).toBeInTheDocument();
});
