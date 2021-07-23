import PostGrid from '../posts/posts-grid'
import classes from './featured-posts.module.css'

function FeaturedPosts(props) {
 return (
   <section>
   <h2> Featured Posts</h2>
   <PostGrid posts={props.posts}/>
   </section>
 );
}

export default FeaturedPosts
