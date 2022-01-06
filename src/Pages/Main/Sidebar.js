import React from 'react'

const Sidebar = () => {
    return (
        <>
           <div className="main__sidebar">
              <div className="sidebar__tags">
                <h3 className="main__title title--tag">Tags</h3>
                <p className="tag__item">#javascript</p>
                <p className="tag__item">#python</p>
                <p className="tag__item">#php</p>
                <p className="tag__item">#java</p>
                <p className="tag__item">#golang</p>
                <p className="tag__item">#typescript</p>
                <p className="tag__item">#html</p>
                <p className="tag__item">#css</p>
                <p className="tag__item">c#</p>
              </div>
              <div className="sidebar__languages"></div>
            </div>  
        </>
    )
}

export default Sidebar
