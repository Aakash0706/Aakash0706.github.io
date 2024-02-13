function scaleButton() {
    var buttonElement = document.getElementById('myButton');
    
    buttonElement.classList.toggle('scaled');
    
    setTimeout(function() {
        buttonElement.classList.toggle('scaled');
    }, 200);
}

function removeDefaultStyle() {
    var inputText = document.getElementById('myInput').value.replace(/\s/g, '');
    
    document.getElementById('myInput').value = '';

    var resultElement = document.getElementById('result');
    var characterCount = inputText.length;

    // Remove any existing video container
    var existingVideoContainer = document.getElementById('videoContainer');
    if (existingVideoContainer) {
        existingVideoContainer.parentNode.removeChild(existingVideoContainer);
    }

    if (characterCount === 7) {
        playVideo('video/thala.mp4', 1200, 450);  // Replace 'abc.mp4' with the actual URL or path to your video
    } else if (characterCount === 18) {
        playVideo('video/virat.mp4', 1000, 550);  // Replace 'def.mp4' with the actual URL or path to your video
    } else {
        playVideo('video/aayein.mp4', 1200, 400);  // Replace 'ghi.mp4' with the actual URL or path to your video
    }
}

function playVideo(videoSource, width, height) {
    // Create a video container element
    var videoContainer = document.createElement('div');
    videoContainer.setAttribute('id', 'videoContainer');
    videoContainer.setAttribute('class', 'video-container');

    // Create a video element and set its attributes
    var videoElement = document.createElement('video');
    videoElement.setAttribute('id', 'videoPlayer');
    videoElement.setAttribute('controls', 'true');
    videoElement.setAttribute('width', width);
    videoElement.setAttribute('height', height);
    videoElement.setAttribute('autoplay', 'true'); // Autoplay attribute

    // Create a source element for the video
    var sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', videoSource);
    sourceElement.setAttribute('type', 'video/mp4');  // Adjust the type based on your video format

    // Append the source element to the video element
    videoElement.appendChild(sourceElement);

    // Append the video element to the video container
    videoContainer.appendChild(videoElement);

    // Append the video container to the "phone" div
    document.querySelector('.phone').appendChild(videoContainer);
}







































// function scaleButton() {
//     var buttonElement = document.getElementById('myButton');
    
//     buttonElement.classList.toggle('scaled');
    
//     setTimeout(function() {
//         buttonElement.classList.toggle('scaled');
//     }, 200);
// }

// function removeDefaultStyle() {
//     var inputText = document.getElementById('myInput').value.replace(/\s/g, '');
    
//     document.getElementById('myInput').value = '';

//     var resultElement = document.getElementById('result');
//     var characterCount = inputText.length;

//     // Remove any existing video container
//     var existingVideoContainer = document.getElementById('videoContainer');
//     if (existingVideoContainer) {
//         existingVideoContainer.parentNode.removeChild(existingVideoContainer);
//     }

//     if (characterCount === 7) {
//         playVideo('virat.mp4');  // Replace 'virat.mp4' with the actual URL or path to your video
//     } else if (characterCount === 18) {
//         playVideo('virat.mp4');  // Replace 'virat.mp4' with the actual URL or path to your video
//     } else {
//         playVideo('virat.mp4');  // Replace 'virat.mp4' with the actual URL or path to your video
//     }
// }

// function playVideo(videoSource) {
//     // Create a video container element
//     var videoContainer = document.createElement('div');
//     videoContainer.setAttribute('id', 'videoContainer');
//     videoContainer.setAttribute('class', 'video-container');

//     // Create a video element and set its attributes
//     var videoElement = document.createElement('video');
//     videoElement.setAttribute('id', 'videoPlayer');
//     videoElement.setAttribute('controls', 'true');
//     videoElement.setAttribute('width', '640');
//     videoElement.setAttribute('height', '360');

