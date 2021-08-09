
let datas = [];

function tampilkanFilm(page){
    $('#listmovie').html('');
    $.ajax ({
        url : 'https://api.themoviedb.org/3/movie/popular?api_key=1f681c8737db71c9dfb604e7b0887682&language=en-US&page=4',
        type : 'get',
        datatype : 'json',
        data : {
            'api_key' : '1f681c8737db71c9dfb604e7b0887682',
            'language' : 'en-US',
            'page' : page
        },
        success: function (result){
            let movie = result.results;
            
            //console.log(movie);
            //     //tampilkan data
                $.each(movie,function(i, data){
                    datas.push({
                        original_title : data.original_title, 
                        poster_path : data.poster_path,
                        vote_average: data.vote_average,
                        release_date: data.release_date
                    })
                    $('#listmovie').append(`
                        <div class="col col-md-4">
                            <div class="card" style="width: 18rem;">
                            <img src=" https://image.tmdb.org/t/p/w500${data.poster_path}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">` + data.original_title + `</h5>
                                <h6 class="card-subtitle mb-2 text-muted">` + data.vote_average + `</h6>
                                
                            </div>
                        </div>
                        </div>
                    `);
                }
                )}


    })
}

$('#title').on('click', function(){
    let res = datas.sort((a,b) => a.original_title.localeCompare(b.original_title))
    $('#listmovie').html("")
    for(const data of res){
        $('#listmovie').append(`
                        <div class="col col-md-4">
                            <div class="card" style="width: 18rem;">
                            <img src=" https://image.tmdb.org/t/p/w500${data.poster_path}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">` + data.original_title + `</h5>
                                <h6 class="card-subtitle mb-2 text-muted">` + data.vote_average + `</h6>
                            
                            </div>
                        </div>
                        </div>
                    `);
    }

})

$('#rating').on('click', function(){
    let res = datas.sort((a,b) => a.vote_average-b.vote_average)
    $('#listmovie').html("")
    for(const data of res){
        $('#listmovie').append(`
                        <div class="col col-md-4">
                            <div class="card" style="width: 18rem;">
                            <img src=" https://image.tmdb.org/t/p/w500${data.poster_path}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">` + data.original_title + `</h5>
                                <h6 class="card-subtitle mb-2 text-muted">` + data.vote_average + `</h6>
                                
                            </div>
                        </div>
                        </div>
                    `);
    }

})

$('#tombolcari').on('click', function(){
   tampilkanFilm(1);
});

$('#tombolcari').on('keyup', function(e){
    if(e.keyCode == 13){
        tampilkanFilm(1);
    }
});