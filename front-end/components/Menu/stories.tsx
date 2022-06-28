import { Story, Meta } from '@storybook/react'

import Menu, { MenuProps } from '.'

export default {
  title: 'Menu/Menu',
  component: Menu
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

export const WithUsername: Story<MenuProps> = (args) => <Menu {...args} />

WithUsername.args = {
  username: 'anorak'
}