//     // Create a source element for the video
//     var sourceElement = document.createElement('source');
//     sourceElement.setAttribute('src', videoSource);
//     sourceElement.setAttribute('type', 'video/mp4');  // Adjust the type based on your video format

//     // Append the source element to the video element
//     videoElement.appendChild(sourceElement);

//     // Append the video element to the video container
//     videoContainer.appendChild(videoElement);

//     // Append the video container to the "phone" div
//     document.querySelector('.phone').appendChild(videoContainer);
// }















































// function scaleButton() {
//     var buttonElement = document.getElementById('myButton');
    
//     buttonElement.classList.toggle('scaled');
    
//     setTimeout(function() {
//         buttonElement.classList.toggle('scaled');
//     }, 200);
// }

// function removeDefaultStyle() {
//     var inputText = document.getElementById('myInput').value.replace(/\s/g, '');
    
//     document.getElementById('myInput').value = '';

//     var resultElement = document.getElementById('result');
//     var characterCount = inputText.length;

//     // Remove any existing video element
//     var existingVideo = document.getElementById('videoPlayer');
//     if (existingVideo) {
//         existingVideo.parentNode.removeChild(existingVideo);
//     }

//     if (characterCount === 7) {
//         playVideo('virat.mp4');  // Replace 'video1.mp4' with the actual URL or path to your video
//     } else if (characterCount === 18) {
//         playVideo('virat.mp4');  // Replace 'video2.mp4' with the actual URL or path to your video
//     } else {
//         playVideo('virat.mp4');  // Replace 'video3.mp4' with the actual URL or path to your video
//     }
// }

// function playVideo(videoSource) {
//     // Create a video element and set its attributes
//     var videoElement = document.createElement('video');
//     videoElement.setAttribute('id', 'videoPlayer');
//     videoElement.setAttribute('controls', 'true');
//     videoElement.setAttribute('width', '640');
//     videoElement.setAttribute('height', '360');

//     // Create a source element for the video
//     var sourceElement = document.createElement('source');
//     sourceElement.setAttribute('src', videoSource);
//     sourceElement.setAttribute('type', 'video/mp4');  // Adjust the type based on your video format

//     // Append the source element to the video element
//     videoElement.appendChild(sourceElement);

//     // Append the video element to the body
//     document.body.appendChild(videoElement);
// }






















































// function scaleButton() {
//     var buttonElement = document.getElementById('myButton');
    
//     buttonElement.classList.toggle('scaled');
    
//     setTimeout(function() {
//         buttonElement.classList.toggle('scaled');
//     }, 200);
// }

// function removeDefaultStyle() {
//     var inputText = document.getElementById('myInput').value.replace(/\s/g, '');
    
//     document.getElementById('myInput').value = '';

//     var resultElement = document.getElementById('result');
//     var characterCount = inputText.length;

//     if (characterCount === 7) {
//         resultElement.textContent = 'Thala!';
//     } else {
//         resultElement.textContent = 'Character count: ' + characterCount + ' (no Thala)';
//     }
// }




// function scaleButton() {
//     // Get the button element
//     var buttonElement = document.getElementById('myButton');
    
//     // Toggle the class to apply the scaling transformation
//     buttonElement.classList.toggle('scaled');
    
//     // You can add additional logic as needed
    
//     // Reset the scaling after a short delay (you can customize the delay)
//     setTimeout(function() {
//         buttonElement.classList.toggle('scaled');
//     }, 200);
// }

// function removeDefaultStyle() {
//     // Get the input element
//     var inputElement = document.getElementById('myInput').value.replace(/\s/g, '');
    
//     inputElement.value = '';

//     var resultElement = document.getElementById('result');
//     var characterCount = inputElement.length;

//         // Update the result element with the character count
//         resultElement.textContent = 'Character count: ' + characterCount;

//         if (characterCount === 7) {
//             resultElement.textContent = 'Thala!'; // Display 'Thala!' if the length is 7
//         } else {
//             resultElement.textContent = 'no Thala';
//         }
// }


