import { useRef } from "react";
import { LaunchesQuery } from "../../generated/graphql";
import "./style.css";
interface Props {
  data: LaunchesQuery;
}
const Launch = ({ data }: Props) => {
    const refID = useRef(null);
    let handleClick = () => {
  
    
    const element = refID.current;
    console.log(element);
  };

  return (
    <div className="launchDiv">
      <h3>SpaceX Launches</h3>
      <div className="launchItem">
        <div
          className="heading"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <h2>Name</h2>
          <h2>Launch Year</h2>
          <h2>Status</h2>
        </div>

        <ul className="launchItemList">
          {data.launches &&
            data.launches.map((launch, index) => {
              return (
                <li
                  key={index}
                  className={"Item"}
                  
                >
                  <h3>
                    {launch && launch.flight_number}.{" "}
                    {launch && launch.mission_name}
                  </h3>
                  <p>Y - {launch && launch.launch_year}</p>
                  <div
                    className="status"
                    style={
                      launch && launch.launch_success
                        ? { backgroundColor: "green" }
                        : { backgroundColor: "red" }
                    }
                  ></div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Launch;
