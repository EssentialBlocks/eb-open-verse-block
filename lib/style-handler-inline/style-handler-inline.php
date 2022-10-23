<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OpenverseStyleHandlerInline' ) ) {
	final class OpenverseStyleHandlerInline {

		private static $instance;

		private $media_desktop = array(
			'name'        => 'desktop',
			'screen_size' => '',
		);
		private $media_tab     = array(
			'name'        => 'tab',
			'screen_size' => 1024,
		);
		private $media_mobile  = array(
			'name'        => 'mobile',
			'screen_size' => 767,
		);


		public static function init() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		public function __construct() {
             add_action( 'wp_head', array( $this, 'enqueue_frontend_css' ) );
		}

		/**
		 * Enqueue frontend css for post if have one
         *
		 * @return void
		 * @since 1.0.2
		 */
		public function enqueue_frontend_css() {
            global $post;

			if ( ! empty( $post ) && ! empty( $post->ID ) ) {
				$blocks       = parse_blocks( $post->post_content );
				$style_object = array();
				if ( ! empty( $blocks ) ) {
					foreach ( $blocks as $block ) {
						if ( ! empty( $block['attrs'] ) && ! empty( $block['attrs']['blockMeta'] ) ) {
							$style_object[] = $block['attrs']['blockMeta'];
						}
					}
				}

				if ( ! empty( $style_object ) ) {
					echo '<style id="eb-inline-style">' . str_replace( '&gt;', '>', esc_html( $this->build_css( $style_object ) ) ) . '</style>';
				}
			}
		}

		/**
		 * Enqueue frontend css for post if have one
         *
		 * @param string
		 * @return string
		 * @since 1.0.2
		 */
		private function build_css( $style_objects ) {
			$css          = '';
			$mobile_style = '';
			$tab_style    = '';
			foreach ( $style_objects as $block_style ) {
				if ( ! empty( $block_css = (array) $block_style ) ) {
					foreach ( $block_css as $media => $style ) {
						switch ( $media ) {
							case $this->media_desktop['name']:
								$css .= trim( preg_replace( '/\.eb[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/', ' ', $style ) );
								break;
							case $this->media_tab['name']:
								$tab_style .= trim( preg_replace( '/\.eb[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/', ' ', $style ) );
								break;
							case $this->media_mobile['name']:
								$mobile_style .= trim( preg_replace( '/\.eb[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/', ' ', $style ) );
								break;
						}
					}
				}
			}
			if ( ! empty( $tab_style ) ) {
				$css .= ' @media(max-width: 1024px){' . $tab_style . '}';
			}
			if ( ! empty( $mobile_style ) ) {
				$css .= ' @media(max-width: 767px){' . $mobile_style . '}';
			}
			return trim( $css );
		}
	}
	OpenverseStyleHandlerInline::init();
}
