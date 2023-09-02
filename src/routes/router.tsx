import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App.tsx';
import ButtonPage from '../views/Buttons.tsx';
import Home from '../views/Home.tsx';
import TextInputPage from '../views/TextInput.tsx';

const routes = (
  <>
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='Buttons' element={<ButtonPage />} />
      <Route path='TextInput' element={<TextInputPage />} />
      <Route path='Typography' element={<TextInputPage />} />
    </Route>
    <Route path='/test' element={<div>test</div>} />
  </>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
