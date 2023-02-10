import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};

export default Loading;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 1rem;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px double transparent;
  border-radius: 50%;
  border-image-slice: 1;
  animation: ${rotate} 1s linear infinite;
  background-image: linear-gradient(#2f2e41, #2f2e41),
    conic-gradient(
      from 90deg at 50% 50%,
      rgba(128, 128, 128, 0.0001) -46.17deg,
      #ffffff 313.55deg,
      rgba(128, 128, 128, 0.0001) 313.83deg,
      #ffffff 673.55deg
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`;
