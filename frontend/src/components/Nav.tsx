import { Link } from "react-router-dom";

export default function Nav(props: {name:string}){

  let menu;

  async function logout () {
    await fetch('http://localhost:8000/api/logout', {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
  }

  if(!props.name)
    menu = (
      <ul className='flex space-x-4'>
          <li>
            <Link className="text-base text-black" to="/login">Login</Link>
          </li>
          <li>
            <Link className="text-base text-black" to="/register">Register</Link>
          </li>
        </ul>
        )
  else  
    menu = (
      <ul className='flex space-x-4'>
          <li>
            <Link className="text-base text-black" to="/login" onClick={logout}>Logout</Link>
          </li>
        </ul>
        )



    return (<nav className="relative mb-5 w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
    <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
      <div className="container-fluid">
        <a className="text-xl text-black" href="#">Navbar</a>
      </div>
      <div>
        {menu}
      </div>
    </div>
  </nav>)
}