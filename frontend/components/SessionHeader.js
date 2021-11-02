import styled from "styled-components";
import PropTypes from "prop-types";

const SessionHeader = styled.h3`
  text-align: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "30px")};\
  margin-bottom: 0.5rem;
`;

SessionHeader.propTypes = {
  fontSize: PropTypes.string,
};

export default SessionHeader;
