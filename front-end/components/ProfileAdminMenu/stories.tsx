import { Story, Meta } from '@storybook/react'

import ProfileAdminMenu, { ProfileAdminMenuProps } from '.'

import mock from './mock'

export default {
  title: 'Menu/ProfileAdminMenu',
  component: ProfileAdminMenu,
  args: mock
} as Meta

export const Default: Story<ProfileAdminMenuProps> = (args) => (
  <div
    style={{
      maxWidth: '38rem'
    }}
  >
    <ProfileAdminMenu {...args} />
  </div>
)
