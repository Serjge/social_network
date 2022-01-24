import React from 'react'

type ProfileInfoPropsType = {
    status: string
    updateStatus: (userId: string) => void
}

export class ProfileStatus extends React.Component<ProfileInfoPropsType> {
    state = {
        editMode: false,
        status: this.props.status

    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    offActivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e: { currentTarget: { value: string } }) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <span onDoubleClick={this.activateEditMode}>
                        status: {this.props.status}
                    </span>
                }
                {this.state.editMode &&
                    <input autoFocus
                           onBlur={this.offActivateEditMode}
                           value={this.state.status}
                           onChange={this.onChangeStatus}
                           type="text"/>
                }
            </div>
        )
    }
}
