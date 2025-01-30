import styled from 'styled-components';
import { IPropsBox } from '@/components/LineCard/interface';

export const LineCard = styled.div<IPropsBox>`
  flex: 0 1 calc(50% - 16px);
  position: relative;
  padding: 2em;
  background-color: var(--base-white);
  border-radius: 10px;
  box-shadow: 1px solid;
  box-shadow: 0 1px 3px #dcdcdc;
  text-align: center;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 4px;
    height: 100%;
    background-color: #498ce8;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

export const Period = styled.span<IPropsBox>`
  position: relative;
  font-size: 1em;
  color: var(--light-gray);

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 28px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    margin-right: 30px;
    background-color: #ccc;
  }
`;

export const CompanyName = styled.strong<IPropsBox>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 14px;
  font-size: 1.2em;
`;

export const PartTime = styled.span<IPropsBox>`
  display: inline-block;
  margin-left: 5px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #f2f4f7;
  font-size: 0.5em;
`;
