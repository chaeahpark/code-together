import { useEffect } from "react";
import profileDefault from "../../assets/images/profileDefault.png";
import { useAuth } from "../../contexts/AuthContext";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";

const MyProfile = () => {
  const { user, setProfileImageUrl, profileImageUrl } = useAuth();
  const authRef = getAuth();

  useEffect(() => {
    const unsubscribe = () => {
      if (authRef !== null) {
        const userData = authRef.currentUser;
        const { photoURL } = userData;
        setProfileImageUrl(photoURL);
      }
    };

    return unsubscribe;
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
    await updateProfile(authRef.currentUser, {
      photoURL: url,
    });

    setProfileImageUrl(url);
  };

  return (
    <div className="myProfile-container">
      <div className="myProfile-wrapper">
        {console.log("url", profileImageUrl)}
        <h2 className="myProfile-header">My profile</h2>
        <div className="myProfile-image">
          <div className="image-display">
            {/* add default image */}
            <img className="image-updated" src={profileImageUrl} alt="" />
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
              <button className="image-btn__delete">Delete image</button>
            </div>
          </div>
        </div>
        <div className="myProfile-name">
          <div className="myProfile-nameForm">
            <h3>Name</h3>
            <input type="text" />
          </div>
          <p>Your name appears publically on the website.</p>
        </div>
        <div className="myProfile-resetPassword">
          <h3>Reset password</h3>
          <button>Send password reset email</button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
