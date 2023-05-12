import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { DollarContextProvider } from './context/DollarContextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
    <DollarContextProvider>
        <App />
    </DollarContextProvider>
    // </React.StrictMode>,
);
