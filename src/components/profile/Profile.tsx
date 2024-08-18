import photo from "../../assets/foto.png";
import Contacts from "../contacts/Contacts";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="img">
        <img src={photo} alt="photo" />
      </div>
      {/* <span className="line-separator"></span> */}
      <div className="me">
        <span className="fullName">Gabriel Penteado</span>
        <span className="career">Software Developer</span>
      </div>
      <Contacts />
    </div>
  );
};

export default Profile;
