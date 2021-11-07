import { LaucnhInfoQuery } from "../../generated/graphql"

interface Props {
    data:LaucnhInfoQuery
}
const LaunchDetails = ({data}:Props) => {
    return (
        <div>
            <h1>Hello LaunchInfoDetail</h1>
            {data.launch && data.launch.launch_year}
        </div>
    )
}

export default LaunchDetails
