import React, { useContext } from "react";
import styled from "styled-components";
import EmployeeList from "../components/EmployeeList";
import Header from "../components/Header";
import { UserContext } from "../context/UserContextProvider";

const HomePageContainer = styled.div`
  width: 400px;
  margin-right: 10px;
  height: 500px;
  padding: 10px;
`;

const StyledParagraph = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 70px;
`;

const HomePage = () => {
  const {
    selectedUser,
    setSelectedUser,
    allUsers,
    setAllUsers,
    loadingUsers,
    setLoadinUsers,
  } = useContext(UserContext);

  return (
    <HomePageContainer>
      <Header title={"Employees Directory"} />
      {loadingUsers && <StyledParagraph>Loading...</StyledParagraph>}
      {!loadingUsers && <EmployeeList users={allUsers} />}
    </HomePageContainer>
  );
};

export default HomePage;
