import "./style.css";
import CreatePost from "../../../assets/images/illustration-create-post.webp";

export const UpperFrame = () => {
  return (
    <>
      <div className="aside-wrapper-upper">
        <div className="inner-wrapper-upper">
          <p>
            Create and schedule content <span> quicker </span>
          </p>
          <img id="create-post-img" src={CreatePost} alt="Create Post Now" />
        </div>
      </div>
    </>
  );
};
