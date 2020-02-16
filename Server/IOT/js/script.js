var start = document.getElementById('start');
var cows = 0;
var statusOn = document.getElementById('on');

statusOn.addEventListener('click', function(e){
    if(document.getElementById('status').innerText == ''){
        function func() {
            console.log('on');
          }

        setTimeout(func , 2000);
        document.getElementById('status').innerText = 'On';
        document.getElementById('status').classList.add('active');
        statusOn.innerText = 'of';
        }
        else{
            statusOn.innerText = 'on';
            document.getElementById('status').innerText = '';
            document.getElementById('status').classList.remove('active');
        }
})

start.addEventListener('click', function(){
    if(document.getElementById('status').innerText == 'On'){
        let sugar = Math.floor(Math.random() * (7.8 - 15 + 1)) + 15;
        fetch('http://localhost:3000/sugar/add/5ce4a314e69b1e3f149b87ac', {
            headers: {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : true,
            'Content-Type': 'application/json',
            },
            method: 'post',
            body:  JSON.stringify({
                "sugar": sugar,
                "weight": 70
            })
        })
        var timerId = setInterval(function() {
            document.getElementById('status').innerText = "...";
            console.log( "..." );
          }, 2000);
          
          // через 5 сек остановить повторы
          setTimeout(function() {
            clearInterval(timerId);
            document.getElementById('status').innerText = sugar;
            console.log(sugar);
          }, 5000);
    } else{
        console.log('off')
    }
})

