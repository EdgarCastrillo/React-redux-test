import React from 'react';
import AppBar from '@material-iu/core/AppBar'
import ToolBar from '@material-iu/core/ToolBar'
import Typography from '@material-iu/core/Typography'
import AccountCircle from '@material-iu/core/AccountCircle'


function Page(props) {
  return (
    <AppBar position="static">
      <ToolBar className="appbar">
        <Typography variant="h6" color="inherit">
          Programax
        </Typography>

        <AccountCircle />
      </ToolBar>
    </AppBar>
  )
}

export default Page