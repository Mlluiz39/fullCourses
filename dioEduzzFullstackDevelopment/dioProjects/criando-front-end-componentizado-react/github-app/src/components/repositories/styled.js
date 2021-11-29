import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  display: flex;
  justify-content: center;
  list-style-type: none;
  display: flex;
  margin: 0;

  @media (max-width: 360px){
    width: 95%;
    margin: 0 auto;
  }
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 285px;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: #5d5b59;
  margin: 8px;
  color: #fff;
  border: 1px solid #ccc;
  border-radius: 16px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
