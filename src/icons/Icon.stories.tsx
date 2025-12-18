import type { Meta } from "@storybook/react";
import * as Icons from "./index";
import {
  IconsGrid,
  IconCard,
  IconWrapper,
  IconName,
  IndexBadge
} from "./Icon.styled";

const meta: Meta = {
  title: "Flowkit/Icons"
};

export default meta;

export const AllIcons = (): JSX.Element => (
  <IconsGrid>
    {Object.entries(Icons).map(([name, Icon], index) => (
      <IconCard key={name}>
        <IndexBadge>{index + 1}</IndexBadge>
        <IconWrapper>
          <Icon width={32} height={32} />
        </IconWrapper>
        <IconName>{name}</IconName>
      </IconCard>
    ))}
  </IconsGrid>
);
