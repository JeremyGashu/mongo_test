import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../context/UserContextProvider";

const StyledImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 10px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  margin-bottom: 8px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }
`;

const TitleText = styled.p`
  font-size: 15px;
  font-weight: 500;
  padding-left: 15px;
  margin: 0px;
  margin-bottom: 5px;
`;

const SubTitleText = styled.p`
  font-size: 12px;
  padding-left: 15px;
  margin: 0px;
`;

const EmployeeListItem = ({ user }) => {
  const {
    selectedUser,
    setSelectedUser,
    allUsers,
    setAllUsers,
    loadingUsers,
    setLoadinUsers,
  } = useContext(UserContext);

  return (
    <StyledWrapper
      onClick={() => {
        setSelectedUser(user);
      }}
    >
      <StyledImage src={user.imageUrl} alt="Profile" />
      <div>
        <TitleText>{user.name}</TitleText>
        <SubTitleText>{user.position}</SubTitleText>
      </div>
    </StyledWrapper>
  );
};

export default EmployeeListItem;
