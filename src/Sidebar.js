import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import {ExpandMoreOutlined} from "@material-ui/icons";
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://scontent.fiev6-1.fna.fbcdn.net/v/t1.0-9/15349748_10206070759847284_1986953829862071104_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=C9dEVWvUFk4AX9nnntp&_nc_ht=scontent.fiev6-1.fna&oh=504251399c43f7cdf20affe47bcb8b9c&oe=607C5E1C' title='Phil Pashenko' />
            <SidebarRow 
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center" 
            />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />            
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" 
            />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} tile="Marketplace" />
        </div>
    )
}

export default Sidebar
