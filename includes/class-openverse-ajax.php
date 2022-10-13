<?php

/**
 * ebOPENVERSEAJAX
 *
 * AJAX Event Handler
 *
 * @class    EB_OPENVERSE_Block_Ajax
 * @version  3.6.0
 * @package  admin/frontend
 * @category Class
 * @author   Sumaiya Siddika
 */

if (!defined('ABSPATH')) {
    exit;
}

class EB_OPENVERSE_Block_Ajax
{
    private static $instance;

    public static function init()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * The Constructor.
     */
    public function __construct()
    {
        self::eb_ajax_action_init();
    }

    private static function isset_check($value, $default = '')
    {
        if (isset($value)) {
            return $value;
        } else {
            return $default;
        }
    }

    public static function eb_ajax_action_init()
    {
        $ajax_events = array(
            'eb_get_collections'      => 'eb_get_openverse_collections',
            'eb_get_item'      => 'eb_get_openverse_item',
            'eb_get_registration'      => 'eb_get_openverse_registration',
            'eb_openverse_token'      => 'eb_generate_openverse_token',
            'openverse_email_name_DB'      => 'openverse_email_name_DB_callback',
        );

        foreach ($ajax_events as $ajax_event_key => $ajax_event_func) {
            add_action('wp_ajax_' . $ajax_event_key, array(__CLASS__, $ajax_event_func));
            add_action('wp_ajax_nopriv_' . $ajax_event_key, array(__CLASS__, $ajax_event_func));
        }
    }

    /**
     * Openverse Registration
     */
    public static function eb_get_openverse_registration()
    {
        if (!wp_verify_nonce($_POST['openverse_reg_nonce'], 'eb-openverse-reg-nonce')) {
            die(__('Nonce did not match', 'essential-blocks'));
        }

        $name = self::isset_check($_POST['openverseName']);
        $email = self::isset_check($_POST['openverseEmail']);

        // Registration for client id and client secret
        $url = "https://api.openverse.engineering/v1/auth_tokens/register/";

        
        $response = EB_OPENVERSE_Blocks_Api::post(
            $url,
            array(
                'name' => $name,
                // todo: will generate description dynamically later 
                'description' => '1234xyzv',
                'email' => $email,
            ),
            EB_OPENVERSE_Blocks_Api::makeRequestHeader(array(
                'Content-Type' => 'application/json',
            )),
            array(
                'timeout' => 240
            )
        );

    
        $response_array = get_object_vars($response);

        if (isset($response_array['client_id']) and isset($response_array['client_secret']) and isset($response_array['name'])){
            self::openverse_reg_data_save(["client_id" => $response_array['client_id'], "client_secret" => $response_array['client_secret'], "name" => $response_array['name'], "email" => $email]);
        }

        wp_send_json($response);
    }

    /**
     * Openverse Registration
     */
    public static function openverse_email_name_DB_callback()
    {
        if (!wp_verify_nonce($_POST['openverse_nonce'], 'eb-openverse-nonce')) {
            die(__('Nonce did not match', 'essential-blocks'));
        }

        $settings = get_option('eb_settings');
        $admin_email = get_bloginfo( 'admin_email' );
        $site_name = get_bloginfo( 'name' );

        if (is_array($settings) && isset($settings['openverseApi'])) {
            wp_send_json_success($settings['openverseApi']);
        } else if(!empty($admin_email) || !empty($site_name)){
            $site_info = ['email' => $admin_email, 'name' => $site_name];
            wp_send_json_success($site_info);
        } else {
            wp_send_json_error("Couldn't found data ");
        }
        exit;
    }

    /**
     * Openverse token generate
     */
    private static function eb_generate_openverse_token_callback()
    {
       
        // get client idd ... from db
        $settings = get_option('eb_settings');

        if (!is_array($settings) && !isset($settings['openverseApi'])) {
            wp_send_json_error("Couldn't found data");
        }

       $client_id = $settings['openverseApi']['client_id'];
       $client_secret = $settings['openverseApi']['client_secret'];
    

        // Registration for client id and client secret
        $url = "https://api.openverse.engineering/v1/auth_tokens/token/";

        $response = EB_OPENVERSE_Blocks_Api::post(
            $url,
            array(
                'client_id' => $client_id,
                'client_secret' => $client_secret,
                'grant_type' => 'client_credentials',
            ),
            EB_OPENVERSE_Blocks_Api::makeRequestHeader(array(
                'Content-Type' => 'multipart/form-data',
            )),
            array(
                'timeout' => 240
            )
        );

        $response_array = get_object_vars($response);
        $access_token = $response_array['access_token'];
        $access_token_expires_in = $response_array['expires_in'];
        $deduct_second_from_expire_token = 60;

        $set = set_transient('eb_openverse_token', $access_token, $access_token_expires_in-$deduct_second_from_expire_token);
        
        return $response_array;
    }

    /**
     * Openverse Token
     */
    public static function eb_generate_openverse_token()
    {
       
        $response = EB_OPENVERSE_Block_Ajax::eb_generate_openverse_token_callback();

        wp_send_json($response);
        
    }

