import React from 'react'
import GroupCard from './GroupCard'



const GroupList = () => {
    return (
        <>
           <div className="main__groupList">
              <h3 className="main__title title--group">Recent projects</h3>
              <GroupCard />
            </div>  
        </>
    )
}

export default GroupList
