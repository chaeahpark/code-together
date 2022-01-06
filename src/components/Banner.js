import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="main__banner">
            <h2 className="banner__title">
              Find buddies and build projects together.
            </h2>
            <img
              className="banner__img"
              src={require("../Assets/images/team.png")}
              alt="team"
            />
          </div>
        </>
    )
}

export default Banner
