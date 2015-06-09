<?php
/**
 * @package WordPress
 * @subpackage AllTheTheme
 * @since AllTheTheme 1.0
 */
?>
		<footer id="footer" class="source-org vcard copyright" role="contentinfo">
			<small>&copy;<?php echo date("Y"); echo " "; bloginfo('name'); ?></small>
		</footer>	

  </div><!-- /.container -->

	<?php wp_footer(); ?>

  <paper-fab-menu modal=".container">
    <paper-fab-menu-item icon="car" label="Macchina"></paper-fab-menu-item>
    <paper-fab-menu-item icon="user" label="Persona"></paper-fab-menu-item>
    <paper-fab-menu-item icon="birthday-cake" label="Torta"></paper-fab-menu-item>
  </paper-fab-menu>


<!-- here comes the javascript -->
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<!-- jQuery is called via the WordPress-friendly way via functions.php -->

<!-- this is where we put our custom functions: This is in the enqueue function currently -->
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/static/js/build.js"></script>
<!-- Asynchronous google analytics; this is the official snippet.
         Replace UA-XXXXXX-XX with your site's ID and domainname.com with your domain, then uncomment to enable.

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-XXXXXX-XX', 'domainname.com');
  ga('send', 'pageview');

</script>
-->
	
</body>

</html>
