import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: #000;
  &.active {
    color: red;
  }
`;
