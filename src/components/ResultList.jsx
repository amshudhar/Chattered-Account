import React from 'react'
import { NavLink } from 'react-router-dom'

const ResultList = ({users}) => {
  // Check if users are empty or undefined then show the message
  if(!users || users.length === 0){
    return <p className='text-center text-gray-500'>No accounts Found</p>
  }
  return (
    <div className="grid grid-cols-1 gap-12 mx-32">
      {
        users.map((account)=>(
          <div key={account.id}
          className="bg-white shadow-lg  rounded-2xl h-36 p-4 flex items-center ">
            <img src={account.image} 
            alt={account.name}
            className="w-24 h-24 mx-6 rounded-lg"
             />
             <h2 className="text-lg font-semibold mr-96">{account.name}</h2>

            <NavLink
                to={`/details/${account.id}`}
                className="mt-4 text-green-900 hover:underline ml-96"
              >
                View Details
            </NavLink>
          </div>
        ))
      }       
    </div>
  )
}

export default ResultList