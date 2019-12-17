import React from 'react';
import logo from './logo.svg';
import './App.css';
import { any } from 'prop-types';
import { thisExpression } from '@babel/types';

// const App: React.FC = () => {
type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}
type Comment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}
type MyState = {
  posts: Post[],
  comments: Comment[]
}
class App extends React.Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then((res: any) => res.json())
      .then((data: any) => {
        this.setState({ posts: data })
      })
      .catch(console.log);
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Social Media App</h1>
          
        </header>
        <main>
          <h2>Posts</h2>
          <div>
            {
              this.state.posts.map((post: Post) => {
                return (
                  <div key={post.id} className="Post">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                  </div>
                )
              })
            }
          </div>
        </main>
        <footer>
          <p>Copyright Kati Winkler, 2019. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
