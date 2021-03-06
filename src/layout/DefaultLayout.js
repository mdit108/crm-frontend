import React from 'react'
import { Footer } from './partials/Footer.comp'
import { Header } from './partials/Header.comp'

export const DefaultLayout = ({children}) => {
    return (
        <div className="default-layout">
            <header className="header mb-5">
                <Header/>
            </header>
            <main className="main">
                 {children}
            </main>
            <footer className="footer">
                <Footer/>
            </footer>
            
            
        </div>
    )
}
