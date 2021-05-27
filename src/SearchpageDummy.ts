const SearchDataDummy = {
  mainContent: [
    {
      count: 6,
      _id: "60ac7f5c4881a3084c98ea3e",
      title: "Promise.all()",
      body: "Promise.all() 메서드는 순회 가능한 객체에 주어진 모든 프로미스가 이행한 후, 혹은 프로미스가 주어지지 않았을 때 이행하는 Promise를 반환합니다. 주어진 프로미스 중 하나가 거부하는 경우, 첫 번째로 거절한 프로미스의 이유를 사용해 자신도 거부합니다.",
      updatedAt: "2019-07-05T15:00:00.000Z",
    },
    {
      count: 0,
      _id: "60ac7f924881a3084c98ea3f",
      title: "Promise.allSettled()",
      body: "Promise.allSettled() 메소드는 배열이나 별도의 나열 가능한 객체를 통해 나열된 Promise모음이 모두 이행하거나 거부했을 때에 대한 대응을 할 수 있는 Promise 객체를 반환한다.",
      updatedAt: "2019-07-05T15:00:00.000Z",
    },
    {
      count: 0,
      _id: "60ac802f4881a3084c98ea40",
      title: "Promise.finally()",
      body: "finally() 메소드는 Promise 객체를 반환합니다. Promise가 처리되면 충족되거나 거부되는지 여부에 관계없이 지정된 콜백 함수가 실행됩니다. 이것은 Promise가 성공적으로 수행 되었는지 거절되었는지에 관계없이 Promise가 처리 된 후에 코드가 무조건 한 번은 실행되는 것을 제공합니다.",
      updatedAt: "2019-07-05T15:00:00.000Z",
    },
    {
      count: 0,
      _id: "60ac80664881a3084c98ea41",
      title: "Promise.catch()",
      body: "이 catch()메서드는 a를 반환하고 Promise거부 된 사례 만 처리합니다. 호출과 동일하게 작동합니다 Promise.prototype.then(undefined, onRejected)(사실 obj.catch(onRejected)내부 호출 obj.then(undefined, onRejected)). 이는 예를 들어 결과 값 onRejected으로 폴백하려는 경우에도 함수 를 제공해야 함을 의미합니다 . undefinedobj.catch(() => {})",
      updatedAt: "2019-07-05T15:00:00.000Z",
    },
    {
      count: 0,
      _id: "60ac80834881a3084c98ea42",
      title: "Promise.any()",
      body: "Promise.any()반복 가능한 Promise객체를 취하고, 반복 가능한 약속 중 하나가 충족되는 즉시 해당 약속의 값으로 해결되는 단일 약속을 반환합니다. 반복 가능한 이행에 약속이없는 경우 (주어진 모든 약속이 거부 된 경우) 반환 된 약속은 개별 오류를 함께 그룹화 AggregateError하는 새 하위 클래스로 거부됩니다 Error. 기본적으로이 방법은 Promise.all().",
      updatedAt: "2019-07-05T15:00:00.000Z",
    },
    // {
    //   count: 0,
    //   _id: "60ac809b4881a3084c98ea43",
    //   title: "Promise.race()",
    //   body: "이 Promise.race()메서드는 iterable의 약속 중 하나가 해당 약속의 값이나 이유를 충족하거나 거부하자마자 충족하거나 거부하는 약속을 반환합니다.",
    //   updatedAt: "2019-07-05T15:00:00.000Z",
    // },
    // {
    //   count: 0,
    //   _id: "60ac80b44881a3084c98ea44",
    //   title: "Promise.reject()",
    //   body: "Promise.reject()메서드는 Promise주어진 이유로 거부 된 개체를 반환합니다 .",
    //   updatedAt: "2019-07-05T15:00:00.000Z",
    // },
    // {
    //   count: 0,
    //   _id: "60ac81064881a3084c98ea45",
    //   title: "Promise.resolve()",
    //   body: "이 Promise.resolve()메서드는 Promise주어진 값으로 해결 되는 개체를 반환 합니다. 값이 promise이면 해당 promise가 반환됩니다. 값이 thenable이면 (즉 then method), 반환 된 promise는 thenable을 따라최종 상태를 채택합니다. 그렇지 않으면 반환 된 약속이 값으로 이행됩니다. 이 함수는 약속과 유사한 객체의 중첩 된 레이어 (예 : 무언가를 해결하는 약속으로 확인되는 약속)를 단일 레이어로 병합합니다.",
    //   updatedAt: "2019-07-05T15:00:00.000Z",
    // },
    // {
    //   count: 0,
    //   _id: "60ac813b4881a3084c98ea46",
    //   title: "Promise.then()",
    //   body: "이 then()메서드는 Promise. 최대 두 개의 인수를 사용합니다. .NET Framework의 성공 및 실패 사례에 대한 콜백 함수입니다 Promise.",
    //   updatedAt: "2019-07-05T15:00:00.000Z",
    // },
  ],
  helpdeskContent: [
    {
      tags: ["javascript", "method"],
      commentCount: 1,
      like: 9,
      _id: "60a680241268412fe6bf075e",
      title: "Promise가 뭔가요?",
      body: "Promise???",
      userId: {
        nickName: "kim",
        kakaoId: "kakaoId",
        githubId: "githubId",
        image: "image",
        _id: "_id",
        __v: 0,
      },
      createdAt: "2021-05-20T15:28:36.048Z",
      updatedAt: "2021-05-23T13:04:08.135Z",
      __v: 0,
    },
  ],
};

export default SearchDataDummy;
