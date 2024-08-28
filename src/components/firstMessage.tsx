import { useTranslation } from 'react-i18next';
import { useStore } from '../store';

export const FirstMessage = () => {
    const store = useStore();
    const { t } = useTranslation();

    return (
        <div className={`chat chat-start ${store.chatMode && 'hidden'}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img
                        alt='Tailwind CSS chat bubble component'
                        src='https://www.digikala.com/favicon.ico'
                    />
                </div>
            </div>
            <div className='chat-bubble bg-gray-100'>
                <p className={`text-gray-600 font-[400]`}>
                    {t('firstMessage')}
                </p>
            </div>
        </div>
    );
};
