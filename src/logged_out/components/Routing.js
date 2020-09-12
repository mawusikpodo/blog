import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
//import Home from "./home/Home";
import Blog from "./blog/Blog";
import BlogPost from "./blog/BlogPost";

function Routing(props) {
  const { blogPosts, selectBlog } = props;
  return (
    <Switch>
      {blogPosts.map((post) => (
        <PropsRoute
          /* We cannot use the url here as it contains the get params */
          path={post.url}
          component={BlogPost}
          title={post.title}
          key={post.title}
          importImage={post.importImage}
          date={post.date}
          content={post.content}
          otherArticles={blogPosts.filter(
            (blogPost) => blogPost.id !== post.id
          )}
        />
      ))}
      <PropsRoute
        exact
        path="/"
        component={Blog}
        selectBlog={selectBlog}
        blogPosts={blogPosts}
      />
      )
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
};

export default memo(Routing);
