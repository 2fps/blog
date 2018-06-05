/*jshint esversion: 6 */
import React from 'react';
import './content.less';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <LeftBody />
                <RightMenu />
            </div>
        );
    }
}

class LeftBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }

    componentDidMount() {
        // 获取当前页的数据
        this.setState({
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
        });
    }

    render() {
        let atricles = this.state.article.map((value, index) => {
            return (
                <div>
                    <h3>{value.title}</h3><br />
                    <span>{value.time}</span>
                    <span>{value.frequency}</span>
                    <span>{value.praise}</span>
                    <p>{value.acronym}</p>
                </div>
            );
        });

        return (<div>
                    {atricles}
                </div>
        );
    }
}

class RightMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>11</div>
        );
    }
}

export default Content;