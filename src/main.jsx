import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Layout } from './Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter basename={import.meta.env.BASE_URL}>
		<Layout />
	</BrowserRouter>
)
