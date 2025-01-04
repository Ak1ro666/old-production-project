import { profileReducer } from '@/entities/Profile';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
    profile: profileReducer,
};

export function ProfilePage() {
    const { t } = useTranslation('profile');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <h1>{t('Профиль')}</h1>
            </div>
        </DynamicModuleLoader>
    );
}
