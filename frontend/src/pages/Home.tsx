import React, { useEffect } from 'react';


 function Home(props: {name:string }){


    return <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h4 className='my-4 font-bold text-lg'>{props.name ? `Hi ${props.name}` : 'You are not logged in'}</h4>
    </div>

}

export default Home;