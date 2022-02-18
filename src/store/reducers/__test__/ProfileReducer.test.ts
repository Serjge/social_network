import {  ProfileReducer } from 'store/reducers';
import { InitialProfileStateType } from 'store/reducers/profileReducer';

let startState: InitialProfileStateType

beforeEach(() => {

  startState = {
    posts: [
      { id: '1', message: `Hi, how are you?`, likeCount: 10, isLike: false },
      { id: '2', message: `It's my first post`, likeCount: 15, isLike: false },
      { id: '3', message: `React, it's cool!`, likeCount: 50, isLike: false },
    ],
    profile: {
      'aboutMe': '',
      'contacts': {
        'facebook': '',
        'website': '',
        'vk': '',
        'twitter': '',
        'instagram': '',
        'youtube': '',
        'github': '',
        'mainLink': '',
      },
      'lookingForAJob': '',
      'lookingForAJobDescription': '',
      'fullName': 'Ivan',
      'userId': 2,
      'photos': {
        'small': '',
        'large': '',
      },
    },
    status: '',
  }
})


test('add post', () => {
    const newState = ProfileReducer(startState, {
      type: 'ADD-POST',
      newText: 'Hello ',
    })
    expect(newState.posts[0].message).toBe('Hello')
    expect(newState.posts.length).toBe(4)
  },
)
test('Delete post ', () => {
  // @ts-ignore
  const newState = ProfileReducer(startState, {
    type: 'REMOVE-POST',
    removeId: '1',
  })
  expect(newState.posts.length).toBe(2)
})
test('Likes post ', () => {
  // @ts-ignore
  const newState = ProfileReducer(startState, {
    type: 'ADD-LIKE',
    LikeId: '1',
    isLike: true,
  })
  expect(newState.posts[0].isLike).toBe(true)
  expect(newState.posts[0].likeCount).toBe(11)
})



