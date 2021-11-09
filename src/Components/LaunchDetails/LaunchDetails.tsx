import { LaucnhInfoQuery } from "../../generated/graphql"
import ReactPlayer from 'react-player'
import './style.css'
interface Props {
    data:LaucnhInfoQuery
}
const LaunchDetails = ({data}:Props) => {
    return (
        <div className="parent">
            <h1>Mission Name : {data.launch?.mission_name}</h1>
            <div className="child1">
            <h3>Launch Year : {data.launch && data.launch.launch_year}</h3>
            <h3>Launch Site : {data.launch?.launch_site?.site_name}</h3>
            </div>
            <div className="child1">
            <h3>Flight Number : {data.launch && data.launch.flight_number}</h3>
            <h3>Launch Status : {data.launch?.launch_success ? "Success" : "Failed"}</h3>
            </div>
            <p>{data.launch?.details}</p>
            {data.launch?.links?.flickr_images ? data.launch.links.flickr_images.map(image=> {
                if(image !== null){
                    return (
                        <img src={image} alt="photo" height="400px" width="700px" />
                    
                    )}
                
            }) : null}
            <div className="video">
            {data.launch?.links?.video_link ? 
            <ReactPlayer url={data.launch.links.video_link}/> : null}
            </div>
        </div>
    )
}

export default LaunchDetails
