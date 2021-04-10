var random = `https://random-word-api.herokuapp.com/word?number=1`;

async function getWord(){
    try{
        displayWord = await fetch(random);
        display = await displayWord.json();
       // giphy = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=b2YBCuqnKok5DGnOEfEeCFOpOQ3sifUi&q=${display}&limit=25&offset=0&rating=g&lang=en`);
       giphy = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=mNE94ql6Z4WRrtO18Nf8AXUbi4AowUs4&q=${display}&limit=25&offset=0&rating=g&lang=en`);
        giphyImage = await giphy.json();
        imageurl = giphyImage.data[0].images.original.url;

        let img = createImage('img');
        img.src = imageurl;

        let p = createImage('p','word');
        p.innerHTML = `${display}`;
        
        let button = createImage('button','btn btn-success');
        button.innerHTML = 'Refresh';
        button.addEventListener('click',function(){
                location.reload();
        });

        document.body.append(img);
        document.body.append(p);
        document.body.append(button);
    }
    catch(err){
        location.reload();
    }
}



getWord();

function createImage(element,elemclass=''){
    let ele = document.createElement(element);
    ele.setAttribute('class',elemclass);
    return ele;
}