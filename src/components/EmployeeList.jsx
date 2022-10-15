import styled from "styled-components";
import EmployeeListItem from "./EmployeeListItem";

const ListWrapper = styled.div`
  max-height: 450px;
  overflow-y: auto;
  padding: 10px;
`;

// if()

const EmployeeList = ({ users }) => {
  return (
    <ListWrapper>
      {users.map((user) => {
        return <EmployeeListItem key={user._id} user={user} />;
      })}
    </ListWrapper>
  );
};

export default EmployeeList;
