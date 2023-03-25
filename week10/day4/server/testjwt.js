import  jwt  from "jsonwebtoken";

const token = jwt.sign (
    {name : "Jhon", email: "test@test.com", userid: 123},
    "testtestjwt",
    {
        expiresIn : '60s'
    }
)

// console.log(token)

// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmhvbiIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsInVzZXJpZCI6MTIzLCJpYXQiOjE2Nzk0NzIzNjYsImV4cCI6MTY3OTQ3MjQyNn0.bChP6ypXzLBhBAxWYD0bFROEXbMPocBpM4w-aRS907U`

jwt.verify(token, 'testtestjwt', (err, decoded) =>{
    if(err) return  console.log(err);
    console.log(decoded)
})