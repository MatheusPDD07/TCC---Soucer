import { Story, Meta } from '@storybook/react'

import VideoCardPagination, { VideoCardPaginationProps } from '.'

import mock from './mock'

export default {
  title: 'video/VideoCardPagination',
  component: VideoCardPagination,
  args: { items: mock }
} as Meta

export const Default: Story<VideoCardPaginationProps> = (args) => (
  <VideoCardPagination {...args} />
)
