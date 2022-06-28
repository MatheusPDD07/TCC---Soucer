export const UserMapper = (student: any) => {
  return student
    ? {
        name: student.firstName,
        lastName: student.lastName,
        imageUrl: student?.imageUrl,
        points: student.points
      }
    : {}
}

export const VideoMapper = (videos: any[]) => {
  return videos
    ? videos.map((video) => ({
        id: video.id,
        topic: {
          id: video.topic.id,
          title: video.topic.title
        },
        title: video.title,
        views: video.views,
        thumbnail: video.thumbnail,
        student: {
          id: video?.student?.id,
          name: video?.student?.name,
          lastName: video?.student?.lastName,
          imageUrl: video?.student?.imageUrl
        }
      }))
    : []
}

export const MyVideoMapper = (videos: any[]) => {
  return videos
    ? videos.map((video) => ({
        id: video.id,
        topic: {
          id: video.topic.id,
          title: video.topic.title
        },
        urlVideo: video.urlVideo,
        keys: video.keys,
        star: video.star,
        title: video.title,
        views: video.views,
        thumbnail: video.thumbnail
      }))
    : []
}

export const VideoPageMapper = (video: any) => {
  return video
    ? {
        id: video.id,
        topic: {
          id: video.topic?.id,
          title: video.topic?.title
        },
        title: video.title,
        urlVideo: video.urlVideo,
        star: video.star,
        keys: video.keys,
        views: video.views,
        thumbnail: video.thumbnail,
        student: {
          id: video.student?.id,
          name: video.student?.name,
          lastName: video.student?.lastName,
          imageUrl: video.student?.imageUrl
        },
        isFavorite: video.isFavorite,
        isStar: video.isStar
      }
    : {}
}

export const VideoStatsMapper = (videos: any[]) => {
  return videos
    ? videos.map((video) => ({
        title: video.title,
        views: video.views,
        thumbnail: video.thumbnail
      }))
    : []
}

export const VideoReportsMapper = (videos: any[]) => {
  return videos
    ? videos.map((video) => ({
        title: video.title,
        views: video.views,
        star: video.star,
        thumbnail: video.thumbnail
      }))
    : []
}

export const DocumentMapper = (documents: any[]) => {
  return documents
    ? documents.map((document) => ({
        id: document.id,
        title: document.title,
        urlDocument: document.urlDocument,
        stars: document.stars,
        keys: document.keys,
        views: document.views,
        topic: {
          id: document.topic.id,
          title: document.topic.title
        },
        student: {
          id: document.student.id,
          name: document.student.name,
          lastName: document.student.lastName,
          imageUrl: document.student.imageUrl
        }
      }))
    : []
}

export const MyDocumentMapper = (documents: any[]) => {
  return documents
    ? documents.map((document) => ({
        id: document.id,
        title: document.title,
        urlDocument: document.urlDocument,
        topicId: document.topic.id,
        stars: document.stars,
        keys: document.keys,
        views: document.views,
        topic: {
          id: document.topic.id,
          title: document.topic.title
        }
      }))
    : []
}

export const DocumentPageMapper = (document: any) => {
  return document
    ? {
        id: document.id,
        title: document.title,
        urlDocument: document.urlDocument,
        stars: document.stars,
        keys: document.keys,
        views: document.views,
        topic: {
          id: document.topic?.id,
          title: document.topic?.title
        },
        student: {
          id: document.student?.id,
          name: document.student?.name,
          lastName: document.student?.lastName,
          imageUrl: document.student?.imageUrl
        },
        isFavorite: document.isFavorite,
        isStar: document.isStar
      }
    : {}
}

export const DocumenStatstMapper = (documents: any[]) => {
  return documents
    ? documents.map((document) => ({
        title: document.title,
        views: document.views
      }))
    : []
}

export const DocumenReportstMapper = (documents: any[]) => {
  return documents
    ? documents.map((document) => ({
        title: document.title,
        views: document.views,
        stars: document.stars
      }))
    : []
}

export const ProfileMapper = (user: any) => {
  return user
    ? {
        name: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        phoneNumber: user.telephone,
        scholarity: user.scholarity,
        institution: user.institution,
        imageUrl: user.imageUrl,
        points: user.points
      }
    : {}
}

export const StudentsStatstMapper = (students: any[]) => {
  return students
    ? students.map((student) => ({
        photo: student.urlImage,
        name: `${student.name.firstName} ${student.name.lastName}`,
        points: student.point
      }))
    : []
}

export const StudentsReportMapper = (students: any[]) => {
  return students
    ? students.map((student) => ({
        name: `${student.name.firstName} ${student.name.lastName}`,
        points: student.point
      }))
    : []
}

export const StudentsMapper = (students: any[]) => {
  return students
    ? students.map((student) => ({
        id: student.id,
        photo: student.urlImage,
        fullName: `${student.name.firstName} ${student.name.lastName}`,
        userName: student.identityUser.userName,
        email: student.identityUser.email,
        points: student.point,
        isBlocked: student.isBlocked
      }))
    : []
}

export const StudentPageMapper = (student: any) => {
  return student
    ? {
        name: student.firstName,
        lastName: student.lastName,
        imageUrl: student.imageUrl,
        email: student.email,
        userName: student.userName,
        points: student.points,
        videos: student.videosPosted,
        documents: student.documentsPosted
      }
    : {}
}

export const TopicMapper = (topic: any) => {
  return topic
    ? {
        title: topic.title,
        description: topic.description,
        videos: topic.videos,
        documents: topic.documents
      }
    : {}
}

export const TopicsMapper = (topics: any[]) => {
  return topics
    ? topics.map((topic) => ({
        id: topic.id,
        title: topic.title,
        fatherId: topic.fatherTopicId,
        description: topic.description,
        sons: topic.sons
      }))
    : []
}
