var symbols = ["`", "~","1","!","2","@","3","#","4","$","5","%","6","^","7","&","8","*","9","(","0",
    ")","-","_","=","+","q","w","e","r","t","y","u","i","o","p","[","]","\\","Q","W","E","R","T","Y"
    ,"U","I","O","P","{","}","|","a","s","d","d","f","g","h","j","k","l",";","'","A","S","D","F","G",
    "H","J","K","L",":","z","x","c","v","b","n","m",",",".","/","Z","X","C","V","B","N","M","<",">",
    "?","ё","Ё","№","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","Й","Ц","У","К","Е","Н","Г","Ш",
    "Щ","З","Х","Ъ","ф","ы","в","а","п","р","о","л","д","ж","э","Ф","Ы","В","А","П","Р","О","Л","Д",
    "Ж","Э","я","ч","с","м","и","т","ь","б","ю","Я","Ч","С","М","И","Т","Ь","Б","Ю", " "
];

document.getElementById("code").addEventListener("click", Code)
document.getElementById("encode").addEventListener("click", EnCode)
document.getElementById("copy").addEventListener("click", Copy)

function Code(){
    var text_str = document.getElementById("message").value;
    var key_str = document.getElementById("key").value;
    var msg = text_str.split("");
    var key = key_str.split("");
    var finalKey = [];
    var a = 0;
    for (let i = 0; i < msg.length; i++){
        finalKey.push(key[a]);
        a++;
        if (a == key.length){
            a = 0
        }
    }
    var finalWord = [];
    for (let j = 0; j < msg.length; j++){
        var k = finalKey[j];
        var w = msg[j];
        var k_index = 0;
        var w_index = 0;
        
        for (let q = 0; q < symbols.length; q++){
           
            if (symbols[q] == k){
                k_index = q
            }
            if (symbols[q] == w){
                w_index = q
            }
        }
        var fin_w = "";
        var fin_index = k_index + w_index;
        if (fin_index > symbols.length){
            fin_index -= symbols.length;
        }
        fin_w = symbols[fin_index];
        finalWord.push(fin_w);
    }
    var finalWord_str = finalWord.join("");
    ShowResult(finalWord_str)
}
function EnCode(){
    var text_str = document.getElementById("message").value;
    var key_str = document.getElementById("key").value;
    var msg = text_str.split("");
    var key = key_str.split("");
    var finalKey = [];
    var a = 0;
    for (let i = 0; i < msg.length; i++){
        finalKey.push(key[a]);
        a++;
        if (a == key.length){
            a = 0
        }
    }
    var finalWord = [];
    for (let j = 0; j < msg.length; j++){
        var k = finalKey[j];
        var w = msg[j];
        var k_index = 0;
        var w_index = 0;
        
        for (let q = 0; q < symbols.length; q++){
           
            if (symbols[q] == k){
                k_index = q
            }
            if (symbols[q] == w){
                w_index = q
            }
        }
        var fin_w = "";
        var fin_index = w_index - k_index;
        if (fin_index < 0){
            fin_index = symbols.length + fin_index;
        }
        fin_w = symbols[fin_index];
        finalWord.push(fin_w);
    }
    var finalWord_str = finalWord.join("");
    ShowResult(finalWord_str)
}


function ShowResult(result){
    let input = document.getElementById("result")
    input.value = result
}

function Copy(){
    let input = document.getElementById("result")
    if (input.value != ""){
        input.select();
        document.execCommand('copy')
    }
}
