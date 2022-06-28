import { VideoCrudCardProps } from 'components/VideoCrudCard'
import { UserData } from '../Base'

type TopicsData = {
  id: string
  title: string
}

export type VideoTemplateProps = {
  user: UserData
  videos: VideoCrudCardProps[]
  topics: TopicsData[]
}
