const users=require("./book.json");



const express=require('express');
const app=express();

app.use(express.json());

app.listen(2348,function(){
    console.log('listening on port 2348');
});


//get showing all users
app.get('/user',(req,res)=>{
    const bookk={};
    bookk.api_requested_by='Chinmayi'
    bookk.users=users;
    res.send(bookk)
})


//post appending it to last
app.post('/book',(req,res)=>{
    users.push(req.body);
    const bookk={};
    bookk.api_requested_by='Chinmayi'
    bookk.users=users;
    res.send(bookk)
})


//get showing the id
app.get('/book/:id',(req,res)=>{
    
    for(var i=0;i<users.length;i++){
        if(req.params.id==users[i].id){
             break;
        }
    }
    const bookk={};
    bookk.api_requested_by='Chinmayi'
    bookk.users=users[i];
    res.send(bookk)
})


//patch updating
app.patch('/book/:id',(req,res)=>{
    for(var i=0;i<users.length;i++){
        if(req.params.id==users[i].id){
            console.log(users[i]);
            users[i].author=req.body.author;
            users[i].year=req.body.year;
            break;
        }
    }
    const bookk={};
    bookk.api_requested_by='Chinmayi'
    bookk.users=users[i];
    res.send(bookk)
});

//deleting 
app.delete('/book/:id',(req,res)=>{
    const newusers=[];
    for(var i=0;i<users.length;i++){
        if(req.params.id!=users[i].id){
            newusers.push(users[i]);
        }
    }
    const bookk={};
    bookk.api_requested_by='Chinmayi'
    bookk.users=newusers;
    res.send(bookk)
})