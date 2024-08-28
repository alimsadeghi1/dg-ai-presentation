import { Siri } from './components/siri/siri';
import { useStore } from './store';
import { SearchBar } from './components/searchbar';
import { isEven } from './lib/is-even';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './components/button';
import { useTranslation } from 'react-i18next';

function App() {
    const store = useStore();
    const { i18n } = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }, [store]);

    useEffect(() => {
        if (i18n.language == 'en') {
            document.getElementsByTagName('html')[0].dir = 'ltr';
        } else {
            document.getElementsByTagName('html')[0].dir = 'rtl';
        }
    }, [i18n.language]);

    return (
        <div className='w-full min-h-screen max-w-[700px] mx-auto'>
            <SearchBar />
            <div
                className={`${
                    store.chatMode ? 'pt-[180px]' : 'pt-[60px]'
                } w-full transition delay-1000`}>
                <div className='flex flex-col gap-[20px]'>
                    {store.chat.map((message, index) => {
                        const i = index + 1;
                        return (
                            <motion.div
                                className='chat-card'
                                initial={{ opacity: 0, y: 20 }} // Initial state
                                animate={{ opacity: 1, y: 0 }} // Animation state
                                exit={{ opacity: 0, y: -20 }} // Exit animation
                                transition={{ duration: 0.3 }} // Transition settings
                            >
                                <div
                                    key={index}
                                    className={`chat flex chat-${
                                        !isEven(i)
                                            ? 'end justify-end'
                                            : 'start justify-start'
                                    }`}>
                                    {isEven(i) && (
                                        <div className='chat-image avatar'>
                                            <div className='w-10 rounded-full'>
                                                <img
                                                    alt='Tailwind CSS chat bubble component'
                                                    src='https://www.digikala.com/favicon.ico'
                                                />
                                            </div>
                                        </div>
                                    )}
                                    <div
                                        className={`chat-bubble  ${
                                            !isEven(i)
                                                ? 'bg-primary'
                                                : 'bg-gray-100'
                                        }`}>
                                        <p
                                            className={`${
                                                !isEven(i)
                                                    ? 'text-white'
                                                    : 'text-gray-600'
                                            }  font-[400] text-[0.9rem]`}>
                                            {message}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                <Siri />
            </div>
            <div className='fixed bottom-[12px] left-[12px] flex flex-col gap-[4px]'>
                <Button
                    onClick={() => i18n.changeLanguage('en')}
                    variant='outline'
                    size='icon'
                    className={`${i18n.language == 'en' ? 'bg-gray-100' : ''}`}>
                    🇺🇸
                </Button>
                <Button
                    onClick={() => i18n.changeLanguage('fa')}
                    variant='outline'
                    size='icon'
                    className={`${i18n.language == 'fa' ? 'bg-gray-100' : ''}`}>
                    🇮🇷
                </Button>
            </div>
        </div>
    );
}

export default App;
