import { useState } from 'react';
import { useLogic } from '../hooks/use-logic';
import { useStore } from '../store';
import { Button } from './button';
import { Input } from './input';
import { Header } from './header';
import { FirstMessage } from './firstMessage';
import { useTranslation } from 'react-i18next';

export const SearchBar = () => {
    const store = useStore();
    const [input, setInput] = useState('');
    const { onSubmit } = useLogic();
    const {t} = useTranslation();

    const handleInput = (v: string) => {
        setInput(v);
    };

    const submit = () => {
        store.updateChatMode(true);
        onSubmit(input);
        setInput('');
    };

    return (
        <div
            className={`w-full bg-white z-20  duration-700 left-[50%] translate-x-[-50%] ${
                store.chatMode
                    ? 'fixed top-0 max-w-[722px] shadow-bottom'
                    : 'absolute top-[50%] translate-y-[-50%] max-w-[700px]'
            }`}>
            <Header />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                }}
                className='flex w-full gap-[6px]'>
                <Input
                    value={input}
                    onChange={(e) => handleInput(e.target.value)}
                    className='w-full'
                    placeholder={t('messageAiAssistant')}
                />
                <Button type='submit' className='px-[30px]'>
                    {t('sendPrompt')}
                </Button>
            </form>
            <div className='mt-[20px]'>
                <FirstMessage />
            </div>
        </div>
    );
};
