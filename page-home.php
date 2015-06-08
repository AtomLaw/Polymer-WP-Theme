<?php
/**
 * Template name: Home page
 */
 get_header(); ?>

  <paper-input label="Cerca il cercabile"></paper-input>

  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      
    <article class="post" id="post-<?php the_ID(); ?>">

      <h2><?php //the_title(); ?></h2>

      <?php //posted_on(); ?>

      <div class="entry">

        <?php the_content(); ?>

        <?php wp_link_pages(array('before' => __('Pages: ','allthetheme'), 'next_or_number' => 'number')); ?>

      </div>

      <?php edit_post_link(__('Edit this entry','allthetheme'), '<p>', '</p>'); ?>

    </article>
    
    <?php comments_template(); ?>

    <?php endwhile; endif; ?>    

<?php get_footer(); ?>
