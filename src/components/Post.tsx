import React from 'react';
import Comment from './Comment';

// const App: React.FC = () => {

type MyProps = {
    title: string,
    body: string
}
class Post extends React.Component<MyProps, {}> {
    constructor(props: MyProps) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    };

    render() {
        return (
            <div className="Post">
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
            </div>
        )
    }
};

export default Post;
