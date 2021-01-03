import React, { useState } from 'react';
import styled from 'styled-components';

import { ArrowLeftIcon } from '../../display';

type Props = {
  className?: string;
  id: string;
  title: string;
  disabled?: boolean;
  defaultExpanded: boolean;
};

const AccordionBase: React.FC<Props> = ({
  id,
  className,
  title,
  disabled = false,
  defaultExpanded = false,
  children = null,
}) => {
  const areaLabel = `accordion-${id}-header`;
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const onClickHandler = (_event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!disabled) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <StyledRoot className={className}>
      <StyledTitleWrapper
        role="button"
        id={id}
        aria-controls={areaLabel}
        aria-disabled={!isExpanded}
        aria-expanded={isExpanded}
        onClick={onClickHandler}
      >
        <StyledTitle>{title}</StyledTitle>
        <StyledArrowLeftIcon isExpanded={isExpanded} color="default" />
      </StyledTitleWrapper>
      <StyledContentWrapper isExpanded={isExpanded} id={id} aria-labelledby={areaLabel}>
        {children}
      </StyledContentWrapper>
    </StyledRoot>
  );
};

const StyledRoot = styled.div``;
const StyledTitleWrapper = styled.div``;
const StyledTitle = styled.label``;
const StyledArrowLeftIcon = styled(ArrowLeftIcon)<{ isExpanded: boolean }>`
  transition: transform 0.3s linear;
  transform: ${({ isExpanded }) => `rotate(${isExpanded ? 90 : 270}deg)`};
`;
const StyledContentWrapper = styled.div<{ isExpanded: boolean }>`
  ${({ isExpanded }) =>
    isExpanded
      ? `
    transition: height 0.3s, opacity 0.3s linear;
    height: auto;
    opacity: 1;
    padding: 4px;
  `
      : `
    overflow: hidden;
    height: 0;
    opacity: 0;
  `}
`;

export const Accordion = styled(AccordionBase)`
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  opacity: ${({ disabled }) => disabled && 0.5};
  padding: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  & > ${StyledTitleWrapper} {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 4px;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    &:hover {
      opacity: ${({ disabled }) => !disabled && 0.5};
    }
    & > ${StyledTitle} {
      display: inline-block;
      font-weight: ${({ theme }) => theme.font.weight.bold};
    }
    & > ${StyledArrowLeftIcon} {
      display: inline-block;
    }
  }
  & > ${StyledContentWrapper} {
    display: inline-block;
    width: 100%;
  }
`;
