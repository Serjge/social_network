import React, { ReactElement } from 'react';

type ProfileInfoPropsType = {
  status: string;
  updateStatus: (userId: string) => void;
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
      const changeStatus = (): void => {
        this.setState({ statusState: statusProps });
      };
      changeStatus();
    }
  }

  onChangeStatus = (e: { currentTarget: { value: string } }): void => {
    this.setState({ statusState: e.currentTarget.value });
  };

  activateEditMode = (): void => {
    this.setState({ editMode: true });
  };

  offActivateEditMode = (): void => {
    const { updateStatus } = this.props;
    const { statusState } = this.state;
    this.setState({ editMode: false });
    updateStatus(statusState);
  };

  render(): ReactElement {
    const { status: statusProps } = this.props;
    const { editMode, statusState } = this.state;
    return (
      <div>
        {!editMode && (
          <span onDoubleClick={this.activateEditMode}>status: {statusProps}</span>
        )}
        {editMode && (
          <input
            onBlur={this.offActivateEditMode}
            value={statusState}
            onChange={this.onChangeStatus}
            type="text"
          />
        )}
      </div>
    );
  }
}
