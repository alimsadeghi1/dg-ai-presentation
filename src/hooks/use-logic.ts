import { useTranslation } from 'react-i18next';
import { Ai } from '../lib/ai';
import { useStore } from '../store';

export const useLogic = () => {
    const store = useStore();
    const { t } = useTranslation();

    const onSubmit = (message: string) => {
        store.updateChat(message);
        store.runSiri();

        const response = Ai(message) || t('iDonNotUnderstand');
        setTimeout(() => {
            store.updateChat(response);
        }, 2700);
    };

    return {
        onSubmit,
    };
};
