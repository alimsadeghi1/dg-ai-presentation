import { useTranslation } from 'react-i18next';
import { useStore } from '../store';

export const Header = () => {
    const store = useStore();
    const { t } = useTranslation();

    return (
        <div
            className={`${
                store.chatMode ? 'mb-[20px] pt-[20px]' : 'mb-[48px]'
            } text-center`}>
            <h1
                className={`${
                    store.chatMode ? 'text-[2.15rem]' : 'text-[3rem]'
                } font-[800] duration-700 text-primary`}>
                <span className='text-[#eb3c50]'>{t('brand')}</span> {t('team')}
            </h1>
            <p className='text-center text-gray-500'>{t('motto')}</p>
        </div>
    );
};
