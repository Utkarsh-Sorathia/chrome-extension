document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggle');
  
    // Get the current extension state from storage
    chrome.storage.sync.get(['enabled'], function (result) {
      if (result.enabled) {
        toggleSwitch.checked = true;
      } else {
        toggleSwitch.checked = false;
      }
    });
  
    // Add an event listener to handle the toggle switch change
    toggleSwitch.addEventListener('change', function () {
      const isEnabled = toggleSwitch.checked;
  
      // Update storage with the new state
      chrome.storage.sync.set({ enabled: isEnabled }, function () {
        if (isEnabled) {
          alert('Extension enabled');
        } else {
          alert('Extension disabled');
        }
      });
    });
  });
  