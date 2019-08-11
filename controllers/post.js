exports.getPosts=(req,res)=>{
    res.json({
        posts:[
            {title:"first Posts"},
            {title:"second Post"}
        ]
    })
}