import { useState } from 'react'
import { useRouter } from 'next/router'

import * as S from './styles'

import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineRemoveRedEye,
  MdOutlineStarBorderPurple500,
  MdStar
} from 'react-icons/md'

import Button from 'components/Button'

import { useFavorites } from 'hooks/use-favorites'

import { DocumentPageData } from 'templates/Student/DocumentPage'
import { useStar } from 'hooks/use-star'
import { FormLoading } from 'components/Form'

export type DocumentInfoProps = Pick<
  DocumentPageData,
  'id' | 'title' | 'isFavorite' | 'keys' | 'stars' | 'views' | 'isStar'
>

const DocumentInfo = ({
  id,
  isFavorite,
  isStar,
  keys,
  stars,
  title,
  views
}: DocumentInfoProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { addStarToDocument, removeStarFromDocument } = useStar()
  const { addDocumentToFavorites, removeDocumentFromFavorites } = useFavorites()

  const addToFavorites = async (id: string) => {
    setIsLoading(true)
    await addDocumentToFavorites(id)
    router.replace(router.asPath)
    setIsLoading(false)
  }

  const removeFromFavorites = async (id: string) => {
    setIsLoading(true)
    await removeDocumentFromFavorites(id)
    router.replace(router.asPath)
    setIsLoading(false)
  }

  const addStarDocument = async (id: string) => {
    setIsLoading(true)
    await addStarToDocument(id)
    router.replace(router.asPath)
    setIsLoading(false)
  }

  const removeStarDocument = async (id: string) => {
    setIsLoading(true)
    await removeStarFromDocument(id)
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
            onClick={() => removeStarDocument(id)}
          >
            {isLoading ? (
              <FormLoading />
            ) : (
              <>
                <MdStar size={20} />
                <small>
                  {stars} Estrela{stars !== 1 ? 's' : ''}
                </small>
              </>
            )}
          </S.StatsBox>
        ) : (
          <S.StatsBox
            className="boxClick"
            role="button"
            onClick={() => addStarDocument(id)}
          >
            {isLoading ? (
              <FormLoading />
            ) : (
              <>
                <MdOutlineStarBorderPurple500 size={20} />
                <small>
                  {stars} Estrela{stars !== 1 ? 's' : ''}
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

export default DocumentInfo
