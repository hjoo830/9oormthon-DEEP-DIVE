import React from "react";

const UserInfo = () => {
  const user = {
    name: "Hyoju",
    email: "hjoo830@naver.com",
    phone: "010-1234-5678",
  };

  // 객체 구조 분해로 정보 추출
  const { name, email, phone } = user;

  return (
    <div style={{ padding: "30px" }}>
      <h2>사용자 정보</h2>
      <p>이름: {name}</p>
      <p>이메일: {email}</p>
      <p>전화번호: {phone}</p>
    </div>
  );
};

export default UserInfo;
