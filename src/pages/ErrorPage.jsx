import {NavLink, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

  return (
    <div>
      <h1>Error Page!</h1>

      {error && <h3>{error.data}</h3>}

      <NavLink to="/">Go to Home</NavLink>


    </div>
  )
}
