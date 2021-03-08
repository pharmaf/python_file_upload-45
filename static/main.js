var form_data = new FormData();
     // form_data.append("file[]",document.getElementById('multipleFile').files)
      
function readURL(input) {
    if (input.files && input.files[0]) {
     //dataList.push($('#fileData')[0]);
      var reader = new FileReader();
  
      reader.onload = function(e) {
  
        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
  
        // $('.image-title').html(input.files[0].name);
        $.each(input.files, function(index, value){
            form_data.append("files[]",document.getElementById('multipleFile').files[index]);
            fileName = value.name.replace('.',"");
            $(".image-title-wrap").append('<p id="'+fileName+'">'+value.name + '<button type="button" onclick="removeUpload(\''+fileName+'\')">Remove</button></p> <br><br>');
        });
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $(function() {
  $('#uploadData').click(function() {
    
      $.ajax({
          type: 'POST',
          url: '/sendfile',
          data: form_data,
          contentType: false,
          cache: false,
          processData: false,
          success: function(data) {
              console.log('Success!');
          },
      });
  });
  });
  function removeUpload(id) {
    $('#'+id).remove();
  }
  $('.image-upload-wrap').bind('dragover', function () {
          $('.image-upload-wrap').addClass('image-dropping');
      });
      $('.image-upload-wrap').bind('dragleave', function () {
          $('.image-upload-wrap').removeClass('image-dropping');
  });
  