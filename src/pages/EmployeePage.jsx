import React, { useContext } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { UserContext } from "../context/UserContextProvider";

const EmployeePageContainer = styled.div`
  width: 400px;
  margin-left: 10px;
  height: 500px;
  padding: 10px;
`;

const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 8px;
  transition: all 0.2s ease;

  padding: 15px;
  margin-top: 25px;
  border: 1px solid #eee;
  margin-bottom: 30px;
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

const ListWrapper = styled.div`
  padding: 10px;
  border: 1px solid #fff5f5;
  border-radius: 5px;
  margin-bottom: 10px;

  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }
`;

const StyledParagraph = styled.p`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
`;

const EmployeePage = () => {
  const {
    selectedUser,
    setSelectedUser,
    allUsers,
    setAllUsers,
    loadingUsers,
    setLoadinUsers,
  } = useContext(UserContext);

  return (
    <>
      <EmployeePageContainer>
        <Header title={"Employee"} />

        {/* If the page has finished loading and has no selected user */}
        {!selectedUser && !loadingUsers && (
          <StyledParagraph>No User Selected!</StyledParagraph>
        )}
        {/* If the page has finished loading and user is selected */}

        {selectedUser && (
          <>
            <StyledWrapper>
              <StyledImage src={selectedUser.imageUrl} alt="Profile" />
              <div>
                <TitleText>{selectedUser.name}</TitleText>
                <SubTitleText>{selectedUser.position}</SubTitleText>
              </div>
            </StyledWrapper>
            {/* Contact Lists */}
            <ListWrapper>
              <TitleText>Call Office</TitleText>
              <SubTitleText>{selectedUser.officeNo}</SubTitleText>
            </ListWrapper>

            <ListWrapper>
              <TitleText>Call Mobile</TitleText>
              <SubTitleText>{selectedUser.mobileNo}</SubTitleText>
            </ListWrapper>

            <ListWrapper>
              <TitleText>SMS</TitleText>
              <SubTitleText>{selectedUser.smsNo}</SubTitleText>
            </ListWrapper>

            <ListWrapper>
              <TitleText>E-mail</TitleText>
              <SubTitleText>{selectedUser.email}</SubTitleText>
            </ListWrapper>
          </>
        )}
      </EmployeePageContainer>
    </>
  );
};

export default EmployeePage;
