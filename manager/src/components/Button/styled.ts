/**
 * Copyright 2021 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import styled, { css } from 'styled-components';

interface ButtonProps {
  outline?: boolean;
  rounded?: boolean;
  opaque?: boolean;
  ghost?: boolean;
  pulsing?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  width?: number | string;
  height?: number;
  color?: string;
  disabledColor?: string;
}

const Button = styled.button<ButtonProps>`
  background: linear-gradient(
    ${({ theme }) =>
      `90deg, ${theme.colors.button.primary} 0%, ${theme.colors.button.secundary} 100%`}
  );
  color: ${({ theme }) => theme.colors.button.text};
  width: ${({ width }) =>
    width ? (typeof width === 'string' ? width : `${width}px`) : '252px'};
  height: ${({ height }) => (height ? `${height}px` : '35px')};
  padding: 0px 15px;
  border-radius: 4px;
  box-sizing: border-box;
  border: none;
  font-size: ${({ theme }) => theme.metrics.fontSize.small};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  :hover {
    transform: scale(1.03);
  }

  ${({ pulsing }) =>
    pulsing &&
    css`
      animation: pulse 2s infinite;
    `};

  ${({ color }) =>
    color &&
    css`
      background: ${color};
    `};

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 18px;
    `};

  ${({ outline }) =>
    outline &&
    css`
      background: transparent;
      border: 1px solid ${({ theme }) => theme.colors.button.border};
    `};

  ${({ ghost }) =>
    ghost &&
    css`
      background: transparent;
      border: none;
    `};

  ${({ opaque }) =>
    opaque &&
    css`
      opacity: 0.6;
    `};

  ${({ isDisabled, isLoading, disabledColor }) =>
    (isDisabled || isLoading) &&
    css`
      cursor: default;
      background: ${({ theme }) =>
        disabledColor
          ? disabledColor
          : theme.colors.button.disabled} !important;

      > * {
        cursor: default;
      }

      :hover {
        transform: scale(1);
      }
    `};

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(239, 65, 35, 0.315);
      background-color: rgba(239, 65, 35, 0.4);
    }

    70% {
      box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

const Label = styled.span`
  display: block;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

export default { Button, Label, IconWrapper };
