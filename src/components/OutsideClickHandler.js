import React, { useRef, useEffect } from "react";
import { useProfile } from "../contexts/ProfileContext";

const CloseDropdown = (ref) => {
  const { changeToggle } = useProfile();
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        return changeToggle(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

/**
 * Component that alerts if you click outside of it
 */
const OutsideClickHandler = (props) => {
  const wrapperRef = useRef(null);
  CloseDropdown(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
};

export default OutsideClickHandler;
