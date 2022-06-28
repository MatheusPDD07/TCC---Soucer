import { Story, Meta } from '@storybook/react'

import DocumentCard, { DocumentCardProps } from '.'

import mock from './mock'

export default {
  title: 'document/DocumentCard',
  component: DocumentCard,
  args: {
    ...mock
  }
} as Meta

export const Default: Story<DocumentCardProps> = (args) => (
  <div style={{ maxWidth: 320 }}>
    <DocumentCard {...args} />
  </div>
)
