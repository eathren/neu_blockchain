import * as React from "react"
import Layout from "../components/Layout"

import { Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
// markup
const IndexPage = () => {
  return (
    <Layout>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
        <Typography variant="h4">
          We are a Blockchain Club
        </Typography>
      </Grid>
    </Layout>
  )
  // add icons
  // add subscription
}

export default IndexPage
