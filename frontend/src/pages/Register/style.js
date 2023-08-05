import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.875rem;
  background-color: #1B1F27;
  padding: 0rem 0.625rem 0rem 0.625rem;
  
 .secRegister {
    margin-bottom: 0.625rem;
    max-width: 33.5rem;  
    width: 100%;
    height: 39.8125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: 0.1125rem solid #333333;
    padding: 3%;
    background-color: #181920;
  }

.titleRegister {
  margin-bottom: 0.875rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    text-align: center;
    color: white;
}

  .btGoToLogin {
    max-width: 8.75rem;
    width: 100%;
    height: 1.375rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: rgb(85, 104, 254);
  }
  .btGoToLogin:hover {
    font-weight: 500;
    color: rgb(203, 208, 247);
    -webkit-tranform: scale(1.1);
    -webkit-transition: scale(1.1);
  }

  .formRegister {
    max-width: 28.25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:4px;
  }

  .lbRegister {
    margin-bottom: 0.3125rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    color: white;
  }

  .iptRegister {
    max-width: 28.25rem;
    width: 100%;
    height: 3rem;
    margin-bottom: 0.9375rem;
    padding: 1.25rem 0.9375rem;
    margin-bottom: 0.3125rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #CBD0F7;
    outline: none;
    border: 0.1125rem solid #333333;
    border-radius: 0.5rem;
    background-color: #252a34;
  }
  
  .iptRegister::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #CBD0F7;
}

   .iptRegister:focus {
    border: 0.1125rem solid #333333;
    border-radius: 0.5rem;
  }
  .iptRegister:hover {
    border: 0.1125rem solid #333333;
    border-radius: 0.5rem;
  }

  .btRegister {
    max-width: 28.25rem;
    width: 100%;
    height: 3rem;
    margin-top: 1.1875rem;
    margin-bottom: 1.1875rem;
    background-color:#5568FE;
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #ffffff;
  }

  .img{
    margin-top: -5px;

  }

  .btRegister:hover {
    background-color: rgb(85, 104, 204);
  }

  .areaError {
    color: #e60000;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 0.75rem;
  }

`