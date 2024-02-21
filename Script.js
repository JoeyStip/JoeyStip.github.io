$(document).ready(function(){
    let quotes = [
        ["Somebody's cold one is giving me chills", "-Rivers Cuomo 1994"], 
        ["Don't know about you, but I am un Chien Andalusia","-Black Francis 1989"], 
        ["I'm not growing up, I'm just burning out, and I've stepped in line to walk amongst the dead", "-Billie Joe Armstrong 1994"],
        ["A rabbit falls away from me, I guess I'll crawl","-J Mascis 1987"],
        ["It tastes so good, like grown cheese should so tangy and chewy, not at all phooey, Chunks of Cheddar, makes me feel better, slabs of Brie will set me free", "-The Evaporators 2004"]
    ]
    let rand =()=>{return Math.floor(Math.random()*quotes.length)}
    let SetQuotes =()=>{
        let x = rand()
        $(".text").animate({opacity:0}, 500, function(){
            $("h1").text(quotes[x][0])
            $("p").text(quotes[x][1])
            $(".text").animate({opacity:1},500)
            $("#tweet-quote").prop("href", "https://twitter.com/intent/tweet?text=" + quotes[x][0] + "%20" + quotes[x][1])
        })
    }
    SetQuotes()

    let BGCs = ["#742A16", "#3d405b", "#2B4639", "#5B3C0B"]
   
    let randColor =()=>{return Math.floor(Math.random()*BGCs.length)}
    $("body").css("background-color", randColor())
    let ChangeBGcolor =(time)=>{
        let ColorInstance = BGCs[randColor()]
        $("body").animate({backgroundColor: ColorInstance}, time);
        $("#quote-box").animate({color: ColorInstance}, time);
        $("button").animate({backgroundColor: ColorInstance})
        $("a").animate({color: ColorInstance}, time);
    }

    ChangeBGcolor(0);

    $("button").click(function(){
        SetQuotes();
        ChangeBGcolor(1000);
    })
})
