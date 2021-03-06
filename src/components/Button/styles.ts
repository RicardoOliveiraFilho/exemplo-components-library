import styled, { css } from 'styled-components';

type StyledButtonProps = {
  mode: string;
  size: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${
    props => props.mode === 'primary'
      ? css`
        color: white;
        background-color: #1ea7fd;
      `
      : css`
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `
  }

  ${
    props => {
      if (props.size === 'small') {
        return css`
          font-size: 12px;
          padding: 10px 16px;
        `;
      } else if (props.size === 'medium') {
        return css`
          font-size: 14px;
          padding: 11px 20px;
        `;
      } else {
        return css`
          font-size: 16px;
          padding: 12px 24px;
        `;
      }
    }
  }
`;