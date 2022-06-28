import { Story, Meta } from '@storybook/react'

import DocumentCrudCard, { DocumentCrudCardProps } from '.'

import mock from './mock'

export default {
  title: 'DocumentCrudCard',
  component: DocumentCrudCard,
  args: {
    ...mock
  }
} as Meta

export const Default: Story<DocumentCrudCardProps> = (args) => (
  <div style={{ maxWidth: 320 }}>
    <DocumentCrudCard {...args} />
  </div>
)
