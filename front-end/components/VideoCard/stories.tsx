import { Story, Meta } from '@storybook/react'

import VideoCard, { VideoCardProps } from '.'

export default {
  title: 'video/VideoCard',
  component: VideoCard,
  args: {
    id: '618a5161-7584-4f03-b8ff-0928db569ebc',
    topic: {
      id: 'abd1aaca-bfcf-480f-b8f9-e0293c4d6eee',
      title: 'Frontend'
    },
    title: ' CSS Crash Course For Absolute Beginners ',
    urlVideo:
      'ttps://www.youtube.com/watch?v=20hlPRPVMoU&ab_channel=MatheusBattisti-HoradeCodar',
    star: 0,
    keys: 'React;Curso react; intro react; introdução ao react',
    views: 1,
    thumbnail: '/img/no-image.jpg',
    student: {
      id: 'ed0136d3-6035-48db-96dd-6cecaf85e7fa',
      name: 'Gabriel',
      lastName: 'Bortone',
      imageUrl:
        'https://studyingstorage.blob.core.windows.net/imagesavatar/a26b13a5-cdcf-417b-a089-4c7430783790.jpg'
    }
  },
  parameters: {
    backgrounds: {
      default: 'tertiary'
    }
  }
} as Meta

export const Default: Story<VideoCardProps> = (args) => (
  <div style={{ maxWidth: 270, margin: '0 auto' }}>
    <VideoCard {...args} />
  </div>
)
