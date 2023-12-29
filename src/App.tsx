import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { lazy, Suspense } from "react"

import Home from "./pages/Home"
import Loader from "./components/Loader"
const Search = lazy(() => import("./pages/Search"))
const Cart = lazy(() => import("./pages/Cart"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App