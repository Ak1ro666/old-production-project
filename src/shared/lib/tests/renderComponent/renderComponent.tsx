import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

type RenderComponentProps = {
    route?: string;
};

export function renderComponent({
    component,
    initialState,
    options = {},
}: {
    component: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    options?: RenderComponentProps;
}) {
    const { route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>
                <StoreProvider initialState={initialState as StateSchema}>
                    {component}
                </StoreProvider>
            </I18nextProvider>
        </MemoryRouter>,
    );
}