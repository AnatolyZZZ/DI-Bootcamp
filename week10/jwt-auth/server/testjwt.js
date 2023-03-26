import jwt from 'jsonwebtoken';

const token = jwt.sign(
  {name:'John', email:'jj@gmai.com',userid:234},
  '@3$5^7*&^%rty$',
  {
    expiresIn:'60s'
  }
)

// console.log(token);

// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiampAZ21haS5jb20iLCJ1c2VyaWQiOjIzNCwiaWF0IjoxNjc5NDcyNDAxLCJleHAiOjE2Nzk0NzI0NjF9.lS2WIPDv0ROWhVjqbdSsTP3Gvx64VW_KXEzDA30OBzA`;


jwt.verify(token, '@3$5^7*&^%rty$', (err,decoded)=>{
  if(err) return console.log(err);
  console.log(decoded);
})
