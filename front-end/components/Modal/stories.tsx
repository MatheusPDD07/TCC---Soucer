import { Story, Meta } from '@storybook/react'

import Modal, { ModalProps } from '.'

export default {
  title: 'Modal',
  component: Modal
} as Meta

export const Default: Story<ModalProps> = (args) => <Modal {...args} />
