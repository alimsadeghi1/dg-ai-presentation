import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            brand: 'Digikala',
            team: 'Digital HR',
            welcomeTitle: 'Digikala Digital HR',
            motto: 'Empowering Minds, Transforming Futures',
            messageAiAssistant: 'Message AI assistant',
            sendPrompt: 'Send Prompt',
            firstMessage: 'Ask me about Digikala! I am here to help.',
            iDonNotUnderstand: "Sorry, didn't understand that!",
        },
    },
    fa: {
        translation: {
            team: 'دیجیتال اچ آر',
            brand: 'دیجی کالا',
            welcomeTitle: 'دیجی کالا، دیجیتال اچ آر',
            motto: 'ذهن های توانمند، آینده را می سازند',
            messageAiAssistant: 'شروع گفتگو با دستیار هوش مصنوعی',
            sendPrompt: 'ارسال پیام',
            firstMessage:
                'از من در مورد دیجی کالا بپرسید! من اینجا هستم تا کمک کنم.',
            iDonNotUnderstand: 'متاسفم، متوجه منظور شما نشدم!',
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
