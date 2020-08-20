  
import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import "./BottomNavMDC.css"


//prop for nav
const BottomNavMDC = props => (
    <BottomNavigation {...props}>
        {props.children}
    </BottomNavigation>
)

export default BottomNavMDC;