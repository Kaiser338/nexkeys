import '@styles/globals.css';
import { Root } from 'postcss';
import Navbar from './navbar';

export const metadata = {
    title: "Nexkys",
    description: 'Cheapest game keys'
}

const RootLayout = ({children}) => {
    return (
        <html lang ="en">
            <body>
                <div className="main"></div>
                <Navbar/>
                <main className="app">
                    {children}
                </main>
                
            </body>
        </html>
    )
}

export default RootLayout