let app = new  Bue ({
    el: "#app"
})


console.log('time selector');

{{message}}

var clock = new Vue ({
    el: '#clock',
    data: {message: '10:29pm'}
  })

var today = new Date();var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();