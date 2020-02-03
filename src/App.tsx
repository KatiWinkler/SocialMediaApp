import React from 'react';
import logo from './logo.svg';
import './App.css';
import { any } from 'prop-types';
import { thisExpression, isUserWhitespacable } from '@babel/types';
import PostComponent from './components/Post';
import Comments from './components/Comment';


// const App: React.FC = () => {
type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
  name: string
}
type Comment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}
type Users = {
  name: string
  id: number
}

type MyState = {
  posts: Post[],
  comments: Comment[],
  users: []
}
class App extends React.Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
      users: []

    };
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then((response: any) => response.json())
      .then((data: any) => {
        this.setState({ posts: data })
      })
      .catch(console.log);
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((response: any) => response.json())
      .then((data: any) => {
        this.setState({ users: data })
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
                  <PostComponent key={post.id} title={post.title} body={post.body} />
                )
              })
              {
              this.state.posts.map((users: Users) => {
                return (
                  <UsersComponent users={users.name} />
                      
              )
                })}
          </div>
        </main>
        <footer>
          <p>Copyright Kati Winkler, 2019. All rights reserved.</p>
        </footer>
      </div>
              }


export default App;
