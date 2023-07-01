import { render } from 'react-dom'
import './app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'
import './shared/i18n/i18n'
import { ErrorBoundary } from './app/providers/ErrorBoundary'

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.querySelector('#root')
)
