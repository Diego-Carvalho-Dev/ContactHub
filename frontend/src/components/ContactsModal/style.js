import styled from "styled-components";

export const StyledContainerContactsModal = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  

  .modalContentContacts {
    max-width: 23.0625rem;
    height: 31.25rem;
    width: 100%;
    border-radius: 0.25rem;
    background-color: black;
    border-radius:12px;
  }
  .headerModal {
    max-width: 23.0625rem;
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  .titleModal {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    color: #f8f9fa;
  }
  .btCloseModal {
    max-width: 0.6875rem;
    width: 100%;
    height: 1.625rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #ffffff;
  }

  .handleListContacts {
    max-width: 23.0625rem;
    width: 100%;
    height: 100%;
    padding: 0.75rem 1.25rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    background-repeat: no-repeat;
    background-color: rgb(27, 31, 39);
    background-position: center;
    background-size: cover;
    color: white;
    border-radius: 10px;
    
  }

  .handleListContacts::-webkit-scrollbar {
    width: 0.5rem;
    border-radius: 10px;
  }

  .handleListContacts::-webkit-scrollbar-thumb {
    background: linear-gradient(to left,  #ff6347, transparent);
    border-radius: 10px;
  }

  .handleListContacts::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to left, rgba(85, 104, 254, 0.3), transparent);
    border-radius: 10px;
    
    
  }

  .liContactsModal {
    list-style: none;
    line-height: 1.375rem;
    border-bottom: 1px solid rgb(85, 104, 254); 
  }

  .infoFullNameContact {
    margin-top: 0.563rem;
    margin-bottom: 0.313rem;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    color: white;
    margin-right: 275px;
  }

  .infoContact {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    color: grey
  }

  .titleRegisterDateContact {
    margin-top: 20px;
    .flgbiv .titleRegisterDateContact {
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 0.438rem;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: rgb(255 255 255);
    margin-right: 191px;
  }
  }
  .dateAndHour {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  .areaNoContactModal {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 0.438rem;
    background-color: rgb(25, 25, 25);
  }

  .freseNoContactModal {
    border-radius: 0.438rem;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: white;
    line-height: 1.813rem;
  }

  @media (max-width: 43.75rem) {
    .modalContentContacts {
      width: 91%;
    }
  }
`;
