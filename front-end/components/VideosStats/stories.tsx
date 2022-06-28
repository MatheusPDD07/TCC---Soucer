import { Story, Meta } from '@storybook/react'

import VideosStats, { VideoStatsProps } from '.'

import mock from './mock'

export default {
  title: 'video/VideosStats',
  component: VideosStats,
  args: { videos: mock }
} as Meta

export const Default: Story<VideoStatsProps> = (args) => (
  <div style={{ maxWidth: 350 }}>
    <VideosStats {...args} />
  </div>
)
