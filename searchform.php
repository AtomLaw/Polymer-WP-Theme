<form role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
    <div>
        <label for="s" class="screen-reader-text"><?php _e('Search for:','allthetheme'); ?></label>
        <input type="search" id="s" name="s" value="" />
        
        <input type="submit" value="<?php _e('Search','allthetheme'); ?>" id="searchsubmit" />
    </div>
</form>