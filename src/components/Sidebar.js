import React from 'react'
import "../css/Sidebar.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'

function Sidebar(){
    return(
        <div className="sidebar">            
            <div className="sidebar-top">
                Michael Jivan
                <ExpandMoreIcon/>
            </div>

            <div className="sidebar_channels">
                <div className="sidebar_channelsHeader">
                    <div className="sidebar_header">
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>
                    </div>

                    
                    <div className="sidebar_addChannel">
                    <AddIcon/>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Sidebar;