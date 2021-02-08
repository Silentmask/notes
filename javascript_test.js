window.addEventListener('load',function(){
    var app = new Vue({
        el: "#app",
        data: {
            message: "Hello world"
        }
    });
    var xapp=new Vue({
        el:"#xapp",
        methods:{
            dolt:function(){
                alert("clicked")
            }
        }
    })
} )
