import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import type { AppStore, RootState } from "../app/store";
import { store } from "../app/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "../router";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
    preloadedState?: Partial<RootState>;
    setupStore?: AppStore;
}

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = {},
        setupStore = store(preloadedState),
        ...renderOptions
    }: ExtendedRenderOptions = {},
) {
    function Wrapper(): JSX.Element {
        return (
            <Provider store={setupStore}>
                <RouterProvider router={router} />
            </Provider>
        );
    }

    return {
        store: setupStore,
        ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    };
}
