var articleNum = 0;
var articleUrls = ['article-1', 'article-2', 'article-3', 'article-4', 'article-5'];

function shuffle (input){
    console.time('Shuffle Runtime');
    var i = input.length;
    var temp, index;
    while (i > 0){
        index = Math.floor(Math.random() * 5);
        i--;
        temp = input[i];
        input[i] = input[index];
        input[index] = temp;
    }
    console.timeEnd('Shuffle Runtime');
    return input;
}
function nextArticle(){
    articleNum += 1;
    if (articleNum <= 4){
        
        loadArticle(articleNum, articleUrls);

    }else if(articleNum > 4){
        articleNum -= 1;
        endReached();
    }
}
function previousArticle(){
    articleNum -= 1;
    if (articleNum >= 0){
        loadArticle(articleNum, articleUrls);
    }else{
        alert("This Is The First Article, You Cannot Move Back Any Further");
        articleNum += 1;
    }
}
function endReached(){
    $('#myModal').modal('show');
}
$(document).ready(function(){
    shuffle(articleUrls);
    loadArticle(articleNum, articleUrls);
})
function loadArticle (articleNum, articleUrls){
    console.time('Load Article Runtime')
    $('#content').empty();
    $('#articleNumber').html("Article #" + (articleNum+1));
    var requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/' +  articleUrls[articleNum] + '.json';
    $.ajax({
        url: requestURL,
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function(response) {
            for(var i=0; i<response.body.length; i++){
                if(response.body[i].type == "heading"){
                    var heading = response.body[i].model.text;
                    $('#jumboTitle').html(heading);
                }else if(response.body[i].type == "paragraph"){
                    var paragraph = response.body[i].model.text;
                    var newParagraph = "<p>" + paragraph + "</p>"
                    $('#content').append(newParagraph);
                }else if(response.body[i].type == "image"){
                    var imgUrl = response.body[i].model.url;
                    var imgAlt = response.body[i].model.altText;
                    var newImg = '<img class=img-fluid src ="' + imgUrl + '"class=img-fluid>';  
                    $('#content').append(newImg);
                }else if(response.body[i].type == "list"){
                    var listLength = response.body[i].model.items.length;
                    var newList = "<ul>";
                    $('#content').append(newList);
                    for(var j=0; j<listLength; j++){
                        var listItem = "<li>" + response.body[i].model.items[j] + "</li>";
                        $('#content').append(listItem);
                    }
                    var endList = "</ul>"
                    $('#content').append(endList);
                }
                else{
                    console.log("Element Is Not Supported");
                }
            }
            console.timeEnd('Load Article Runtime');
        },
        error: function(xhr, status, e){
            var eMessage = xhr.status + ': ' + xhr.statusText;
            if (xhr.status == 404){
                $('#jumboTitle').html("404 Error - " + eMessage);
            }else{
                $('#jumboTitle').html("Error - " + eMessage);
            }
        } 
         
    })
}


