import React from 'react'
import { useSelector } from 'react-redux'
import UserList from '../component/UserList'

const UserScreen = () => {
    const { dataStatus,userList, } = useSelector(state => state.users)
    
    if (dataStatus === "pending") {
        return <h1>{ dataStatus.message}</h1>
    }

    if (dataStatus === "rejected") {
        return <h1>{ dataStatus.message} <br />try again</h1>
    }
    
  return (
    <>
      <h1 className='text-center text-3xl pt-4'>Directory</h1>
    <ul className=' flex flex-col gap-3 my-4'>
      {userList.map((item)=><UserList key={item.id} item={item}/>)}
    </ul>
    </>
  )
}

export default UserScreen
