import "./style.css";
import Illustration from "../../../assets/images/illustration-ai-content.webp";

export const BottomFrame = () => {
  return (
    <>
      <div className="aside-wrapper-bottom">
        <div className="inner-wrapper">
          <p>
            Write your content <br /> using AI
          </p>
          <img id="ai-img" src={Illustration} alt="Illustration AI Content" />
        </div>
      </div>
    </>
  );
};
