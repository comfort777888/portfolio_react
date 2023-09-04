import "./style.css";
import githubIcon from "./gitHub-black.svg";

const BtnHitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={githubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnHitHub;
