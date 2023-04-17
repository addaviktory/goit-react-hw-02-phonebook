import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 36px;
  padding: 15px;
  font-size: 20px;
  width: 50%;
  border-radius: 12px;
  box-shadow: 0px 7px 11px 0px rgb(6 25 39 / 49%);
  margin: 0 auto;
  margin-bottom: 60px;
`;

export const Label = styled.label`
display: flex;
margin-bottom: 12px;
justify-content: space-around;
flex-direction: column;
margin: 0 auto;
margin-bottom: 15px;
gap: 5px;
`;

export const Input = styled.input`
  width: 240px;
  height: 35px;
  color: #ffffff;
  background: #0f0f0f;
  border: none;
  border-radius: 5px;
  &:placeholder{
    margin-rigth: 15px
  }
`;

export const SubmitButton = styled.button`
width: 30%;
height: 36px;
color: #fff;
background: #000;
border-radius: 5px;
border: none;
cursor: pointer;
margin: 0 auto;
  &:hover {
    color: #fff;
    background-color: #222;
    box-shadow: inset 0px 2px 4px rgba(0, 255, 255, 0.3),
      inset 0px 4px 8px rgba(0, 255, 255, 0.3),
      inset 0px 8px 16px rgba(0, 255, 255, 0.3);
    transition: 0.2s;
    transform: translateY(2px);
  }
`;
