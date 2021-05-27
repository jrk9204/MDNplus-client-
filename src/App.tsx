import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";
import userIcon from "./img/userIcon_gray.png";
import useBooleanData from "./Hooks/useBooleanData";
//공통
import Nav from "./Components/Nav";
import SideBar from "./Components/SideBar";
import SearchPage from "./Pages/SearchPage";
import NameSettingPage from "./Pages/NameSettingPage";
import MyPage from "./HelpdeskPages/MyPage";
// Wiki
import ContentPage from "./Pages/ContentPage";
import SettingPage from "./Pages/SettingPage";
import EditPage from "./Pages/EditPage";
import MainPage from "./Pages/MainPage";
// helpDesk
import QcontentPage from "./HelpdeskPages/QcontentPage";
import AnswerPage from "./HelpdeskPages/AnswerPage";
import FAQ from "./Pages/FAQ";

import "./App.css";
import HelpdeskPage from "./HelpdeskPages/HelpdeskPage";
import HquestionPage from "./HelpdeskPages/HquestionPage";
import useAllData from "./Hooks/useAllData";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [userImg, setUserImg] = useState(userIcon);
  const { BooleanState } = useBooleanData();
  const { writeMode } = BooleanState;

  const handleLoginModal = () => {
    console.log("로그인 모달 다루는 코드 실행됨");
    setIsLogInOpen(!isLogInOpen);
  };

  const handleChangeMenuIcon = (url: string) => {
    console.log("이미지 바뀌는 요청 들어옴");
    setUserImg(url);
  };

  const handleLogin = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };

  return (
    <>
      {writeMode ? null : <Nav userImg={userImg} isLogin={isLogin} isLogInOpen={isLogInOpen} handleLogin={handleLogin} handleLoginModal={handleLoginModal}></Nav>}
      <Container>
        {writeMode ? null : <SideBar></SideBar>}
        <Switch>
          <Route exact path="/" render={() => <MainPage />} />
          <Route path="/ContentPage" render={() => <ContentPage isLogin={isLogin} handleLoginModal={handleLoginModal} />} />
          <Route path="/EditPage" render={() => <EditPage />} />
          <Route path="/SearchPage" render={() => <SearchPage />} />
          <Route path="/SettingPage" render={() => <SettingPage handleLogin={handleLogin} handleChangeMenuIcon={handleChangeMenuIcon} />} />
          <Route path="/NameSettingPage" render={() => <NameSettingPage />} />
          <Route path="/MyPage" render={() => <MyPage />} />
          <Route path="/HelpdeskPage" render={() => <HelpdeskPage />} />
          <Route path="/AnswerPage" render={() => <AnswerPage />} />
          <Route path="/HquestionPage" render={() => <HquestionPage />} />
          <Route path="/QcontentPage" render={() => <QcontentPage />} />
          <Route path="/FAQ" render={() => <FAQ />} />
        </Switch>
      </Container>
    </>
  );
}

export default withRouter(App);

const Container = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;
