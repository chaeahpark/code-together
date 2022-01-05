import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComments } from "@fortawesome/free-solid-svg-icons";

const GroupCard = () => {
    return (
        <>
            <div className="group__card">
                <div className="group__langs">
                  {/* add code language */}
                  <img
                    className="group__lang"
                    src={require("../img/js.png")}
                    alt="javascript"
                  />
                  <img
                    className="group__lang"
                    src={require("../img/react.png")}
                    alt="react"
                  />
                </div>
                <p className="group__title">
                  We are looking for front-end and back-end and designers to
                  build an awesome project
                </p>
                <div className="group__icons">
                  <div className="group__icons--comments">
                    <FontAwesomeIcon icon={faComments} />
                    <p className="comment__total">23</p>
                  </div>
                  <div className="group__icons--saved">
                    <FontAwesomeIcon icon={faBookmark} />
                    <p className="comment__saved--total">3</p>
                  </div>
                </div>
              </div>
              <div className="group__card">
                <div className="group__langs">
                  {/* add code language */}
                  <img
                    className="group__lang"
                    src={require("../img/js.png")}
                    alt="javascript"
                  />
                </div>
                <p className="group__title">Are you interested in ux design</p>
                <div className="group__icons">
                  <div className="group__icons--comments">
                    <FontAwesomeIcon icon={faComments} />
                    <p className="comment__total">5</p>
                  </div>
                  <div className="group__icons--saved">
                    <FontAwesomeIcon icon={faBookmark} />
                    <p className="comment__saved--total">11</p>
                  </div>
                </div>
              </div>
              <div className="group__card">
                <div className="group__langs">
                  {/* add code language */}
                  <img
                    className="group__lang"
                    src={require("../img/js.png")}
                    alt="javascript"
                  />
                </div>
                <p className="group__title">Are you interested in ux design</p>
                <div className="group__icons">
                  <div className="group__icons--comments">
                    <FontAwesomeIcon icon={faComments} />
                    <p className="comment__total">5</p>
                  </div>
                  <div className="group__icons--saved">
                    <FontAwesomeIcon icon={faBookmark} />
                    <p className="comment__saved--total">11</p>
                  </div>
                </div>
              </div>
              <div className="group__card">
                <div className="group__langs">
                  {/* add code language */}
                  <img
                    className="group__lang"
                    src={require("../img/js.png")}
                    alt="javascript"
                  />
                </div>
                <p className="group__title">Are you interested in ux design</p>

                <div className="group__icons">
                  <div className="group__icons--comments">
                    <FontAwesomeIcon icon={faComments} />
                    <p className="comment__total">5</p>
                  </div>
                  <div className="group__icons--saved">
                    <FontAwesomeIcon icon={faBookmark} />
                    <p className="comment__saved--total">11</p>
                  </div>
                </div>
              </div>
        </>
    )
}

export default GroupCard
