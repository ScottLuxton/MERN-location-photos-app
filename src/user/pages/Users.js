import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'Scott Luxton', 
            image: 'https://www.publicdomainpictures.net/pictures/290000/velka/boxing-gloves-1552239070bAK.jpg', 
            places: 3
        }
    ]
return <UsersList items={ USERS }  />
}
    




export default Users