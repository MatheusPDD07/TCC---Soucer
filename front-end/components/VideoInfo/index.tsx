import { useState } from 'react'
import { useRouter } from 'next/router'

import Button from 'components/Button'

import { VideoPageData } from 'templates/Student/VideoPage'

import { useFavorites } from 'hooks/use-favorites'

import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineRemoveRedEye,
  MdOutlineStarBorderPurple500,
  MdStar
} from 'react-icons/md'

import * as S from './styles'
import { useStar } from 'hooks/use-star'
import { FormLoading } from 'components/Form'

export type VideoInfoProps = Pick<
  VideoPageData,
  'title' | 'id' | 'isFavorite' | 'keys' | 'star' | 'views' | 'isStar'
>

const VideoInfo = ({
  id,
  isFavorite,
  isStar,
  keys,
  star,
  title,
  views
}: VideoInfoProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { addStarToVideo, removeStarFromVideo } = useStar()
  const { addVideoToFavorites, removeVideoFromFavorites } = useFavorites()

  const addToFavorites = async (id: string) => {
    setIsLoading(true)
    await addVideoToFavorites(id)
    router.reload()
    setIsLoading(false)
  }

  const removeFromFavorites = async (id: string) => {
    setIsLoading(true)
    await removeVideoFromFavorites(id)
    router.reload()
    setIsLoading(false)
  }

  const addStarVideo = async (id: string) => {
    setIsLoading(true)
    await addStarToVideo(id)
    router.replace(router.asPath)
    setIsLoading(false)
  }

  const removeStarVideo = async (id: string) => {
    setIsLoading(true)
    await removeStarFromVideo(id)
    router.replace(router.asPath)
    setIsLoading(false)
  }

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Stats>
        <S.StatsBox>
          <MdOutlineRemoveRedEye size={18} />
          <small>
            {views} Visualizaç{views === 1 ? 'ão' : 'ões'}
          </small>
        </S.StatsBox>
        {isStar ? (
          <S.StatsBox
            className="boxClick active"
            role="button"
            onClick={() => removeStarVideo(id)}
          >
            {isLoading ? (
              <FormLoading />
            ) : (
              <>
                <MdStar size={20} />
                <small>
                  {star} Estrela{star !== 1 ? 's' : ''}
                </small>
              </>
            )}
          </S.StatsBox>
        ) : (
          <S.StatsBox
            className="boxClick"
            role="button"
            onClick={() => addStarVideo(id)}
          >
            {isLoading ? (
              <FormLoading />
            ) : (
              <>
                <MdOutlineStarBorderPurple500 size={20} />
                <small>
                  {star} Estrela{star !== 1 ? 's' : ''}
                </small>
              </>
            )}
          </S.StatsBox>
        )}
      </S.Stats>
      <S.Keys>
        <small>#{keys.split('; ').join(' #').replace(';', '')}</small>
      </S.Keys>
      {isFavorite ? (
        <Button
          fullWidth
          disabled={isLoading}
          onClick={() => removeFromFavorites(id)}
          icon={<MdOutlineFavorite size={22} />}
        >
          Remover dos Favoritos
        </Button>
      ) : (
        <Button
          fullWidth
          disabled={isLoading}
          onClick={() => addToFavorites(id)}
          icon={<MdOutlineFavoriteBorder size={22} />}
        >
          Adicionar aos Favoritos
        </Button>
      )}
    </S.Wrapper>
  )
}

export default VideoInfo
