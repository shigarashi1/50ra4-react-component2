import styled from 'styled-components';
import { keys, toPairs } from '50ra4-library';

import { createStoryMeta, createStoryTemplate } from '../storybookUtils';

import { lightTheme } from './theme';

const { palette } = lightTheme.color;

const Component: React.FC = () => {
  const paletteKeys = keys(palette);
  return (
    <StyledRoot>
      {paletteKeys.map((title) => (
        <div key={title}>
          <StyledPaletteLabel>{title}</StyledPaletteLabel>
          <StyledPaletteWrapper>
            {toPairs(palette[title]).map(([label, color]) => (
              <StyledColor key={label} color={color}>
                <div>
                  <StyledColorText isBlack={true}>{`${label}(${color})`}</StyledColorText>
                  <StyledColorText isBlack={false}>{`${label}(${color})`}</StyledColorText>
                </div>
              </StyledColor>
            ))}
          </StyledPaletteWrapper>
        </div>
      ))}
    </StyledRoot>
  );
};

export default createStoryMeta(Component, {
  title: 'theme/ColorPalette',
});

const Template = createStoryTemplate(Component);
export const Docs = Template.bind({});

const StyledRoot = styled.div``;

const StyledPaletteLabel = styled.label`
  display: block;
  width: 100%;
`;

const StyledPaletteWrapper = styled.div`
  display: flex;
`;

const StyledColor = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  width: 150px;
  height: 150px;
`;

const StyledColorText = styled.div<{ isBlack: boolean }>`
  display: block;
  width: 100%;
  color: ${({ isBlack, theme }) => (isBlack ? theme.font.color.black : theme.font.color.white)};
`;
