import React from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Shop } from './components/shop';
import { ContextProvider } from './context';

function App() {
    return (
        <React.Fragment>
            <Header />
            <ContextProvider>
                <Shop />
            </ContextProvider>
            <Footer />
        </React.Fragment>
    );
}

export default App;
