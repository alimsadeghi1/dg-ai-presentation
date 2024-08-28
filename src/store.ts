import { create } from 'zustand';

interface IStore {
    chatMode: boolean;
    updateChatMode: (v: boolean) => void;
    responses: string[];
    updateResponse: (v: string) => void;
    siri: boolean;
    runSiri: () => void;
    chat: string[];
    updateChat: (v: string) => void;
}

export const useStore = create<IStore>((set, get) => ({
    chat: [],
    updateChat: (v) => {
        const chat = get().chat;
        chat.push(v);
        set({ chat });
    },
    chatMode: false,
    updateChatMode: (v: boolean) => set({ chatMode: v }),
    responses: [],
    updateResponse: (v) => {
        const res = get().responses;
        get().runSiri();
        res.push(v);
        set({ responses: res });
    },
    siri: false,
    runSiri: () => {
        set({ siri: true });
        setTimeout(() => {
            set({ siri: false });
        }, 2000);
    },
}));
