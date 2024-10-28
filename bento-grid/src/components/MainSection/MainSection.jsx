import "./style.css";
import schedule from "../../assets/images/illustration-schedule-posts.webp";
import consistent from "../../assets/images/illustration-consistent-schedule.webp";

export const MainSection = () => {
  return (
    <>
      <div className="wrapper">
        <div className="upper-div"></div>
        <div className="first-b-div"></div>
        <div className="second-b-div">
          <div>
            <p>Maintain a consistent posting schedule.</p>
          </div>
          <div>
            <img src={consistent} alt="calender showing august month week 1" />
          </div>
        </div>
        <aside className="aside-column">
          <p className="title">Schedule to social media.</p>
          <img src={schedule} alt="post schedule" />
          <p className="subtitle">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </aside>
      </div>
    </>
  );
};
