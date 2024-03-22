export default function decorate(block){
    let anchorTag = document.querySelector('.section-video .button-container a');
    console.log("anchortag "+ anchorTag);
    var video = document.createElement('video');
    video.src = anchorTag.href;
    // video.autoplay="autoplay";
    anchorTag.parentNode.replaceChild(video, anchorTag);
    video.setAttribute('autoplay', 'autoplay');
    video.setAttribute('muted', 'muted');
    video.setAttribute('loop', 'loop');

    
}