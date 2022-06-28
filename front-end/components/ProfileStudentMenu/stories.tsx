import { Story, Meta } from '@storybook/react'

import ProfileStudentMenu, { ProfileStudentMenuProps } from '.'

import mock from './mock'

export default {
  title: 'Menu/ProfileStudentMenu',
  component: ProfileStudentMenu,
  args: mock
} as Meta

export const Default: Story<ProfileStudentMenuProps> = (args) => (
  <div
    style={{
      maxWidth: '38rem'
    }}
  >
    <ProfileStudentMenu {...args} />
  </div>
)
