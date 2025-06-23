import { NavLink } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <h1>Home Page.</h1>
      <ul>
        <li> <NavLink to="/" > Home </NavLink> </li>
        <li> <NavLink to="/about" > About </NavLink> </li>
        <li> <NavLink to="/contact" > Contact </NavLink> </li>
      </ul>
    </div>
  )
}
