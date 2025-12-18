import styled from "styled-components";

export const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
  padding: 16px;
`;

export const IconCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: 1px solid #999;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

export const IconWrapper = styled.div`
  position: relative; /* badge overlay */
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconName = styled.span`
  font-size: 12px;
  text-align: center;
  word-break: break-word;
`;

export const IndexBadge = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;

  min-width: 18px;
  height: 18px;
  padding: 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 10px;
  font-weight: 600;
  line-height: 1;

  background: linear-gradient(135deg, #007bff, #0056d2);
  color: #fff;

  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);

  z-index: 2;
  user-select: none;
`;
