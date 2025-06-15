import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './routes/login/Login.tsx'
import Chat from './routes/chat/Chat.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: 'chat',
    element: <Chat />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
