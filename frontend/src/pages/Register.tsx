import React, { FormEvent } from 'react';
import { redirect, useNavigate } from 'react-router-dom';


export default function Register(){

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigate  = useNavigate()

    async function submit(e:FormEvent<HTMLFormElement>){
        e.preventDefault()

         await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        console.log('redirecting...')
        navigate('/login')

    }


    return <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h4 className='my-4 font-bold text-lg'>Register</h4>
        <form onSubmit={submit}>
            <div className="form-group mb-6">
                <label htmlFor="nameInput" className="form-label inline-block mb-2 text-gray-700">Name</label>
                <input onChange={e => setName(e.target.value)} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="nameInput"
                aria-describedby="nameHelp" placeholder="Enter Names" />

            </div>
            <div className="form-group mb-6">
                <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                <input onChange={e => setEmail(e.target.value)} type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
                aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="block mt-1 text-xs text-gray-600">We'll never share your email with anyone
                else.</small>
            </div>
            <div className="form-group mb-6">
                <label htmlFor="exampleInputPassword1" className="form-label inline-block mb-2 text-gray-700">Password</label>
                <input onChange={e => setPassword(e.target.value)} type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
                placeholder="Password" />
            </div>

            <button type="submit" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
        </form>
    </div>
}