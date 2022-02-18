import { Preloader } from 'components/common';
import { Component, ReactElement } from 'react';
import { UserType } from 'store/reducers/UsersReducer';
import { Users } from './Users';



export type mapStateToPropsType = {
  users: UserType[];
  totalUserCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};

type mapDispatchToPropsType = {
  toggleFollowingInProgress: (isFollow: boolean, userId: number) => void;
  requestUsers: (currentPage: number, pageSize: number) => void;
  follow: (id: string) => void;
  unFollow: (id: string) => void;
};

export type UsersAPIComponentPropsType = mapStateToPropsType & mapDispatchToPropsType;

export class UsersAPIComponent extends Component<
  UsersAPIComponentPropsType

> {

  componentDidMount(): void {
    const firstPage = 1;
    const { requestUsers, pageSize } = this.props;
    requestUsers(firstPage, pageSize);
  }

  onPageChanged = (pageNumber: number): void => {
    const { requestUsers, pageSize } = this.props;
    requestUsers(pageNumber, pageSize);
  };

  render(): ReactElement {
    const {
      isFetching,
      pageSize,
      users,
      follow,
      unFollow,
      followingInProgress,
      currentPage,
      totalUserCount,
    } = this.props;

    return (
      <>
        {isFetching ? <Preloader /> : null}
        <Users
          users={users}
          followingInProgress={followingInProgress}
          totalUserCount={totalUserCount}
          pageSize={pageSize}
          currentPage={currentPage}
          follow={follow}
          unFollow={unFollow}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}
