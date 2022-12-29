import styled from "styled-components";

interface ContainerProps {
  fixed: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: ${props => props.fixed ? "2.5rem" : "0.5rem"};
  backdrop-filter: blur(12px);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 2;

  transition: 0.2s;

  div:first-child {

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      display: none;
      transition: 0.2s;
      margin: 0 0 0 1rem;
    }

    & input + label:before {
      content: '';
      width: 18px;
      height: 18px;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.2);
      border: 1px solid gray;
      display: ${props => props.fixed ? "inline-block" : "none"};
      vertical-align: middle;
      margin-left: 0.5rem;
      transition: 0.2s;
    }

    & input:checked + label:before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='18' viewBox='0 0 24 24'%3E%3Cpath d='M6.166 16.943l1.4 1.4-4.622 4.657h-2.944l6.166-6.057zm11.768-6.012c2.322-2.322 4.482-.457 6.066-1.931l-8-8c-1.474 1.584.142 3.494-2.18 5.817-3.016 3.016-4.861-.625-10.228 4.742l9.6 9.6c5.367-5.367 1.725-7.211 4.742-10.228z'/%3E%3C/svg%3E");
      background-size: cover;
      background-color: rgba(0, 0, 0, 0.2);
      border: none;
      background-position: center;
      padding: 1px;
    }
  }

  div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    span {
      color: #fff;
      margin-right: 3.5rem;
      display: ${props => props.fixed ? "block" : "none"};

      transition: 0.2s;
    }
  }

  &:hover {
    height: 2.5rem;

    div {
      span, label {
        display: block;
      }

      input + label:before {
        display: inline-block;
      }
    }
  }
`;

export const Image = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 1rem;
  position: fixed;
  top: 0.5rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  span {
    font-size: 1rem;
    min-width: 5rem;
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }

    &:first-child {
      margin-left: 1rem;
    }
  }
`;