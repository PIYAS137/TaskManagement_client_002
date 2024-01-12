
import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../Pages/RootPage/RootPage';
import HomePage from '../Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import SignupPage from '../Pages/SignupPage/SignupPage';
import TasksPage from '../Pages/TasksPage/TasksPage';

const router = createBrowserRouter([
    {
        path : '/',
        element : <RootPage/>,
        children : [
            {
                path : '/',
                element : <HomePage/>
            },
            {
                path : '/login',
                element : <LoginPage/>
            },
            {
                path : '/signup',
                element : <SignupPage/>
            },
            {
                path : '/tasks',
                element : <TasksPage/>
            }
        ]
    }
])

export default router; 