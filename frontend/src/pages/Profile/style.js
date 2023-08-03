import styled from "styled-components";

export const StyledProfilePage = styled.div`
    &::before {
    max-width: 100vw;
    content: "";
    width: 100%;
    height: 100vh; /* Usando 100vh em vez de 100% para ocupar 100% da altura da tela */
    background: url('src/images/logo.png');
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    z-index: -1;
    opacity: 0.5; /* Ajuste a opacidade conforme desejado (0.5 = 50%) */
    }
    
    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('src/images/logo.png');
    opacity: 0.5; /* Ajuste a opacidade conforme desejado (0.5 = 50%) */
    z-index: -1;
  }
    
    .btComeBackHome {
    height:40px;
    width:80px;
    max-width: 20.5rem;
    background-color: #ff6347;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #ffffff;
    border-radius: 0.25rem;
  }
  
  .headerHome {
    margin:5%;
  
  }
  

  .btComeBackHome:hover {
    background-color: #cc4f07;
    color: #f8f9fa;
  }

  .areaClientProfile {
    margin-top: 1.8125rem;
    margin-bottom: 1.77313rem;
    height: 23.438rem;
    padding-top: 0.938rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.25rem;
    gap: 0.438rem;
    background-color: #333333;
    margin:5%;
  }

  .areaDateHourProfile {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.938rem;
  }

  .clientProfile {
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1.125rem;
    color: white;
  }

  .NameClientProfile {
    font-family: Roboto, sans-serif;
    font-weight: 600;
    font-size: 2.3433rem;
    color: white;
    padding-top: 28px;
    margin-bottom: 29px;
  }

  .btEditProfile {
    max-width: 12.438rem;
    width: 100%;
    height: 3.2rem;
    margin-top: 1.1875rem;
    background-color: rgb(85, 104, 204);
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: white;
  }

  .btEditProfile:hover {
    background: #5568FE;
    border: none;
  }

  .btDeleteProfile {
    max-width: 12.438rem;
    width: 100%;
    height: 3.2rem;
    margin-top: 1.1875rem;
    background-color:rgb(85, 104, 204);
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: white
  }

  .btDeleteProfile:hover {
    background-color: #5568FE;
    border: none;
  }

  .areaButtonsProfile {
    width: 100%;
    padding: 0rem 0rem 0.688rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    margin-top:3%;
  }

  @media (max-width: 43.75rem) {
    .headerHome {
      margin-top: 1.8125rem;
      margin-bottom: 1.773125rem;
      max-width: 90rem;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .imageClientProfile {
      width: 6.375rem;
      height: 6.188rem;
    }
    .btComeBackHome {
      max-width: 3.21812rem;
      width: 100%;
      height: 1.50687rem;
      font-size: 0.75rem;
      text-align: center;
    }

    .areaDateHourProfile {
      width: 80%;
    }

    .areaClientProfile {
      width: 91%;
      line-height: 1.563rem;
      gap: 0rem;
    }

    .clientProfile {
      font-size: 0.813rem;
    }

    .NameClientProfile {
      font-size: 1rem;
      padding-bottom: 10px;
    }

    .areaButtonsProfile {
      flex-direction: column;
      gap: 0rem;
    }

    .btEditProfile {
      height: 2.813rem;
    }
    .btDeleteProfile {
      height: 2.813rem;
    }
  }
`;
