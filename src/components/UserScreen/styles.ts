import styled from "styled-components";

export const UserScreenContainer = styled.div`
  display: flex;
  @media (max-width: 1100px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const UserInfoSection = styled.div`
  border-right: 1px solid #30363d;
  max-width: 300px;
  padding-right: 30px;
  text-align: left;
  width: 30%;
  word-wrap: break-word;

  .user-name {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 0px;
  }

  .user-username {
    color: #8b949e;
    font-size: 18px;
    margin-top: 0px;
  }

  .user-email {
    font-size: 18px;
  }

  .user-bio {
    font-size: 16px;
  }

  .user-follows {
    align-items: center;
    display: flex;
    font-size: 10px;
    gap: 8px;
    word-break: break-all;
  }

  @media (max-width: 1100px) {
    width: 100%;
    padding: 8px;
    border-right: none;
    border-bottom: 1px solid #30363d;
    padding-bottom: 10px;
    margin-bottom: 15px;
    max-width: 100%;
  }
`;

export const UserPrimaryInfo = styled.div`
  @media (max-width: 1100px) {
    display: flex;
    align-items: center;
  }
`;

export const UserAvatar = styled.img`
  border: 2px solid #30363d;
  border-radius: 50%;
  width: 100%;

  @media (max-width: 1100px) {
    width: 30%;
    margin-right: 20px;
  }
`;

export const RepositoriesSection = styled.div`
  width: 70%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const RepositoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    padding-left: 0;
  }
`;
