import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './assets/inter/style.css';
import './assets/iran-yekan/style.css';
import './main.css';
import './lib/ai.ts';
import './i18n.ts';

createRoot(document.getElementById('root')!).render(<App />);
