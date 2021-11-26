import styled from "styled-components"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export const WrapperTab = styled(Tab)`
  margin: 8px;
  border-radius: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  user-select: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(54, 27, 27, 0.3);
    background-color: #4444d4;
    color: white;
    border: none;
  }
`
export const WrapperTabs = styled(Tabs)`
  font-size: 1rem;
  width: 100%;
  margin-top: 16px;
`

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 5px;
  display: flex;
  margin: 0;
`

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  margin-top: --5px;
  display: none;
  
  &.is-selected {
    display: block;
  }
`
