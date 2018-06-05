/*jshint esversion: 6 */
import React from 'react';
import './header.less';

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        if (!this.props.data || 0 === this.props.data.length) {
            return null;
        }
        let lis = this.props.data.map((value, index) => {
            if (value.hasOwnProperty('list')) {
                // lis += <li></li>
            } else {
                return (<li key={index.toString()}  className="headermenu-menulists-li">
                    {value.name}
                </li>);
            }
        });

        return (
            <div className="headermenu">
                <ul className="headermenu-menulists">
                    {lis}
                </ul>
            </div>
        );
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // 获取一些配置信息
        // 模拟数据
        this.setState({
            title: '前端驿站',
            menus: [{
                name: '关于我'
            }, {
                name: '我的',
                list: ['CSS', 'JavaScript', '纯原创', '资源下载']
            }, {
                name: '主页'
            }, {
                name: '管理'
            }]
        });
    }

    render() {
        return (
            <div className="header">
                <div className="header-title">{this.state.title}</div>
                <HeaderMenu data={this.state.menus} />
            </div>
        );
    }
}

export default Header;