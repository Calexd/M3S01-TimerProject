import {createBrowserRouter} from 'react-router-dom'
import HomePage from '../pages/HomePage/index'
import LoginPage from '../pages/Login/index'
import App from '../App'


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LoginPage />
            },
            {
                path: '/home',
                element: <HomePage />
            },
        ]
    }
])

export default routes