import React, { createContext, useState } from 'react'


export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
})

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    user: {
      login: undefined,
      name: undefined,
      publicUrl: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: undefined,
      following: undefined,
      public_gists: undefined,
      public_repos: undefined,
    },
    repositories: [],
    starred: [],
  })

  const contextValue = {
    githubState,
  }

  return(
    <GithubContext.Provider value={contextValue}>
      { children }
    </GithubContext.Provider>
  )
}

export default GithubProvider
