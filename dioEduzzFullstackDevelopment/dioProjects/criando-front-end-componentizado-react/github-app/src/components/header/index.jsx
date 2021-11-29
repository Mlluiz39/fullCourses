import React, { useState } from 'react'
import useGithub from '../../hooks/github-hooks'
import { FiSearch } from 'react-icons/fi'
import * as S from "./styled";

const Header = () => {
  const { getUser } = useGithub()
  const [usernameForSearch, setUsernameForSearch] = useState()

  const submitGetUser = () => {
    if (!usernameForSearch) return
    return getUser(usernameForSearch)
  }

  return (
    <S.Wrapper>
      <S.HeaderSection>
        <S.HeaderTitle>Github Profile</S.HeaderTitle>
        <S.HeaderInputContainer>
          <S.HeaderInput
            type="text"
            placeholder="digite o username..."
            onChange={event => setUsernameForSearch(event.target.value)}
          />

          <S.HeaderSearchButton>
            <button type="submit" onClick={submitGetUser}>
              <FiSearch size={15} />
            </button>
          </S.HeaderSearchButton>
        </S.HeaderInputContainer>
      </S.HeaderSection>
    </S.Wrapper>
  )
}

export default Header
