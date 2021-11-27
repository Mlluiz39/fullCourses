import React from 'react'
import RepositoryItem from '../repository-item/RepositoryItem'
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
      <S.WrapperTabPanel>
        <RepositoryItem
          name="codeCel"
          linkToRepo="https://github.com/Mlluiz39/codeCel"
          fullName="Mlluiz39/codeCel"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
        name="dio-node-user-authentication-api"
        linkToRepo="https://github.com/Mlluiz39/dio-node-user-authentication-api"
        fullName="Mlluiz39/dio-node-user-authentication-api" 
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories
