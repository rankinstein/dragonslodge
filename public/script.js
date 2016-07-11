$(function() {
    $('#auth').submit(function(e){
      e.preventDefault();
      $.ajax({
        method: "POST",
        url: "/authenticate",
        data: { username: $('input[name="username"]').val(), password: $('input[name="password"]').val() }
      })
        .then(function( msg ) {
          localStorage.setItem('token', msg.token);
          page('/gallery')
        })
        .fail(function( err ) {
          console.log('Unable to authorize', err);
        });
      return false
    })
    console.log("index page")
  }

 })
