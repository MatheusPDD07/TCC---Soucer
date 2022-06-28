import { Story, Meta } from '@storybook/react'

import VideoCrudCardPagination, { VideoCrudCardPaginationProps } from '.'

import mock from './mock'

export default {
  title: 'video/VideoCrudCardPagination',
  component: VideoCrudCardPagination,
  args: { items: mock }
} as Meta

export const Default: Story<VideoCrudCardPaginationProps> = (args) => (
  <VideoCrudCardPagination {...args} />
)
