import axios from 'axios'

const fetchPostsSuccess = posts => ({
    type: 'FETCH_POSTS_SUCCESS',
    payload: { posts }
})

export const fetchPosts =  () => {
    return async dispatch => {
        try {
            let posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
            let data =  await dispatch(fetchPostsSuccess(posts.data.splice(0, 5)));
            return data.payload.posts;//store first five posts
        }
        catch(e){
            console.log(e)
        }
    }
}