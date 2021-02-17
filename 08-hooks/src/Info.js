import React, { useEffect, useReducer, useState } from "react";
import useInputs from "./useInputs";

// function reducer(state, action) {
//   // 객체 업데이트 시 사용하는 문법
//   // 기존 객체 + 변경된 값 추가 반영
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  // const [state, dispatch] = useReducer(reducer, {
  //   name: "",
  //   nickname: "",
  // });
  const { name, nickname } = state;
  // const onChange = (e) => {
  //   dispatch(e.target);
  // };
  // const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");

  // useEffect(() => {
  //   console.log("effect. name: ", name);
  //   return () => {
  //     console.log("cleanup. name: ", name);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("effect. name: ", name);
  //   return () => {
  //     console.log("cleanup. name: ", name);
  //   };
  // }, [name]);

  // useEffect(() => {
  //   console.log("렌더링이 완료되었습니다.");
  //   console.log({
  //     name,
  //     nickname,
  //   });
  // });

  // useEffect(() => {
  //   console.log("마운트될 때만 실행됩니다.");
  // }, []);

  // useEffect(() => {
  //   console.log("name 값이 업데이트될 때만 실행됩니다. name: ", { name });
  // }, [name]);

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };

  return (
    <div>
      <div>
        {/* <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} /> */}
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
