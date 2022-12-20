import { useEffect, useState } from "react"
import { Outlet, Link, useMatches } from "react-router-dom"

function App() {
  const [firstPage, setFirstPage] = useState('/first')
  const [secondPage, setSecondPage] = useState('/second')
  const matches = useMatches()
  useEffect(() => {
    console.log(matches.at(-1))
    if (matches.at(-1)?.pathname.startsWith('/first')) {
      console.log(window.location.pathname)
      setFirstPage(window.location.pathname)
    }
    if (matches.at(-1)?.pathname.startsWith('/second')) {
      setSecondPage(window.location.pathname)
    }
  }, [matches])
  return (
    <div>
      <div>app</div>
      <Outlet />
      <ul>
        <li>
          <Link to={firstPage}>first</Link>
          <Link to={secondPage}>second</Link>
        </li>
      </ul>
    </div>
  )
}

export const FirstPage = () => (
  <div>
    <div>first</div>
    <Link to='nest'>to nest</Link>
    <Outlet />
  </div>
)
export const FirstNestPage = () => (
  <div>
    <div>nested first</div>
  </div>
)
export const SecondPage = () => (
  <div>
    <div>second</div>
    <Link to='nest'>to nest</Link>
    <Outlet />
  </div>
)
export const SecondNestPage = () => (
  <div>
    <div>nested second</div>
  </div>
)

export default App
