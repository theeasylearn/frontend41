import styled from 'styled-components';
const Li = styled.li`
  background-color: navy;
  color: white;
  font-size: x-large;
  margin-bottom: 10px;
`;
export default function Player(props) {
  const {name,dob,matches,runs} = props;
  return (<Li>
    <strong>Player Name:</strong> {name}<br />
    <strong>Date of Birth:</strong> {dob}<br />
    <strong>One Day Matches:</strong> {matches}<br />
    <strong>Runs:</strong> {runs}
  </Li>);
}