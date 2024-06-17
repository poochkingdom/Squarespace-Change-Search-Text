<!-- Change Search Box Text -->
<!-- jQuery version -->
<!-- Adapted by Alan Moore(webmaster@poochkingdom.com) -->
<!-- Ensure jQuery included in header -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script type="text/javascript">
  $(document).ready(function(){
    <!-- Change the search text -->
    if(window.location.pathname.toLowerCase().startsWith('/search')) {
      $('div.sqs-search-page input').attr('placeholder','Search for something...');
    }
  });
</script>
<!-- End Change Search Box Text -->