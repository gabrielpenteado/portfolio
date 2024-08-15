import photo from "../../assets/foto.png";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="img">
        <img src={photo} alt="photo" />
      </div>
      <span className="line-separator"></span>
      <div className="me">
        <span>Gabriel Penteado</span>
        <p>Software Developer</p>
        <div className="contacts"></div>
      </div>
    </div>
  );
};

export default Profile;
