import Link from 'next/link'
import { useState } from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import UserDropdown from 'components/UserDropdown'

import * as S from './styles'

import { RiMenu2Fill, RiCloseFill } from 'react-icons/ri'
import { signOut } from 'next-auth/client'
import { useRouter } from 'next/router'

export type MenuProps = {
  username?: string | null
  loading?: boolean
  isAdmin?: boolean
}

const Menu = ({ username, loading, isAdmin }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { push } = useRouter()
  return (
    <S.Wrapper isOpen={isOpen}>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <RiMenu2Fill size={30} aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo size="large" color="color" hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      {!loading && (
        <>
          <S.MenuGroup>
            <MediaMatch greaterThan="medium">
              {!username ? (
                <Link href="/sign-in" passHref>
                  <Button as="a">Entrar</Button>
                </Link>
              ) : (
                <UserDropdown username={username} isAdmin={isAdmin} />
              )}
            </MediaMatch>
          </S.MenuGroup>

          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <RiCloseFill
              size={30}
              aria-label="Close Menu"
              onClick={() => setIsOpen(false)}
            />

            <S.MenuNav>
              {!!username && (
                <>
                  <Link href="/student/dashboard" passHref>
                    <S.MenuLink>Painel de Controle</S.MenuLink>
                  </Link>
                  <Link href="/student/profile" passHref>
                    <S.MenuLink>Perfil</S.MenuLink>
                  </Link>
                  <Link href="/student/favorites" passHref>
                    <S.MenuLink>Favoritos</S.MenuLink>
                  </Link>

                  <S.MenuLink
                    role="button"
                    title="Sair"
                    onClick={async () => {
                      const data = await signOut({
                        redirect: false,
                        callbackUrl: '/'
                      })
                      push(data.url)
                    }}
                  >
                    <span>Sair</span>
                  </S.MenuLink>
                </>
              )}
            </S.MenuNav>

            {!username && (
              <S.RegisterBox>
                <Link href="/sign-in" passHref>
                  <Button fullWidth size="large" as="a">
                    Entrar
                  </Button>
                </Link>
                <span>ou</span>
                <Link href="/sign-up" passHref>
                  <S.CreateAccount title="Crie sua conta">
                    Cadastre-se
                  </S.CreateAccount>
                </Link>
              </S.RegisterBox>
            )}
          </S.MenuFull>
        </>
      )}
    </S.Wrapper>
  )
}

export default Menu
