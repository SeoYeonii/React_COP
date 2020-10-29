import React, { Component } from 'react';
class Control extends Component {
    render() {
        console.log("!");
        return(
            <ul>
                <li><a href="/create" onClick={function(e) {
                        e.preventDefault();
                        this.props.onChangeMode('create');
                    }.bind(this)}>create</a></li>
                <li><a href="/update" onClick={function(e) {
                        e.preventDefault();
                        this.props.onChangeMode('update');
                    }.bind(this)}>update</a></li>
                {/* delete는 보통 버튼으로 하는 것이 맞다 link롤 하면 쿠키?이런걸로 기억해서 대참사 날 수 있음 */}
                <li><input type="button" value="delete" onClick={function(e) {
                        e.preventDefault();
                        this.props.onChangeMode('delete');
                    }.bind(this)}></input></li>
            </ul> 
        )
    }
}

export default Control;