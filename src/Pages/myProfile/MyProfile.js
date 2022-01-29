import { useEffect, useRef } from "react";
import profileDefault from "../../assets/images/profileDefault.png";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getAuth,
  updateProfile,
  deleteUser,
  EmailAuthProvider,
  linkWithCredential,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  reauthenticateWithCredential,
} from "firebase/auth";
import { auth } from "../../api/authApi";

const MyProfile = () => {
  const navitate = useNavigate();
  const {
    user,
    name,
    profileImageUrl,
    setProfileImageUrl,
    setUserName,
    setUser,
  } = useAuth();

  useEffect(() => {
    //! when user removes the account
    //! photoURL gives an error message
    //! with value of null
    if (!user) {
      auth.onAuthStateChanged((user) => {
        setProfileImageUrl(user.photoURL);
        setUserName(user.displayName);
      });
    }
  }, []);

  const onFileChange = async (e) => {
    const file = e.target.files[0];

    const storage = getStorage();
    const imagesRef = ref(storage, file.name);

    // update image file on firestore
    await uploadBytes(imagesRef, file);
    // get image url from firestore
    const url = await getDownloadURL(imagesRef);
    // update user data (user photo url) in firestore

    setProfileImageUrl(url);
  };

  const onDeleteImageBtnClick = () => {
    setProfileImageUrl("");
  };

  const onNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onSaveBtnClick = async (e) => {
    e.preventDefault();

    if (profileImageUrl) {
      await updateProfile(auth.currentUser, {
        photoURL: profileImageUrl,
      });
    }

    if (name) {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    }
  };

  const onDeleteAccountBtnClick = async (e) => {
    let pw = prompt("Enter your password");
    console.log(auth.currentUser.email);
    const credential = EmailAuthProvider.credential(auth.currentUser.email, pw);
    const test = await auth.currentUser.reauthenticateWithCredential(
      credential
    );
    console.log(test.user);
    // // Now you can use that to reauthenticate
    // authUser.reauthenticateWithCredential(credential);
    deleteUser(test.user);
    navitate("/");
  };

  return (
    <div className="myProfile-container">
      <div className="myProfile-wrapper">
        <h2 className="myProfile-header">My profile</h2>
        <div className="myProfile-image">
          <div className="image-display">
            {user && user.photoURL ? (
              <img
                className="image-updated"
                src={profileImageUrl || profileDefault}
                alt=""
              />
            ) : null}

            <div className="image-control">
              <label htmlFor="">
                Choose image
                <input
                  className="image-btn__choose"
                  type="file"
                  accept="image/*"
                  onChange={onFileChange}
                />
              </label>
              <button
                className="image-btn__delete"
                onClick={onDeleteImageBtnClick}
              >
                Delete image
              </button>
            </div>
          </div>
        </div>
        <div className="myProfile-name">
          <div className="myProfile-nameForm">
            <h3>Name</h3>

            <input type="text" value={name} onChange={(e) => onNameChange(e)} />
          </div>
          <p>Your name appears publically on the website.</p>
        </div>
        <div className="myProfile-btns">
          <button
            className="myProfile-btn myProfile-btn__submit"
            type="submit"
            onClick={onSaveBtnClick}
          >
            Save
          </button>
          <button
            className="myProfile-btn myProfile-btn__delete"
            onClick={onDeleteAccountBtnClick}
          >
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
