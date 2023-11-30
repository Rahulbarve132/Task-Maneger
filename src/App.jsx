import LandingPage from "./components/landingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./components/logIn";
import TodoList from "./components/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
    },
    {
      path: "/login",
      element: <LogIn/>,
    },
    {
      path: "/todo",
      element: <TodoList/>,
    },
   
  ]);
  return (
    <>
    <RouterProvider router={appRouter} />
    
    </>
  )
}

export default App;
