import { Story, Meta } from '@storybook/react'

import DocumentCrudCardPagination, { DocumentCrudCardPaginationProps } from '.'

import mock from './mock'

export default {
  title: 'DocumentCrudCardPagination',
  component: DocumentCrudCardPagination,
  args: { items: mock }
} as Meta

export const Default: Story<DocumentCrudCardPaginationProps> = (args) => (
  <DocumentCrudCardPagination {...args} />
)
