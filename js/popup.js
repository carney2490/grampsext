  $(function() {
      $('#onButton').bind('click', function() {
          $("#onButton").hide();
          $("#offButton").show();
      });
      $('#offButton').bind('click', function() {
          $("#offButton").hide();
          $("#onButton").show();
      });
  });

  // $(document).ready(function() {
  //     $("#hide").click(function() {
  //         $("p").hide();
  //     });
  //     $("#show").click(function() {
  //         $("p").show();
  //     });
  // });