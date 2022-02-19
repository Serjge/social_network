import { PureComponent, ReactElement } from 'react';

import { User } from 'components';
import { UserType } from 'type';
import { paginator } from 'utils';

type UsersPropsType = {
  users: UserType[];
  onPageChanged: (pageNumber: number) => void;
  totalUserCount: number;
  pageSize: number;
  currentPage: number;
  followingInProgress: number[];
  follow: (id: string) => void;
  unFollow: (id: string) => void;
};

export class Users extends PureComponent<UsersPropsType> {
  render(): ReactElement {
    const {
      onPageChanged,
      pageSize,
      totalUserCount,
      currentPage,
      users,
      followingInProgress,
      follow,
      unFollow,
    } = this.props;

    const pages = paginator(currentPage, totalUserCount, pageSize);

    const onClickPage = (page: number): void => {
      onPageChanged(page);
    };

    const pageMap = pages.map(page => (
      <button
        type="button"
        key={page}
        onClick={() => onClickPage(page)}
        style={{
          fontWeight: currentPage === page ? 'bold' : 'normal',
          color: currentPage === page ? 'darkred' : '',
          cursor: 'pointer',
          padding: '5px',
        }}
      >
        {page}
      </button>
    ));

    const usersMap = users.map(({ id, photos, status, name, age, followed }) => (
      <User
        idUser={id}
        status={status}
        unFollow={unFollow}
        follow={follow}
        followingInProgress={followingInProgress}
        name={name}
        followed={followed}
        photos={photos}
        age={age}
        key={id}
      />
    ));

    return (
      <div>
        {usersMap}
        <div style={{ display: 'flex', justifyContent: 'center' }}>{pageMap}</div>
      </div>
    );
  }
}
