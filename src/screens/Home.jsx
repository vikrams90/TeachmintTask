import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../features/user/userSlice'
import { fetchPosts } from '../features/user/postSlice'

const Home = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUser())
        dispatch(fetchPosts())
    })

  return (
      <>
          <Outlet />
    </>
  )
}

export default Home
