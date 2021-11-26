import React from 'react'
import * as S from './styled'

const Repositories = () => {
  return (
    <S.WrapperTabs 
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>Painel dos Repositórios</S.WrapperTabPanel>
      <S.WrapperTabPanel>Painel dos Favoritos</S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories
