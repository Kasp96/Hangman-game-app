import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		element: <App />,
		path: '/',
	},
]);

createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
