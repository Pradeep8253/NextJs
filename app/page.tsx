import axios from 'axios'
import React from 'react'

async function getUserDetails (){
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return response.data ;
}

async function  page() {

  const userDetails = await getUserDetails();

  return (
    <div className='flex flex-col justify-center h-screen'>
<div className='flex justify-center'>
  <div  className='border p-8 rounded'>
    <div>
    {userDetails.name}
    </div>

  {userDetails.email}
  </div>

</div>
     
    </div>
  )
}

export default page