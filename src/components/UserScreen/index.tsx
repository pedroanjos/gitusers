import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Assets Import
import exclamationIcon from "../../assets/icon-exclamation-mark.png";
import defaultAvatar from "../../assets/default-avatar.png";

import { IUser, IRepository } from "../../global/interfaces";

import { RepositoryDisplay } from "../RepositoryDisplay";
import { PaginationComponent } from "../PaginationComponent";

import {
  RepositoriesSection,
  RepositoriesContainer,
  UserScreenContainer,
  UserInfoSection,
  UserPrimaryInfo,
  UserAvatar
} from "./styles";

export function UserScreen() {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  // User Info
  const [userInfo, setUserInfo] = useState<IUser | null>();
  const [reposInfo, setReposInfo] = useState<Array<IRepository>>([]);

  // Pagination Info
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstPost = indexOfLastRepo - reposPerPage;
  const currentRepos = reposInfo.slice(indexOfFirstPost, indexOfLastRepo);

  useEffect(() => {
    setUserInfo(null);
    setReposInfo([]);
    setIsLoading(true);
    axios
      .all([
        axios.get(`https://api.github.com/users/${username}`),
        axios.get(`https://api.github.com/users/${username}/repos`)
      ])
      .then(([userResponse, reposResponse]) => {
        setUserInfo(userResponse.data);
        setReposInfo(reposResponse.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [username]);

  function goToPage(page: number) {
    setCurrentPage(page);
  }

  // Loading Message
  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  // Error Message
  if (!userInfo) {
    return (
      <div>
        <img src={exclamationIcon} alt="Erro" style={{ maxWidth: "100px" }} />
        <h1>Usuário não encontrado.</h1>
        <p>
          O usuário que você buscou não existe, verifique se digitou algo
          errado, ou utilize o menu para ser redirecionado.
        </p>
      </div>
    );
  }

  return (
    <UserScreenContainer>
      <UserInfoSection>
        <UserPrimaryInfo>
          <UserAvatar
            src={userInfo?.avatar_url || defaultAvatar}
            alt="Avatar"
          />
          <div>
            <p className="user-name">{userInfo?.name}</p>
            <p className="user-username">{userInfo.login}</p>
            <p className="user-email">{userInfo?.email}</p>
          </div>
        </UserPrimaryInfo>
        <p className="user-bio">{userInfo?.bio}</p>
        <div className="user-follows">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            style={{ fill: "white" }}
          >
            <path d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
          </svg>
          <p>Seguidores: {userInfo?.followers}</p>
          <p>-</p>
          <p>Seguidos: {userInfo?.following}</p>
        </div>
      </UserInfoSection>
      <RepositoriesSection>
        <RepositoriesContainer>
          {currentRepos
            ?.sort((a, b) => b.stargazers_count - a.stargazers_count)
            .map((repo) => (
              <RepositoryDisplay key={repo.name} repo={repo} />
            ))}
        </RepositoriesContainer>
        <PaginationComponent
          currentPage={currentPage}
          goToPage={goToPage}
          reposPerPage={reposPerPage}
          totalRepos={reposInfo.length}
        />
      </RepositoriesSection>
    </UserScreenContainer>
  );
}
