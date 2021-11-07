import { useLaunchesQuery } from "../../generated/graphql"
import Launch from "./Launch";

const LaunchContainer = () => {
    const {data , error , loading} = useLaunchesQuery();
    if(loading){
        return <h1>Loading</h1>
    }
    if(error || !data)return <h1>Error</h1>
    return (
        <div>
            {data && <Launch data={data}/>}
        </div>
    )
}

export default LaunchContainer
