import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Scott Luxton',
            image: 'https://www.google.com/search?q=free+jpg+images&rlz=1C1SQJL_enCA938CA938&sxsrf=ALeKk01KJowlRXMFw764vSqr9f87QPGWPw:1622071312936&tbm=isch&source=iu&ictx=1&fir=B8Au2Q9SfG9bJM%252CebOGJ1aXI8OLwM%252C_&vet=1&usg=AI4_-kQq3cKfhqd4ur4WQ6DAj8-iyuHW3g&sa=X&ved=2ahUKEwiolaHDvujwAhUkJDQIHZoWAiAQ9QF6BAgfEAE#imgrc=B8Au2Q9SfG9bJM', 
            places: 3
        }
    ]

    return <UsersList items={USERS} />
}

export default Users