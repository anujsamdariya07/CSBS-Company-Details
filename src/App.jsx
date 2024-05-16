import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom"
import { About, JobRoles, Layout } from "./components"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route path="/about" element={<About />} />
        <Route path="/jobroles" element={<JobRoles />} />
      </Route>
    )
  )
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
