import React from 'react';

type MyProps = {
    name: string,
    body: string
}
class Comment extends React.Component<MyProps, {}> {
    constructor(props: MyProps) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    };

    render() {
        return (
            <div className="Comments">
                <p>{this.props.name}</p>
                <p>{this.props.body}</p>
            </div>
        )
    }
};


export default Comment;
