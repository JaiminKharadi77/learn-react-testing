import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import NewGreet from './NewGreet';

// .only will run only this test in this file
test.only("Greet renders correctly without props", () => {
    render(<NewGreet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
});


// .skip will skip  only this test in this file
test.skip("Greet displays the passed name prop dynamically", () => {
    const name = "John K"; // Dynamic variable
    render(<NewGreet name={name} />);

    const textElement = screen.getByText(`Hello ${name}`); // Use variable in getByText
    expect(textElement).toBeInTheDocument();
});
