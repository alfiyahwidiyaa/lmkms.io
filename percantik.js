// function tampilkanSemuaMenu() { 
//     $.getJSON('data.json', function (data) {
//         let modul = data.modul;
//         $.each(modul, function(i, data) {
//             $('#physical').append('<div class="col-md-4"><div class="card mb-3"><h1>'+ data.judul+'</h1></div></div>');
//         });
//     });
// };
// tampilkanSemuaMenu();

$('.physical').on('click', function () {
  $('.physical').removeClass('active');
  $(this).addClass('active');

  let kategori = $(this).html();
  $('h1').html(kategori);

  $('#daftar-menu').html('');
  if(kategori == 'All Menu') {
      tampilkanSemuaMenu();
      return;
  }

  $.getJSON('data.json', function(data) {
      let menu = data.menu;
      let content = ' ';

      $.each(menu, function (i, data) {
          if(data.kategori == kategori.toLowerCase()) {
              content += '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/'+ data.judul+'"class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.modul +'</h5><h5 class="card-title">Rp. '+ data.harga+'</h5><p class="card-text">'+ data.deskripsi +'</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
          }
      });

      $('#daftar-menu').html(content);
  });

});