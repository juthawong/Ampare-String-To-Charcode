document.addEventListener('DOMContentLoaded',function(){
    var text;

    document.getElementById('toascii').addEventListener('click',function(){
        text = document.getElementById('text').value;
        try{
            document.getElementById('text').value =  text.charCodeAt(0);
            for(var i = 1; i < text.length; i++ ){
                document.getElementById('text').value += ", "+ text.charCodeAt(i) ;
            }
        }catch(e){
            console.error(e);
        }
      
    });
    document.getElementById('tostring').addEventListener('click',function(){
        text = document.getElementById('text').value;
        document.getElementById('text').value = "";
        var array = text.split(", ");
        try{
          document.getElementById('text').value +=  String.fromCharCode.apply(String, array)
        }catch(e){
            console.error(e);
        }
    });
}, false);