    /**
     * API Call to Get Data
     */
    public static function eb_get_openverse_collections()
    {
        if (!wp_verify_nonce($_POST['openverse_nonce'], 'eb-openverse-nonce')) {
            die(__('Nonce did not match', 'essential-blocks'));
        }

        //Fetching the token and check the expire time
        $token = get_transient('eb_openverse_token');

        if (empty($token)){
            $token_info = EB_OPENVERSE_Block_Ajax::eb_generate_openverse_token_callback();
            $token = $token_info['access_token'];
        }
        
        $limit = 12;

        $url = "https://api.openverse.engineering/v1/images";
        $param = array();

        $values = array(
            'q' => self::isset_check($_POST['openverseQ']),
            'license' => self::isset_check($_POST['openverseFilterLicenses']),
            'categories' => self::isset_check($_POST['openverseFilterImgtype']),
            'size' => self::isset_check($_POST['openverseFilterSize']),
            'extension' => self::isset_check($_POST['openverseFilterExtension']),
            'license_type' => self::isset_check($_POST['openverseFilterLicensesType']),
            'page_size' => self::isset_check($limit),
            'page' => self::isset_check($_POST['openversePage'], 1),
        );
        $param = array_merge($param, $values);

        $response = EB_OPENVERSE_Blocks_Api::get(
            $url,
            $param,
            EB_OPENVERSE_Blocks_Api::makeRequestHeader(array(
                'Content-Type' => 'application/json',
                'X-API-KEY' => $token,
            )),
            array(
                'timeout' => 240
            )
        );
        return $response;
    }

    /**
     * Upload selected item to media
     */
    public static function eb_get_openverse_item() {
        if (!wp_verify_nonce($_POST['openverse_item_nonce'], 'eb-openverse-item-nonce')) {
            die(__('Nonce did not match', 'essential-blocks'));
        }

        if (isset($_POST['image_url'])) {
            $file = $_POST['image_url'];
        }

        $filename = basename($file);

        //$upload_file = wp_upload_bits($filename, null, file_get_contents($file));
        /*if (!$upload_file['error']) {
            $wp_filetype = wp_check_filetype($filename, null );
            $attachment = array(
                'post_mime_type' => $wp_filetype['type'],
                'post_parent' => $parent_post_id,
                'post_title' => preg_replace('/\.[^.]+$/', '', $filename),
                'post_content' => '',
                'post_status' => 'inherit'
            );
            $attachment_id = wp_insert_attachment( $attachment, $upload_file['file'], $parent_post_id );
            if (!is_wp_error($attachment_id)) {
                require_once(ABSPATH . "wp-admin" . '/includes/image.php');
                $attachment_data = wp_generate_attachment_metadata( $attachment_id, $upload_file['file'] );
                wp_update_attachment_metadata( $attachment_id,  $attachment_data );
            }


        }*/
        try{
            echo wp_get_attachment_url(self::do_upload($file, $filename));
        }catch (\Exception $e){
            echo 'Upload failed, details: ' . $e->getMessage();
        }

        wp_die();

    }

    /**
     * Upload to media
     */
    private static function do_upload( $url, $title = null ) {
        require_once( ABSPATH . "/wp-load.php");
        require_once( ABSPATH . "/wp-admin/includes/image.php");
        require_once( ABSPATH . "/wp-admin/includes/file.php");
        require_once( ABSPATH . "/wp-admin/includes/media.php");

        // Download url to a temp file
        $tmp = download_url( $url );
        if ( is_wp_error( $tmp ) ) return false;

        // Get the filename and extension ("photo.png" => "photo", "png")
        $filename = pathinfo($url, PATHINFO_FILENAME);
        $extension = pathinfo($url, PATHINFO_EXTENSION);

        // An extension is required or else WordPress will reject the upload
        if ( ! $extension ) {
            // Look up mime type, example: "/photo.png" -> "image/png"
            $mime = mime_content_type( $tmp );
            $mime = is_string($mime) ? sanitize_mime_type( $mime ) : false;

            // Only allow certain mime types because mime types do not always end in a valid extension (see the .doc example below)
            $mime_extensions = array(
                // mime_type         => extension (no period)
                'image/jpg'          => 'jpg',
                'image/jpeg'         => 'jpeg',
                'image/gif'          => 'gif',
                'image/png'          => 'png',
            );

            if ( isset( $mime_extensions[$mime] ) ) {
                // Use the mapped extension
                $extension = $mime_extensions[$mime];
            }else{
                // Could not identify extension
                @unlink($tmp);
                return false;
            }
        }



        // Upload by "sideloading": "the same way as an uploaded file is handled by media_handle_upload"
        $args = array(
            'name' => "$filename.$extension",
            'tmp_name' => $tmp,
        );

        // Do the upload
        $attachment_id = media_handle_sideload( $args, 0, $title);

        // Cleanup temp file
        @unlink($tmp);

        // Error uploading
        if ( is_wp_error($attachment_id) ) return false;

        // Success, return attachment ID (int)
        return (int) $attachment_id;
    }

    /**
     * Openverse Reg Data Save to Option Table
     */
    private static function openverse_reg_data_save($reg_data)
    {
       
        $settings = is_array(get_option('eb_settings')) ? get_option('eb_settings') : [];
        if (empty($reg_data)) {
            unset($settings['openverseApi']);
        }
        else {
            $settings['openverseApi'] = $reg_data;
        }

        if (is_array($settings) > 0) {
            $output = update_option('eb_settings', $settings);
            //wp_send_json_success($output);
        }
        else {
            wp_send_json_error("Couldn't save data");
        }
      //  exit;
    }
}

EB_OPENVERSE_Block_Ajax::init();
