import { useState } from 'react'
import { Pagination } from 'react-pagination-bar'

import DocumentCrudCard, {
  DocumentCrudCardProps
} from 'components/DocumentCrudCard'
import Empty from 'components/Empty'

import * as S from './styles'

type TopicData = {
  id: string
  title: string
}

export type DocumentCrudCardPaginationProps = {
  items: DocumentCrudCardProps[]
  topics: TopicData[]
  pageButton?: React.ReactNode
}

const DocumentCrudCardPagination = ({
  items,
  topics,
  pageButton
}: DocumentCrudCardPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pagePostsLimit = 12 as number

  return (
    <S.Wrapper>
      <S.ItemsArea>
        {items.length > 0 ? (
          items
            .slice(
              (currentPage - 1) * pagePostsLimit,
              (currentPage - 1) * pagePostsLimit + pagePostsLimit
            )
            .map((item) => (
              <DocumentCrudCard key={item.id} {...item} topics={topics} />
            ))
        ) : (
          <Empty
            title="Não há Documentos"
            description="Não foram adicionados documentos até o momento"
            pageButton={pageButton}
          />
        )}
      </S.ItemsArea>
      <Pagination
        initialPage={currentPage}
        itemsPerPage={pagePostsLimit}
        onPageСhange={(pageNumber: number) => setCurrentPage(pageNumber)}
        totalItems={items.length}
        pageNeighbours={2}
        startLabel={'<<'}
        endLabel={'>>'}
        nextLabel={'>'}
        prevLabel={'<'}
        customClassNames={{
          rpbItemClassName: 'custom-item',
          rpbItemClassNameActive: 'custom-item--active',
          rpbGoItemClassName: 'custom-go-item',
          rpbItemClassNameDisable: 'custom-item--disable',
          rpbProgressClassName: 'custom-progress-bar',
          rpbRootClassName: 'custom-root'
        }}
      />
    </S.Wrapper>
  )
}

export default DocumentCrudCardPagination
