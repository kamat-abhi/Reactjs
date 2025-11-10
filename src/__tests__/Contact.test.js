import { render, screen } from "@testing-library/react"
import Contact from "../pages/Contact"
import "@testing-library/jest-dom"

it("Should load Contact us page", () => {

    render(<Contact/>);

    const heading = screen.getByRole("heading");
    //

    expect(heading).toBeInTheDocument();
});
// it -> it is alias for test

test("Should load submit button ", () => {
    render(<Contact/>)

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
});

test("Should load name placeholderr ", () => {
    render(<Contact/>)

    const button = screen.getByPlaceholderText("name")

    expect(button).toBeInTheDocument();
});