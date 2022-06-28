import { Story, Meta } from '@storybook/react'

import DocumentCardPagination, { DocumentCardPaginationProps } from '.'

import mock from './mock'

export default {
  title: 'document/DocumentCardPagination',
  component: DocumentCardPagination,
  args: { items: mock }
} as Meta

export const Default: Story<DocumentCardPaginationProps> = (args) => (
  <DocumentCardPagination {...args} />
)
