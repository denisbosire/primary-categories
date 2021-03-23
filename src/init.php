<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function primary_categories_cgb_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'primary_categories-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'primary_categories-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'primary_categories-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'primary_categories-cgb-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'pc/primary-posts', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'primary_categories-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'primary_categories-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'primary_categories-cgb-block-editor-css',
			//use Callback for dynamic block
			'render_callback' => 'primary_posts',
		)
	);
}

// Hook: Block assets.
add_action( 'init', 'primary_categories_cgb_block_assets' );

//Add Metabox
function myprefix_register_meta() {
    register_meta('post', '_primary_category', array(
        'show_in_rest' => true,
        'type' => 'string',
        'single' => true,
        'sanitize_callback' => 'sanitize_text_field',
        'auth_callback' => function() { 
            return current_user_can('edit_posts');
        }
    ));
}
add_action('init', 'myprefix_register_meta');

function myprefix_add_meta_box() {
    add_meta_box( 
        'myprefix_post_options_metabox', 
        'Post Options', 
        'myprefix_post_options_metabox_html', 
        'post', //remember to add CPT support
        'normal', 
        'default',
        array('__back_compat_meta_box' => true)
    );
}

add_filter( 'rest_post_query', function( $args, $request ){
    if ( $meta_key = $request->get_param( 'metaKey' ) ) {
        $args['meta_key'] = $meta_key;
        $args['meta_value'] = $request->get_param( 'metaValue' );
    }
    return $args;
}, 10, 2 );

//Create shortcode to show posts with primary category
function primary_posts(){
	$args = array(
		'meta_query' => array(
			array(
				'key' => '_primary_category',
				'value' => array(1,2,3,4),
				'compare' => 'IN', // optional
			),
		),
	);
	$myQuery = new WP_Query($args);

	if ($myQuery->have_posts()) {
		while ($myQuery->have_posts()) {
			$myQuery->the_post();
			$html .= '<li class="post-item"><a href='.get_the_permalink().'>'.get_the_title().'</a></li>';
			echo $html;
		}
	}
}
add_shortcode( 'primaryposts', 'primary_posts' );