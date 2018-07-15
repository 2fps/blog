/*jshint esversion: 6 */
import React from 'react';
import './content.less';
import store from '../../store.js';
import { pageContent } from '../../actions/contents-action.js';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <LeftBody></LeftBody>
                <RightMenu></RightMenu>
            </div>
        );
    }
}
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);
console.log(store.getState());
store.dispatch(pageContent('111', '111', 222, 112312, '12321'));
class LeftBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // 获取当前页的数据
        this.setState(store.getState().contents);
    }

    render() {
        if (!this.state.article || 0 === this.state.article.length) {
            return null;
        }
        let atricles = this.state.article.map((value, index) => {
            return (
                <div className="article" key={index.toString()}>
                    <h2 className="article-title">{value.title}</h2>
                    <span className="article-time">{value.time}</span>
                    <span className="article-frequency">{value.frequency}</span>
                    <span className="article-praise">{value.praise}</span>
                    <p className="article-acronym">{value.acronym}</p>
                </div>
            );
        });

        return (<div className="content-articles">
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
            <div className="content-menu">
                <div>
                    <Mine></Mine>
                </div>
            </div>
        );
    }
}

class Mine extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mine">
                <div className="mine-pic">
                    <img  />
                </div>
                <div className="mine-introduce">我就是我，不一样的烟火</div>
            </div>
        );
    }
}

export default Content;