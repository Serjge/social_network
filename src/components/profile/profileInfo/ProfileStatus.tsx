/* eslint-disable jsx-a11y/no-autofocus */
import React, { ReactElement } from 'react';

type ProfileInfoPropsType = {
  status: string;
  updateStatus: (userId: string) => void;
  isOwner: boolean;
};

type ProfileInfoStateType = {
  statusState: string;
  editMode: boolean;
};

export class ProfileStatus extends React.Component<
  ProfileInfoPropsType,
  ProfileInfoStateType
> {
  constructor(props: ProfileInfoPropsType) {
    super(props);
    const { status: statusProps } = this.props;
    this.state = {
      editMode: false,
      statusState: statusProps,
    };
  }

  componentDidUpdate(prevProps: Readonly<ProfileInfoPropsType>): void {
    const { status: statusProps } = this.props;
    if (prevProps.status !== statusProps) {
      this.changeStatus();
    }
  }

  changeStatus = (): void => {
    const { status: statusProps } = this.props;
    this.setState({ statusState: statusProps });
  };

  changeOnClickStatus = (e: { currentTarget: { value: string } }): void => {
    this.setState({ statusState: e.currentTarget.value });
  };

  offActivateEditMode = (): void => {
    const { updateStatus } = this.props;
    const { statusState } = this.state;
    this.setState({ editMode: false });
    updateStatus(statusState);
  };

  activateEditMode = (): void => {
    this.setState({ editMode: true });
  };

  render(): ReactElement {
    const { status: statusProps, isOwner } = this.props;
    const { editMode, statusState } = this.state;

    return (
      <div>
        {!editMode && (
          <span onDoubleClick={isOwner ? this.activateEditMode : undefined}>
            status: {statusProps}
          </span>
        )}
        {isOwner && editMode && (
          <input
            autoFocus
            onBlur={this.offActivateEditMode}
            value={statusState}
            onChange={this.changeOnClickStatus}
            type="text"
          />
        )}
      </div>
    );
  }
}
