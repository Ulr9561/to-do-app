import App from "../App";
import { renderWithProviders } from "../utils/test-utils";


test("Vérifie que le bouton Submit est affiché", () => {
    const { getByText } = renderWithProviders(<App />);
    expect(getByText("Submit")).toBeInTheDocument();
});

test("Vérifie que le titre principal est affiché", () => {
    const { getByText } = renderWithProviders(<App />);
    expect(getByText("Welcome to this TO-DO App")).toBeInTheDocument();
});

