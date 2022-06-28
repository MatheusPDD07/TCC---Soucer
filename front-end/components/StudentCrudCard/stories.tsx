import { Story, Meta } from '@storybook/react'

import StudentCrudCard, { StudentCrudCardProps } from '.'

export default {
  title: 'StudentCrudCard',
  component: StudentCrudCard,
  args: {
    id: '7171c2aa-64fb-457e-8cab-33bd70e7af36',
    photo:
      'https://studyingstorage.blob.core.windows.net/imagesavatar/c4b2679d-6728-4ba0-bcbf-d59c88713bd9.jpg',
    fullName: 'Xakam Nifect',
    userName: 'xakam',
    email: 'xakam30299@nifect.com',
    points: 0,
    isBlocked: false
  }
} as Meta

export const Default: Story<StudentCrudCardProps> = (args) => (
  <div style={{ maxWidth: 320 }}>
    <StudentCrudCard {...args} />
  </div>
)
