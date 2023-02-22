// Note that this implementation uses the Chrome API chrome.tabs.captureVisibleTab to capture screenshots of the assessment page. The Chrome API can only be used within a Chrome extension, and not in a regular website. Therefore, this implementation will only work when running as a Chrome extension.

// constants for backend server URLs
const API_URL = 'https://example.com/api';
const START_TEST_URL = `${API_URL}/start-test`;
const CAPTURE_IMAGE_URL = `${API_URL}/capture-image`;

// get user details form and start test button elements
const userDetailsForm = document.getElementById('user-details');
const startTestBtn = document.getElementById('start-test-btn');

// add event listener for form submission
userDetailsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // get user input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const invitationCode = document.getElementById('invitation-code').value;
  // send user details to backend server using fetch API
  fetch(START_TEST_URL, {
    method: 'POST',
    body: JSON.stringify({ name, email, invitationCode }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // start camera and audio checks
    startCameraAndAudioChecks();
    // start image proctoring
    startImageProctoring();
  })
  .catch(error => {
    console.error(error);
  });
});

// function to start camera and audio checks
function startCameraAndAudioChecks() {
  // TODO: implement camera and audio checks
}

// function to start image proctoring
function startImageProctoring() {
  // set interval for image capture
  const captureInterval = 3 * 60 * 1000; // 3 minutes in milliseconds
  setInterval(() => {
    // get current timestamp
    const timestamp = new Date().getTime();
    // capture screenshot using Chrome API
    chrome.tabs.captureVisibleTab(null, { format: 'png' }, (dataUrl) => {
      // send image data and timestamp to backend server using fetch API
      fetch(CAPTURE_IMAGE_URL, {
        method: 'POST',
        body: JSON.stringify({ imageData: dataUrl, timestamp }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
    });
  }, captureInterval);
}
