import LandingPage from "./components/landingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./components/logIn";


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
   
  ]);
  return (
    <>
    <RouterProvider router={appRouter} />
    </>
  )
}

export default App;
