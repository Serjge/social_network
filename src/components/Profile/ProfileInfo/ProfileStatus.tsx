import React from 'react'
import s from './ProfileInfo.module.scss'
import {ProfileType} from "../../../Redux/ProfileReducer";
import avatarDefault from '../../../assets/img/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird.png'

type ProfileInfoPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileInfoPropsType> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({editMode: true})
    }

    offActivateEditMode = () => {
        this.setState({editMode: false})
        this.state.editMode = false
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <span onDoubleClick={this.activateEditMode.bind(this)}>
                        status: {this.props.status}
                    </span>
                }
                {this.state.editMode &&
                    <input autoFocus onBlur={this.offActivateEditMode.bind(this)} value={this.props.status}
                           type="text"/>
                }
            </div>
        )
    }
}
