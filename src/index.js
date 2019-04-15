import './style.css'

// Create dom elements
const videoElUser = document.createElement('video')
document.body.appendChild(videoElUser)

const videoElEnvironment = document.createElement('video')
document.body.appendChild(videoElEnvironment)

// Start a camera and send to a video element
const startCam = (facingMode, videoEl) => {
  const constraints = {
    video: {
      // specify the "facingMode" for front or rear cam
      facingMode: { exact: facingMode },
    },
  }
  navigator.mediaDevices.getUserMedia(constraints)
    .then(function (mediaStream) {
      videoEl.srcObject = mediaStream
      videoEl.onloadedmetadata = function (e) {
        videoEl.play()
      }
    })
    .catch(function (err) { console.log(err.name + ': ' + err.message) })
}

// Start cams for "user" and "environment" cams (front and rear)
startCam('user', videoElUser)
startCam('environment', videoElEnvironment)
