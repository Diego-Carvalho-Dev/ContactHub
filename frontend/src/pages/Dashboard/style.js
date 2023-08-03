import styled from "styled-components";

export const StyledHomePage = styled.div`

  font-family: Arial, sans-serif;

  .headerHome {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    align-items: center;;

    .btViewProfile {
      background-color: #4caf50;
      color: #fff;
      border: none;
      padding: 8px 16px;
      cursor: pointer;
      font-size: 14px;
      border-radius: 4px;

      &:hover {
        background-color: #45a049;
      }

      @media (max-width: 768px) {
        padding: 6px 12px;
        font-size: 12px;
      }
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .btComeBackLogin {
      background-color: #ff6347;
      color: #fff;
      border: none;
      padding: 8px 16px;
      cursor: pointer;
      font-size: 14px;
      border-radius: 4px;

      &:hover {
        background-color: #cc1f07;
      }

      @media (max-width: 768px) {
        padding: 6px 12px;
        font-size: 12px;
      }
    }
  }

  .areaUser {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #5568fe;

  }

  .areaInformation {
    padding: 20px;
    background-color: #333333;
    height: 100%;

  }

  .areaContact {
    display:flex;
    margin-bottom: 20px;
    justify-content: center;
    align-items:center;
  }

  .bTContactHome {
    background-color:#5568fe;
    color: #fff;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;

    &:hover {
      background-color: #5528fe;
    }
  }

  .ulCardContact {
    list-style: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 17px;

    .contactCard {
      background-color: #f8f8f8;
      padding: 16px;
      border-radius: 4px;
      margin-right: 10px;
      position: relative;
      overflow: hidden;
      cursor: pointer;

      .contactInfo {
        flex: 1;

        h3 {
          font-size: 18px;
          margin: 0;
          margin-bottom: 4px;
        }

        p {
          font-size: 14px;
          color: #777;
          margin: 0;
        }
      }

      .contactActions {
        display: flex;

      }
    }
  }

  .areaNoContact {
    text-align: center;
    margin: 20px;

    .freseNoContact {
      font-size: 18px;
      color: #777;
    }
  }

`;
