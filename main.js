const url = 'https://www.coursehubiitg.in/api/codingweek/contributions';
let contributors = "";

async function getJson(url) {
    //Since fetch and .json() are async functions, so we need to add await to wait for them to complete before proceeding
    let response = await fetch(url);
    let contributor_data = await response.json()
    return contributor_data;
}

async function main() {
    //Fetching Data and making an object to store the data
    contributors = await getJson(url);

    //Using sort function to sort the array, since we took index of a before b, the array is sorted in a ascending order
    contributors.sort(function(a,b){
        return a.points - b.points;
    })
    //However we need the array to be sorted in a descending order, so we could have either done b.points - a.points instead, or just do:
    contributors.reverse();
    console.log(contributors);

    //Assigning values to DOM using queryselectors

    //Rank 2
    const rank2 = document.querySelector('.header .main_rankings .num2 .rank2n');
    rank2.innerHTML += '<p>' + contributors[1].name + ' <span class="dot"></span> <strong>' + contributors[1].points + '</strong></p>';
    const rank2im = document.querySelector('.header .main_rankings .num2 .image_placeholder2');
    rank2im.innerHTML += '<img style = "max-width: 100%; max-height: 100%;" src="' + contributors[1].avatar + '"></img>';
    
    
    //Rank 1
    const rank1 = document.querySelector('.header .main_rankings .num1 .rank1n');
    rank1.innerHTML += '<p>' + contributors[0].name + ' <span class="dot"></span> <strong>' + contributors[0].points + '</strong></p>';
    const rank1im = document.querySelector('.header .main_rankings .num1 .image_placeholder1');
    rank1im.innerHTML += '<img style = "max-width: 100%; max-height: 100%;" src="' + contributors[0].avatar + '"></img>';

    //Rank 3
    const rank3 = document.querySelector('.header .main_rankings .num3 .rank3n');
    rank3.innerHTML += '<p>' + contributors[2].name + ' <span class="dot"></span> <strong>' + contributors[2].points + '</strong></p>';
    const rank3im = document.querySelector('.header .main_rankings .num3 .image_placeholder3');
    rank3im.innerHTML += '<img style = "max-width: 100%; max-height: 100%;" src="' + contributors[2].avatar + '"></img>';

    //Rank 4 to 8
    var i = 0;
    const rank = document.querySelector('.rankingsother');
    for(i = 0; i<(Number(contributors.length) -3);i++){
        rank.innerHTML += '<div class="other_rank"><p style="margin-left: 2.85%;">' + (i+4) + '</p><div class="image_placeholder"><img style = "max-width: 100%; max-height: 100%;" src="' + contributors[i+3].avatar + '"></div><p style="position: absolute; margin-left: 17.78%;">'+ contributors[i+3].name + '</p><p style="position: absolute; margin-left: 78.02%;">'+ contributors[i+3].points + '</p></div><div class="inter_rank"></div>';
    }

/*     const rank4 = document.querySelector('.rankings4');
    rank4.innerHTML += '<p style="margin-left: 2.85%;">4</p><div class="image_placeholder"><img style = "max-width: 100%; max-height: 100%;" src="' + contributors[3].avatar + '"></div><p style="position: absolute; margin-left: 17.78%;">'+ contributors[3].name + '</p><p style="position: absolute; margin-left: 78.02%;">'+ contributors[3].points + '</p>';

    const rank5 = document.querySelector('.rankings5'); 
    rank5.innerHTML += '<p style="margin-left: 2.85%;">5</p><div class="image_placeholder"><img style = "max-width: 100%; max-height: 100%;" src="' + contributors[4].avatar + '"></div><p style="position: absolute; margin-left: 17.78%;">'+ contributors[4].name + '</p><p style="position: absolute; margin-left: 78.02%;">'+ contributors[4].points + '</p>';

    const rank6 = document.querySelector('.rankings6') 
    rank6.innerHTML += '<p style="margin-left: 2.85%;">6</p><div class="image_placeholder"><img style = "max-width: 100%; max-height: 100%;" src="' + contributors[5].avatar + '"></div><p style="position: absolute; margin-left: 17.78%;">'+ contributors[5].name + '</p><p style="position: absolute; margin-left: 78.02%;">'+ contributors[5].points + '</p>';

    const rank7 = document.querySelector('.rankings7') 
    rank7.innerHTML += '<p style="margin-left: 2.85%;">7</p><div class="image_placeholder"><img style = "max-width: 100%; max-height: 100%;" src="' + contributors[6].avatar + '"></div><p style="position: absolute; margin-left: 17.78%;">'+ contributors[6].name + '</p><p style="position: absolute; margin-left: 78.02%;">'+ contributors[6].points + '</p>';

    const rank8 = document.querySelector('.rankings8') 
    rank8.innerHTML += '<p style="margin-left: 2.85%;">8</p><div class="image_placeholder"><img style = "max-width: 100%; max-height: 100%;" src="' + contributors[7].avatar + '"></div><p style="position: absolute; margin-left: 17.78%;">'+ contributors[7].name + '</p><p style="position: absolute; margin-left: 78.02%;">'+ contributors[7].points + '</p>';
 */

}