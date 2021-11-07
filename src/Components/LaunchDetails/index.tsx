import { useLaucnhInfoQuery } from "../../generated/graphql"
import LaunchDetails from "./LaunchDetails";

const LaunchDetailInfoContainer = () => {

    const { data, loading , error } = useLaucnhInfoQuery({variables:{id:"1"}});
    if(loading)return <h1>Loading...</h1>
    if(error)return <h1>Error </h1>

    return (
        <div>
            {data && <LaunchDetails data={data}/>}
        </div>
    )
}

export default LaunchDetailInfoContainer
