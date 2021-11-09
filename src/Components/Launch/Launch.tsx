import { LaunchesQuery } from "../../generated/graphql";
import { useGlobalContext } from "../Store/Context";
import "./style.css";
interface Props {
  data: LaunchesQuery;
}

const Launch = ({ data }: Props) => {
  let idVal;
  const {Id,setId  } = useGlobalContext();
  let handleClick = (e:React.MouseEvent<HTMLElement>) => {
  //  localStorage.setItem("TargetID",e.currentTarget.id);
  //  console.log("Target ID = ",localStorage.getItem("TargetID"));
    idVal = e.currentTarget.id
    console.log("Id Val" , idVal);
    
    setId(idVal);
  };


  return (
    <>
 
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
                key={index} className={"Item"}
                id={JSON.stringify(launch?.flight_number)}
                onClick={handleClick}
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
    </>
  );
};

export default Launch;
