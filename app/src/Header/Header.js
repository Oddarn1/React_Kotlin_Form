import Toolbar from "@material-ui/core/Toolbar";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import React from "react";
import './Header.css'

const Header = () => (
<AppBar position="sticky">
    <Toolbar variant="dense">
        <div className={"headerbutton"}>
            <Link to={"/form"}>
                <Typography variant="h6" color="inherit">
                    Skjema
                </Typography>
            </Link>
        </div>
        <div className={"headerbutton"}>
            <Link to={"/answers"}>

            </Link>
        </div>
    </Toolbar>
</AppBar>
);

export default Header