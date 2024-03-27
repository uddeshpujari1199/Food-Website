import './App.css';
import HomeScreen from './screen/HomeScreen'
import QuoteScreen from './screen/QuoteScreen';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Resturent from './screen/Resturent';
import Contact from './screen/Contact';
const router=createBrowserRouter([
  {
    path:'/',
    Component:HomeScreen,
  },
  {
    path:'/Quotes',
    Component:QuoteScreen,
  },
  {
    path:'/Resturents',
    Component:Resturent,
  },
  {
    path:'/foods',
    Component:QuoteScreen,
  },
  {
    path:'/contact',
    Component:Contact,
  },
])

function App() {
  return (
    <RouterProvider router={router} >
    <div>
    </div>
   </RouterProvider>
  );
}

export default App;
