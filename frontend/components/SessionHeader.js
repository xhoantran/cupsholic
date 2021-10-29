import styled from "styled-components";
import PropTypes from "prop-types";

const SessionHeader = styled.h3`
  text-align: center;
  font-size: ${(props) => props.fontSize};
`;

SessionHeader.propTypes = {
  fontSize: PropTypes.string,
};

export default SessionHeader;
