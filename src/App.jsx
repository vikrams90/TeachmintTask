import { createBrowserRouter,createRoutesFromElements,Outlet,Route,RouterProvider } from "react-router-dom"
import Home from "./screens/Home"
import UserScreen from "./screens/UserScreen"
import SignleUserScreen from "./screens/SignleUserScreen"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" errorElement={<>404 not found</>} element={<Home/>}>
    <Route index element={<UserScreen/> } />
    <Route path=":id" element={<SignleUserScreen/> } />
    {/* <Route/> */}
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
