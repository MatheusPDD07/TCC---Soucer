import * as S from './styles'

export type Color = 'color' | 'white'

export type HeadingProps = {
  title: string
  subtitle?: string
  color?: Color
}

const Heading = ({ title, subtitle, color = 'color' }: HeadingProps) => (
  <S.Wrapper title={title} color={color}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </S.Wrapper>
)

export default Heading
