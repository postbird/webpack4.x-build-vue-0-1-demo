import img from './images/logo.jpg';

const getName = () => {
  return Promise.resolve('postbird');
}

getName().then((name) => {
  console.log(`name is : ${name}`); 
})

export default {
  template: `<div> 
    <h1>App.js</h1>
    <img src="${img}" />
  </div>`
}