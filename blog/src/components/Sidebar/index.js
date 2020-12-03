import React from 'react'

import * as S from './styled'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'


function Sidebar() {
  return (
    <S.SidebarWrapper>
      <Profile/>
      <SocialLinks />
      <MenuLinks/>
    </S.SidebarWrapper>
  )
}

export default Sidebar
