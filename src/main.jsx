import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import FirebaseContext from './Contexts/FirebaseContext'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <QueryClientProvider client={queryClient}>
      <FirebaseContext>
        <RouterProvider router={router} />
      </FirebaseContext>
    </QueryClientProvider>
  </>,
)
