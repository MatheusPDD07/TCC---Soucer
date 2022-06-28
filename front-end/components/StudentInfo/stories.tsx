import { Story, Meta } from '@storybook/react'

import { StudentData } from 'components/VideoCard'

import StudentInfo from '.'

export default {
  title: 'student/StudentInfo',
  component: StudentInfo,
  args: {
    id: 'ed0136d3-6035-48db-96dd-6cecaf85e7fa',
    name: 'Mike',
    lastName: 'Santos',
    imageUrl:
      'https://studyingstorage.blob.core.windows.net/imagesavatar/c4b2679d-6728-4ba0-bcbf-d59c88713bd9.jpg'
  }
} as Meta

export const Default: Story<StudentData> = (args) => (
  <div style={{ maxWidth: 400 }}>
    <StudentInfo {...args} />
  </div>
)
