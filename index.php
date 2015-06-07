<?php
/**
 * @package WordPress
 * @subpackage AllTheTheme
 * @since AllTheTheme 1.0
 */
 get_header(); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<article <?php post_class() ?> id="post-<?php the_ID(); ?>">

			<h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>

			<?php posted_on(); ?>

			<div class="entry">
				<?php the_content(); ?>
			</div>

			<footer class="postmetadata">
				<?php the_tags(__('Tags: ','allthetheme'), ', ', '<br />'); ?>
				<?php _e('Posted in','allthetheme'); ?> <?php the_category(', ') ?> | 
				<?php comments_popup_link(__('No Comments &#187;','allthetheme'), __('1 Comment &#187;','allthetheme'), __('% Comments &#187;','allthetheme')); ?>
			</footer>

		</article>

	<?php endwhile; ?>

	<?php post_navigation(); ?>

	<?php else : ?>

		<h2><?php _e('Nothing Found','allthetheme'); ?></h2>

	<?php endif; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
