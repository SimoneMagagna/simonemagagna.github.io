/*!
 * flipGallery - jQuery Powered Animated Photo Gallery
 * 
 * Commercial Version: 1.0.5
 * 
 * Multi Domain Licence For The Purchasing Individual/Company Only
 * 
 * @requires jQuery v1.5 or later
 *
 * Copyright 2015 flipGallery.net
 *
 */

// BEFORE YOU START
// ----------------

// In this document you can add your images, adjust the layout,
// co-ordination and speed of flipGallery. flipGallery does not
// require an external CSS file and all elements of flipGallery
// can be controlled from here. flipGallery's background is
// transparent, so it will overlay the color and/or images set
// in your html document. Please follow the annotations and in
// a few minutes you will be up and running.

// YOUR CONTENT
// ------------

// To get flipGallery up and running you will need to insert 
// your content:

var fg_my_content = {
        
        content_master: {
                
                gallery_master_folder: 'photo',
                
                // This is the main folder where the images are
                // kept in relation to your html file
                // (for example: gallery_master_folder: 'images',).
                // If all the images are kept in different folders
                // on the main directory level, then simply leave
                // this empty (like so: gallery_master_folder: '',).
                
                main_menu_title: 'Foto Scuola Nove Armonie Conselve',
                
                // This is the main title for your galleries menu.
                
                // You can also insert html in here. Please be sure
                // to use double quotes ("), as opposed to single
                // quotes (') to avoid any output errors.
                
        },
                
        gallery_1: {
                        
                cover_thumb: 'master/IGP4932small.jpg',
                        
                        // Gallery cover image file path
                        // (compulsory).
                
                        // ***IMPORTANT***: If the image path is
                        // incorrect the gallery cover thumbnail will
                        // appear blank.

                        // If the image size is larger than the
                        // thumbnail's dimensions, flipGallery will
                        // automatically crop it for you.
                        
                        // All image paths are an extension
                        // continuing from your 'gallery_master_folder'
                        // setting. If your 'gallery_master_folder'
                        // setting is left empty then it will be
                        // relative to the location of your html file.
                        
                
                gallery_title: 'Foto Maestro Nicola Berto',
                        
                        // Gallery title (optional).
                        
                        // If left blank it will display the
                        // 'main_menu_title' in its place.
                        
                        // You can also insert html in here.
                        
                image_1: {
                        
                        thumb: 'master/IGP4932small.jpg',
                        
                        // Image thumbnail file path (compulsory).

                        // ***IMPORTANT***: If the image path is
                        // incorrect the thumbnail will appear blank.
 
                        // If the image size is larger than the
                        // thumbnail dimensions, flipGallery will
                        // automatically crop it for you.
                        
                        enlarged: 'master/_IGP4932.jpg',
                        
                        // Image enlargement file path (compulsory).

                        // ***IMPORTANT***: If the image path is
                        // incorrect the lightbox will not open.

                        // The lightbox image size will be set to the
                        // size of the actual image.
                        
                        text: ''
                        
                        // Text to accompany enlarged image (optional).
                        
                        // You can also insert html in here.
                
                },

                // So now you've got the hang of it, you can insert your
                // other images and text:

                image_2: {
                        
                        thumb: 'master/_IGP4964small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'master/_IGP4964.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                
                image_3: {
                        
                        thumb: 'master/_IGP4965small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'master/_IGP4965.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_4: {
                        
                        thumb: 'master/969small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'master/969.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_5: {
                        
                        thumb: 'master/DSC_2993small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'master/DSC_2993.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_6: {
                        
                        thumb: 'master/DSC_2996small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'master/DSC_2996.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_7: {
                        
                        thumb: 'master/IMG_3044small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'master/IMG_3044.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_8: {
                        
                        thumb: 'master/IMG_3054small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'master/IMG_3054.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                // The image order increments from 1 onwards
                // (eg: image_1, image_2, image_3 etc). Please be
                // sure the incrementation has no numerical gaps. 
                
                // So say for example you would like a total of
                // nine images in your gallery, simply copy
                // 'image_8' and paste it directly below itself.
                // Then rename it 'image_9' like so:

				image_9: {

                        thumb: 'master/IMG_3070small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'master/IMG_3070.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                // You can continue this process as much as you
                // like. flipGallery will automatically paginate
                // the pages for you.
				
				image_10: {

                        thumb: 'master/IMG_3076small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'master/IMG_3076.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                // You can continue this process as much as you
                // like. flipGallery will automatically paginate
                // the pages for you.
				
				image_11: {

                        thumb: 'master/IMGP8915small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'master/IMGP8915.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                // You can continue this process as much as you
                // like. flipGallery will automatically paginate
                // the pages for you.
				
				image_12: {

                        thumb: 'master/IMGP8917small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'master/IMGP8917.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        }
                // You can continue this process as much as you
                // like. flipGallery will automatically paginate
                // the pages for you.
                
        },


        // *Additional Gallery Templates*
        // Below are four extra pre-made gallery templates.
        // Please be sure you don't skip over any galleries.
        // It's also best practice to remove any at the end that
        // are left empty.
        
        // If you only have one gallery, flipGallery will
        // automatically start within that gallery.


        gallery_2: {
                        
                cover_thumb: 'istructors/IMG_5682small.jpg',
                
                gallery_title: 'Foto Istruttori',
                        
                        
                image_1: {
                        
                        thumb: 'istructors/IMG_5682small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/IMG_5682.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_2: {
                        
                        thumb: 'istructors/20160618_154310small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/20160618_154310.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_3: {
                        
                        thumb: 'istructors/20160618_155401small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/20160618_155401.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_4: {
                        
                        thumb: 'istructors/20160618_161332small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/20160618_161332.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
                        
                image_5: {
                        
                        thumb: 'istructors/20160618_161338small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/20160618_161338.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_6: {
                        
                        thumb: 'istructors/20160618_161554small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/20160618_161554.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_7: {
                        
                        thumb: 'istructors/20160618_161559(0)small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/20160618_161559(0).jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_8: {
                        
                        thumb: 'istructors/20160618_161608small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/20160618_161608.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_9: {
                        
                        thumb: 'istructors/20160618_161610small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/20160618_161610.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_10: {
                        
                        thumb: 'istructors/20160618_164654small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/20160618_164654.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_11: {
                        
                        thumb: 'istructors/31012016-IMG_4940small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/31012016-IMG_4940.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_12: {
                        
                        thumb: 'istructors/31012016-IMG_4964small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/31012016-IMG_4964.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_13: {
                        
                        thumb: 'istructors/IMG_3087small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/IMG_3087.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_14: {
                        
                        thumb: 'istructors/IMG_3096small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/IMG_3096.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_15: {
                        
                        thumb: 'istructors/IMG_3112small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/IMG_3112.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_16: {
                        
                        thumb: 'istructors/IMG_3120small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/IMG_3120.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_17: {
                        
                        thumb: 'istructors/IMG_3123small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/IMG_3123.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_18: {
                        
                        thumb: 'istructors/IMG_3140small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/IMG_3140.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_19: {
                        
                        thumb: 'istructors/IMG_3142small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/IMG_3142.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_20: {
                        
                        thumb: 'istructors/IMG_3150small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/IMG_3150.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_21: {
                        
                        thumb: 'istructors/IMG_3156small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/IMG_3156.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_22: {
                        
                        thumb: 'istructors/IMG_5502small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/IMG_5502.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_23: {
                        
                        thumb: 'istructors/IMG_5525small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/IMG_5525.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_24: {
                        
                        thumb: 'istructors/IMG_5539small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/IMG_5539.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_25: {
                        
                        thumb: 'istructors/IMG_5565small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/IMG_5565.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_26: {
                        
                        thumb: 'istructors/IMG_5589small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/IMG_5589.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        },
						
				image_27: {
                        
                        thumb: 'istructors/20140503_144705small.jpg',
                        // Image thumbnail file path (compulsory).
                        
                        enlarged: 'istructors/20140503_144705.jpg',
                        // Image enlargement file path (compulsory).
                        
                        text: ''
                        // Text to accompany enlarged image (optional)
                        
                        }				
                
        },

        // From now on the gallery images structure is compressed for
        // speed of insertion.

        gallery_3: {
                
                cover_thumb: 'FotoEsibizione/DSC_6571small.jpg',
                gallery_title: 'Foto Esibizione',
                image_1: { thumb: 'FotoEsibizione/DSC_6571small.jpg', enlarged: 'FotoEsibizione/DSC_6571.JPG', text: '' },
                image_2: { thumb: 'FotoEsibizione/DSC_6186small.jpg', enlarged: 'FotoEsibizione/DSC_6186.JPG', text: '' },
                image_3: { thumb: 'FotoEsibizione/DSC_6260small.jpg', enlarged: 'FotoEsibizione/DSC_6260.JPG', text: '' },
                image_4: { thumb: 'FotoEsibizione/DSC_6262small.jpg', enlarged: 'FotoEsibizione/DSC_6262.JPG', text: '' },
                image_5: { thumb: 'FotoEsibizione/DSC_6265small.jpg', enlarged: 'FotoEsibizione/DSC_6265.JPG', text: '' },
				image_6: { thumb: 'FotoEsibizione/DSC_6269small.jpg', enlarged: 'FotoEsibizione/DSC_6269.JPG', text: '' },
				image_7: { thumb: 'FotoEsibizione/DSC_6271small.jpg', enlarged: 'FotoEsibizione/DSC_6271.JPG', text: '' },
				image_8: { thumb: 'FotoEsibizione/DSC_6283small.jpg', enlarged: 'FotoEsibizione/DSC_6283.JPG', text: '' },
				image_9: { thumb: 'FotoEsibizione/DSC_6286small.jpg', enlarged: 'FotoEsibizione/DSC_6286.JPG', text: '' },
				image_10: { thumb: 'FotoEsibizione/DSC_6298small.jpg', enlarged: 'FotoEsibizione/DSC_6298.JPG', text: '' },
				image_11: { thumb: 'FotoEsibizione/DSC_6316small.jpg', enlarged: 'FotoEsibizione/DSC_6316.JPG', text: '' },
				image_12: { thumb: 'FotoEsibizione/DSC_6333small.jpg', enlarged: 'FotoEsibizione/DSC_6333.JPG', text: '' },
				image_13: { thumb: 'FotoEsibizione/DSC_6344small.jpg', enlarged: 'FotoEsibizione/DSC_6344.JPG', text: '' },
				image_14: { thumb: 'FotoEsibizione/DSC_6352small.jpg', enlarged: 'FotoEsibizione/DSC_6352.JPG', text: '' },
				image_15: { thumb: 'FotoEsibizione/DSC_6389small.jpg', enlarged: 'FotoEsibizione/DSC_6389.JPG', text: '' },
				image_16: { thumb: 'FotoEsibizione/DSC_6407small.jpg', enlarged: 'FotoEsibizione/DSC_6407.JPG', text: '' },
				image_17: { thumb: 'FotoEsibizione/DSC_6411small.jpg', enlarged: 'FotoEsibizione/DSC_6411.JPG', text: '' },
				image_18: { thumb: 'FotoEsibizione/DSC_6449small.jpg', enlarged: 'FotoEsibizione/DSC_6449.JPG', text: '' },
				image_19: { thumb: 'FotoEsibizione/DSC_6455small.jpg', enlarged: 'FotoEsibizione/DSC_6455.JPG', text: '' },
				image_20: { thumb: 'FotoEsibizione/DSC_6466small.jpg', enlarged: 'FotoEsibizione/DSC_6466.JPG', text: '' },
				image_21: { thumb: 'FotoEsibizione/DSC_6481small.jpg', enlarged: 'FotoEsibizione/DSC_6481.JPG', text: '' },
				image_22: { thumb: 'FotoEsibizione/DSC_6489small.jpg', enlarged: 'FotoEsibizione/DSC_6489.JPG', text: '' },
				image_23: { thumb: 'FotoEsibizione/DSC_6497small.jpg', enlarged: 'FotoEsibizione/DSC_6497.JPG', text: '' },
				image_24: { thumb: 'FotoEsibizione/DSC_6520small.jpg', enlarged: 'FotoEsibizione/DSC_6520.JPG', text: '' },
				image_25: { thumb: 'FotoEsibizione/DSC_6528small.jpg', enlarged: 'FotoEsibizione/DSC_6528.JPG', text: '' },
				image_26: { thumb: 'FotoEsibizione/DSC_6530small.jpg', enlarged: 'FotoEsibizione/DSC_6530.JPG', text: '' },
				image_27: { thumb: 'FotoEsibizione/DSC_6544small.jpg', enlarged: 'FotoEsibizione/DSC_6544.JPG', text: '' },	               
        },

        gallery_4: {
                
                cover_thumb: 'FotoRitiroMontagna/IMG_3641small.jpg',
                gallery_title: 'Foto Ritiro Montagna',
                image_1: { thumb: 'FotoRitiroMontagna/IMG_3641small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3641.jpg', text: '' },
                image_2: { thumb: 'FotoRitiroMontagna/18072015-IMG_3539-2small.jpg', enlarged: 'FotoRitiroMontagna/18072015-IMG_3539-2.jpg', text: '' },
                image_3: { thumb: 'FotoRitiroMontagna/18072015-IMG_3872small.jpg', enlarged: 'FotoRitiroMontagna/18072015-IMG_3872.jpg', text: '' },
                image_4: { thumb: 'FotoRitiroMontagna/IMG_3557small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3557.jpg', text: '' },
                image_5: { thumb: 'FotoRitiroMontagna/IMG_3565small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3565.jpg', text: '' },
				image_6: { thumb: 'FotoRitiroMontagna/IMG_3589small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3589.jpg', text: '' },
				image_7: { thumb: 'FotoRitiroMontagna/IMG_3594small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3594.jpg', text: '' },
				image_8: { thumb: 'FotoRitiroMontagna/IMG_3605small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3605.jpg', text: '' },
				image_9: { thumb: 'FotoRitiroMontagna/IMG_3631small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3631.jpg', text: '' },
				image_10: { thumb: 'FotoRitiroMontagna/IMG_3641small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3641.jpg', text: '' },
				image_11: { thumb: 'FotoRitiroMontagna/IMG_3657small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3657.jpg', text: '' },
				image_12: { thumb: 'FotoRitiroMontagna/IMG_3660small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3660.jpg', text: '' },
				image_12: { thumb: 'FotoRitiroMontagna/IMG_3670small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3670.jpg', text: '' },
				image_14: { thumb: 'FotoRitiroMontagna/IMG_3717small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3717.jpg', text: '' },
				image_15: { thumb: 'FotoRitiroMontagna/IMG_3718small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3718.jpg', text: '' },
				image_16: { thumb: 'FotoRitiroMontagna/IMG_3767small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3767.jpg', text: '' },
				image_17: { thumb: 'FotoRitiroMontagna/IMG_3778small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3778.jpg', text: '' },
				image_18: { thumb: 'FotoRitiroMontagna/IMG_3781small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3781.jpg', text: '' },
				image_19: { thumb: 'FotoRitiroMontagna/IMG_3811small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3811.jpg', text: '' },
				image_20: { thumb: 'FotoRitiroMontagna/IMG_3821small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3821.jpg', text: '' },
				image_21: { thumb: 'FotoRitiroMontagna/IMG_3832small.jpg', enlarged: 'FotoRitiroMontagna/IMG_3832.jpg', text: '' }
                
        }

     

        // Paste in any further additional galleries here.
        
        // The gallery menu order increments from 1 onwards
        // (eg: gallery_1, gallery_2, gallery_3 etc). Please be sure
        // the incrementation has no numerical gaps.
        
        // Say for example you would like a total of six
        // galleries. Simply copy and paste 'gallery_5' and paste it
        // directly below itself. Then change the newly pasted
        // gallery name from 'gallery_5' to 'gallery_6' like so:

     

        // Again, you can continue this process as much as you like.
        // flipGallery will automatically paginate the pages for you.


};
// MODE SETTINGS
// -------------

var fg_mode_settings = {
        
        edit_mode: 1,
        
        // 1 = On & 0 = Off.
        
        // ***IMPORTANT***: It is recommended to leave this
        // option switched on during assembly of your galleries
        // as it will prevent your images from caching.
        // Once published online, it is then recommended that you
        // switch it off, as it will result in the reduction of
        // workload on your hosting.
        
}

// VISUAL SETTINGS
// ---------------

var fg_visual_settings = {
        
        // *Content Visual Settings*
        
        position_property: 'margin:auto; position:relative;',
        
        // How you wish to 'position' or 'float' flipGallery
        // within your html document (for example: 'float: right;'
        // or 'position: fixed; left: 10px; top: 10px;' or
        // 'margin:auto; position:relative;').
        
        // *Gallery Navigation Visual Settings*
        
        gallery_navigation_bar_margin_top: 10, // (pixels)
        
        gallery_navigation_bar_height: 30, // (pixels)
    
        // *Thumbnail Visual Settings*

        thumbnail_columns: 2, 
        
        // The maximum amount of rows you require for your responsive layout.

        minimum_thumbnail_columns: 1,
        
        // The minimum amount of rows you require for your responsive layout.
    
        thumbnail_rows: 10, 

        // The minimum amount of rows you require for your responsive layout.
    
        thumbnail_width: 285, // (pixels)
    
        thumbnail_height: 230, // (pixels)
    
        thumbnail_space_top: 5, // (pixels)
    
        thumbnail_space_left: 5, // (pixels)
    
        thumbnail_space_right: 5, // (pixels)
    
        thumbnail_space_bottom: 5, // (pixels)
    
        // *Lightbox Visual Settings*
    
        lightbox_background_opacity: 0.8,
    
        lightbox_border_width: 10, // (pixels)
    
        lightbox_border_color: '#fff'
    
}

// SPEED SETTINGS
// --------------

var fg_speed_settings = {
    
        thumbnail_flip_speed: 800,
    
        // Speed of complete thumbnail flip (milliseconds).
    
        initial_time_gap_between_thumbnails: 50,
    
        // Time gap between each thumbnail flipping in when the
        // page first loads (milliseconds).
    
        normal_time_gap_between_thumbnails: 50
    
        // Time gap between each thumbnail flipping round after
        // page load (milliseconds).

}

// TEXT SETTINGS
// -------------

var fg_text_settings = {
        
        // *Gallery Title Text Settings*
    
        gallery_title_text_style: 'font-size: 18px; color: #000; font-weight: bold;',
    
        // *Gallery Navigation Text Settings*
    
        return_to_main_gallery_text: '&lsaquo;&lsaquo; Galleria principale',
    
        return_to_main_gallery_text_style: 'font-size: 14px; color: #333; font-weight: bold; text-decoration: none;',
    
        next_gallery_text: 'Avanti &rsaquo;&rsaquo;',
    
        back_gallery_text: '&lsaquo;&lsaquo; Indietro',
    
        next_and_back_text_style: 'font-size: 14px; color: #333; font-weight: bold; text-decoration: none;',
    
        page_number_page: 'Pagina',
    
        page_number_of: 'di',
    
        page_number_text_style: 'font-size: 13px; color: #999;',
    
        // *Picture/Lightbox Text Settings*
    
        lightbox_text_style: 'font-size: 14px; line-height: 1.4; color: #000; text-align: center;',
    
        lightbox_text_background_style: 'background-color: #fff; opacity:0.8;',
    
        // *Picture/Lightbox Navigation Text Settings*
    
        next_image_text: 'Avanti &rsaquo;&rsaquo;',
    
        back_image_text: '&lsaquo;&lsaquo; Indietro',
    
        next_and_back_image_text_style: 'font-weight: bold; color: #000;',
    
        image_number_page: 'Foto',
    
        image_number_of: 'di',
    
        image_number_text_style: 'color: #999;',

        // *Image Streaming Text Settings*

        loading_text_color: '#333',
    
        loading_text_opacity: '0.3'
    
}

// A NOTE FOR DEVELOPERS
// ---------------------

// Only the variables in this document are global. They are all
// prefixed with 'fg_'to help them not to conflict with any
// other javascript variables that may be included in your document.

// AND FINALLY
// -----------

// Please feel free to remove all the annotations but be sure to
// keep the header (containing the ownership and copyright) intact.

// Thanks,

// The flipGallery Team