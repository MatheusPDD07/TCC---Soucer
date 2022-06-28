import { Story, Meta } from '@storybook/react'

import { ProfileStudentMenuProps } from 'components/ProfileStudentMenu'

import MobileStudentProfileMenu from '.'

export default {
  title: 'MobileStudentProfileMenu',
  component: MobileStudentProfileMenu,
  parameters: {
    backgrounds: {
      default: 'tertiary'
    },
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    name: 'Mike Santos',
    photo: '/img/default-image.png',
    point: 10
  }
} as Meta

export const Default: Story<ProfileStudentMenuProps> = (args) => (
  <MobileStudentProfileMenu {...args} />
)
