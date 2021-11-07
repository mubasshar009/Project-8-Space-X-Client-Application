import gql from "graphql-tag";

export const QUERY_LAUNCH = gql`

query Launches {
    launches {
      flight_number
      launch_year
      launch_success
      mission_name
      upcoming
      
    }
  }
  
`