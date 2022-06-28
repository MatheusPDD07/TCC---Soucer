import { useState } from 'react'
import { Pagination } from 'react-pagination-bar'

import Empty from 'components/Empty'
import TopicCrudCard, { TopicCrudCardProps } from 'components/TopicCrudCard'

import * as S from './styles'

type TopicData = {
  id: string
  title: string
}

export type TopicCrudCardPaginationProps = {
  items: TopicCrudCardProps[]
  topics: TopicData[]
  pageButton?: React.ReactNode
}

const TopicCrudCardPagination = ({
  items,
  topics,
  pageButton
}: TopicCrudCardPaginationProps) => {
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
              <TopicCrudCard key={item.id} {...item} topics={topics} />
            ))
        ) : (
          <Empty
            title="Não há Categoria"
            description="Não foram adicionadas categorias até o momento"
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

export default TopicCrudCardPagination
