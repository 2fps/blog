import { PAGE_CONTETNS } from '../actions/contents-action.js';

// 文章的初始化信息
const initalContents = {
    article: [{
        title: '我是傻鸟',
        time: '2222-02-02 12:23:23',
        frequency: 123,
        praise: 1000,
        acronym: '你们好啊'
    }, {
        title: '我是傻鸟',
        time: '2222-02-02 12:23:23',
        frequency: 123,
        praise: 1000,
        acronym: '你们好啊'
    }, {
        title: '我是傻鸟',
        time: '2222-02-02 12:23:23',
        frequency: 123,
        praise: 1000,
        acronym: '你们好啊'
    }, {
        title: '我是傻鸟',
        time: '2222-02-02 12:23:23',
        frequency: 123,
        praise: 1000,
        acronym: '你们好啊'
    }, {
        title: '我是傻鸟',
        time: '2222-02-02 12:23:23',
        frequency: 123,
        praise: 1000,
        acronym: '你们好啊'
    }]
};

export default function(state = initalContents, action) {
    switch(action.type) {
        case 'PAGE_CONTETNS':
            return {
                ...state,
                article: [...state.article, action.newCon]
            };
        default:
            return state;
    }
};