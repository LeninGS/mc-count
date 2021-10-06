import '../styles.css'
import { GlobalStyle } from '../GlobalStyle';
import Home from '.';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Home />
        </>
    )
}