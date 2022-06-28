import { Story, Meta } from '@storybook/react'

import { ProfileAdminMenuProps } from 'components/ProfileAdminMenu'

import MobileAdminProfileMenu from '.'

export default {
  title: 'MobileAdminProfileMenu',
  component: MobileAdminProfileMenu,
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
    photo: '/img/default-image.png'
  }
} as Meta

export const Default: Story<ProfileAdminMenuProps> = (args) => (
  <MobileAdminProfileMenu {...args} />
)
