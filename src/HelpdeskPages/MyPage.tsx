import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allDataAction } from "../Redux/MyPageData";
import { RootState } from "../Redux";
import { useHistory, useLocation } from "react-router-dom";
import { currentQData } from "../Redux/QcontentData";
import styled from "styled-components";
import FakeData2 from "../FakeData2";
import myPageFakeData from "../mypageFakeData";

import axios from "axios";

type QuestionType = {
  tags: string[];
  commentCount: number;
  like: number;
  _id: string;
  title: string;
  body: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type AnswerType = {
  like: number;
  _id: string;
  questionId: {
    _id: string;
    title: string;
  };
  content: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

function MyPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allState = useSelector((state: RootState) => state.MyPageReducer);
  const { mdnAllData } = allState;
  const [isQuestion, setIsQuestion] = useState(true);
  const [questionColor, setQuestionColor] = useState("blue");
  const [answerColor, setAnswerColor] = useState("black");

  useEffect(() => {
    dispatch(allDataAction(myPageFakeData));
  }, []);

  //나의 질문에는 질문자가 질문한 제목,내용,날짜
  //나의 답변에는 답변된 질문의 제목과, 답변내용
  const handleMyQuestions = (el: QuestionType) => {
    //myPage 에서 클릭한 question Id 값으로 요청보내면됨 Q컨텐트페이지에서 데이터 받게됨.
    // dispatch(currentQData(el));

    history.push({
      pathname: "/Qcontentpage",
      state: { pageName: "this is Question State" },
    });
  };

  const handleMyAnswers = (el: AnswerType) => {
    //해당 답변을 클릭했을시 질문에 해당하는 ID를 요청보내주면됨
    // el.questionId;
    // const findData = questionData?.allData.filter((questionTitle) => questionTitle.title == answerTitle);
    // const findData = questionData?.allData.filter((el) => (el.answers.filter((questionTitle) => questionTitle.qTitle === answerTitle)));
    // const findData = mdnAllData?.filter((all) => all.title === el.qTitle);
    // console.log(findData);
    // if (findData !== undefined && findData !== null) {
    //   dispatch(currentQData(findData[0]));
    //   history.push({
    //     pathname: "/Qcontentpage",
    //     state: { pageName: "this is Answer State" },
    //   });
    // }
    // dispatch(currentQData(findData));
    // history.push({
    //   pathname: "/Qcontentpage",
    //   state: { pageName: "this is answer state" },
    // });
  };

  const HandleMDNClicked = () => {
    setQuestionColor("blue");
    setAnswerColor("black");
    setIsQuestion(true);
  };

  const HandleHelpDeckClicked = () => {
    setAnswerColor("blue");
    setQuestionColor("black");
    setIsQuestion(false);
  };

  return (
    <Container>
      <UserInfoContainer>
        <UserInfoImage> 유저 사진</UserInfoImage>
        <UserInfoName> 유저이름</UserInfoName>
      </UserInfoContainer>
      <LeftContainer>
        <QuestionList style={{ color: questionColor }} onClick={HandleMDNClicked}>
          나의질문
        </QuestionList>
        <AnswerList style={{ color: answerColor }} onClick={HandleHelpDeckClicked}>
          나의답변
        </AnswerList>
      </LeftContainer>
      <RightContainer>
        {isQuestion ? (
          <QuestionContainer>
            {mdnAllData?.questions.map((el) => (
              <QuestionBox key={el._id} onClick={() => handleMyQuestions(el)}>
                <QuestionTitle>{el.title}</QuestionTitle>
                <QuestionBody>{el.body}</QuestionBody>
                <div>
                  {el.tags.map((el, index: number) => (
                    <QuestionTag key={index}>{el}</QuestionTag>
                  ))}
                </div>
                <QuestionLastLine>
                  <QuestionLikes> 좋아요: &nbsp; {el.like}</QuestionLikes>
                  <QuestionAnswersNum>답변수:&nbsp; {el.commentCount}</QuestionAnswersNum>
                  <QuestionDate>{el.createdAt}</QuestionDate>
                </QuestionLastLine>
                {/* <div>나의 질문에 대한 답변</div>
                  <div>
                    {el.answers.map((el) => (
                      <div>
                        <div>{el.userName}</div>
                        <div>{el.qTitle}</div>
                        <div>{el.body}</div>
                        <div>{el.likes}</div>
                        <div>{el.createdAt}</div>
                      </div>
                    ))}
                  </div> */}
              </QuestionBox>
            ))}
          </QuestionContainer>
        ) : (
          <QuestionContainer>
            {mdnAllData?.comments.map((el) => (
              <QuestionBox key={el._id} onClick={() => handleMyAnswers(el)}>
                <QuestionTitle>
                  <span>Q</span>
                  {el.questionId.title}
                </QuestionTitle>
                <QuestionBody>{el.content}</QuestionBody>
                <QuestionLastLine>
                  <QuestionLikes> 좋아요: &nbsp;{el.like}</QuestionLikes>
                  <QuestionDate>{el.createdAt}</QuestionDate>
                </QuestionLastLine>
              </QuestionBox>
            ))}
          </QuestionContainer>
        )}
      </RightContainer>
    </Container>
  );
}

export default MyPage;

const Container = styled.div`
  margin-top: 1rem;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 300px 1000px;
`;

const QuestionList = styled.div`
  margin: 1rem;
  font-size: 1.5rem;
  &:hover {
    color: #005ce7;
  }
`;

const AnswerList = styled.div`
  margin: 1rem;
  font-size: 1.5rem;

  &:hover {
    color: #005ce7;
  }
`;

const QuestionContainer = styled.div``;

const QuestionBox = styled.div`
  border-radius: 1rem;
  border: none;
  padding: 0 1rem 1rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 10px 10px 20px;
  background: white;
  cursor: pointer;
  margin: 2rem 0 2rem 0;
`;

const AnswerContainer = styled.div``;

const UserInfoContainer = styled.div`
  grid-area: 1/2/2/8;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #a7a3a3;
`;

const UserInfoImage = styled.div`
  margin: 8rem;
`;

const UserInfoName = styled.div`
  margin: 3rem;
`;

const LeftContainer = styled.div`
  grid-area: 2/2/3/3;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  padding: 2rem;
`;

const RightContainer = styled.div`
  grid-area: 2/3/3/8;
`;

const QuestionTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  padding 1rem;
`;

const QuestionBody = styled.div`
padding 0.7rem;
margin: 1.5rem 0 2rem 2rem;
line-height: 1.8rem;
`;

const QuestionAnswersNum = styled.span`
padding 0.5rem;`;

const QuestionDate = styled.span`
padding 0.5rem;
margin-right:1rem;
`;

const QuestionLikes = styled.span`
padding 0.5rem;
margin-right:1rem;

`;

const QuestionTag = styled.span`
  font-size: 0.8rem;
  border-radius: 1.5rem;
  border: none;
  padding: 0.5rem;
  margin: 0.5rem;
  color: #1658d8;
  background-color: #f5f5f5;
`;

const QuestionLastLine = styled.div`
  text-align: right;
  margin: 1.2rem 0 3rem 0;
  color: #686868;
`;
