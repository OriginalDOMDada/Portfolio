$(document).ready(function () {
    var myColorScheme = {
        navigationbar: {
            background: 'white',
            border: '1px solid #555',
            color: '#2d2d2d',
            colorHover: '#fff'
        },
        thumbnail: {
            background: 'white',
            border: 'none',
            labelBackground: 'transparent',
            labelOpacity: '0.8',
            titleColor: '#2d2d2d',
            descriptionColor: '#eee',
        }
    };


  $("#nanoGallery1").nanoGallery({
    kind: 'flickr',
    userID: '126849996@N02',

    thumbnailWidth: 300,
    thumbnailHeight: 250,
    thumbnailHoverEffect: 'labelAppear',
    thumbnailHoverEffect: 'imageSlideDown',

    colorScheme: myColorScheme,

  });
});