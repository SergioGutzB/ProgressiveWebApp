import React from 'react'
import { Route, Switch } from 'react-router'

import Home from '../Home/Home'
import About from '../About/About'
import PostDetail from '../PostDetail/PostDetail'
import NotFound from '../NotFound/NotFound'

import posts from '../../../blog-posts.json'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={() => <Home posts={posts.posts} />} />
    <Route path='/about' component={About} />
    <Route path='/post/:slug' component={props => {
      const post = posts.posts.filter(post => props.match.params.slug === post.slug)
      return <PostDetail post={post[0]} />
    }} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
