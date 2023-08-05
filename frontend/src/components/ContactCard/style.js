import styled from "styled-components";

export const StyleCardContact = styled.li`
  max-width: 18.313rem;
  width: 100%;
  height: 12.0625rem;
  padding: 0.8125rem 0.38875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #1b1f27;
  background-size: cover;
  border-radius: 0.7rem;
  color: black;
  position: relative;
  overflow: hidden;
  
  
  .areaDateTime {
    max-width: 18.75rem;
    width: 100%;
    display: flex;
  }

  .registerDate {
    margin: 0.313rem 0;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 0.888125rem;
    color: white;
    margin-top: 10px;
  }

  .areabuttons {
    display: flex;
    flex-wrap: wrap;
    margin-left: 7rem;
    gap: 5rem;
  }
  border-bottom: 1px solid rgb(85, 104, 254);
  

  .identification {
    font-size: 0.76125rem;
    color: white;
    line-height: 1.125rem;
  }

  .emphasis {
    font-weight: 500;
    color: grey;
  }

  .btDelete,
  .btEdit {
    background-position: center;
    background-repeat: no-repeat;
    transition: scale(1.1);

    &:hover {
      transform: scale(1.1);
    }
  }

  .butt {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 210px;
    margin-top: 20px;
  }

  .btDelete {
    width: 25px; 
    height: 25px; 
    background-size: contain;
  }

  .btEdit {
    width: 20px; 
    height: 20px; 
    background-size: contain;
  }


  &:hover {
 
    &:before {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(to left, rgba(85, 104, 254, 0.3), transparent);
      pointer-events: none;
    }

    transform: scale(1.05); 
    transition: transform 0.2s ease; 
  }
`;

