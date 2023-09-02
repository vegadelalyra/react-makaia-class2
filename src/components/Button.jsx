import React, { Component } from 'react'

export default class Button extends Component {
    static propTypes = {
        name: PropTypes.string,
        orange: PropTypes.bool,
        wide: PropTypes.bool,
        clickHandler: PropTypes.func,
    }

    handleClick = () => {
        this.props.clickhandler(this.props.name)
    }

    render() {
        const className = [
            'component-button',
            this.props.orange ? 'orange' : '',
            this.props.wide ? 'wide' : '',
        ]

        return (
            <div className={className.join(' ').trim}>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}