import { Story, Meta } from '@storybook/react'

import TopicCrudCardPagination, { TopicCrudCardPaginationProps } from '.'

import mock from './mock'

export default {
  title: 'TopicCrudCardPagination',
  component: TopicCrudCardPagination,
  args: { items: mock }
} as Meta

export const Default: Story<TopicCrudCardPaginationProps> = (args) => (
  <TopicCrudCardPagination {...args} />
)
