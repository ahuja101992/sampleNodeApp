const express = require('express');
const app = express();
const axios = require('axios').default;
app.get('/', (req, res)=>{
    res.send("jsjh");
})
app.get('/getUserPosts/:todosId', (req, res)=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.todosId}`)
  .then(function (response) {
    let userPosts;
    const resUserId= !response.data || !response.data.userId? null: response.data.userId;
    console.log(" testing +" +resUserId);

    axios.get('https://jsonplaceholder.typicode.com/posts').then((async postRes=>{
        if(!postRes || !postRes.data)
            console.log(" no response");
        else{
            const data = postRes.data;
            const result= data.filter(post=> post.userId===resUserId);
            for(let i=0;i<result.length;i++){
                let coomments = await axios.get('https://jsonplaceholder.typicode.com/comments', { params: { postId:result[i].id } });
                result[i].comments= coomments.data;
            }
            // .map(post=>{
            //     axios.get('https://jsonplaceholder.typicode.com/comments', { params: { postId:post.id } }).then(resp={

            //     });
            //     console.log(post);
            //     return post;
            //     // return {...post, comments:123};
            // })
            // console.log(userPosts);
            res.status(200).json(result);
        }
    }))
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed

  });
})
app.listen(3000, function () {
    console.log(`Example app listening on port 3000!`);
});