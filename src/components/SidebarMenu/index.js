import React from 'react'

import SidebarMenuItem from 'components/SidebarMenuItem'
import SidebarMenuCollapsibleContainer from 'containers/SidebarMenuCollapsibleContainer'
import SidebarMenuLink from 'components/SidebarMenuLink'
import CurrentlyReadingContainer from 'containers/CurrentlyReadingContainer'
import CurrentlyListeningContainer from 'containers/CurrentlyListeningContainer'

const SidebarMenu = () => {
  return (
    <div>
      <SidebarMenuItem>
        <SidebarMenuLink to="/">Home</SidebarMenuLink>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuLink to="/about">About</SidebarMenuLink>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuCollapsibleContainer label="Currently Reading">
          <CurrentlyReadingContainer />
        </SidebarMenuCollapsibleContainer>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuCollapsibleContainer label="Currently Listening">
          <CurrentlyListeningContainer />
        </SidebarMenuCollapsibleContainer>
      </SidebarMenuItem>
    </div>
  )
}

export default SidebarMenu
