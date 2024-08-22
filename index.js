let driveURLField = document.querySelector("#driveURL");
let errorDiv = document.querySelector("#error");
let successDiv = document.querySelector("#success");
let successBtn = document.querySelector("#successBtn");
function getImageURL(e) {
  e.preventDefault();
  let pattern = /https:\/\/drive.google.com\/file\/d\//;

  let url = driveURLField.value;

  if (!pattern.test(url)) {
    successBtn.style.display = "none";
    successDiv.style.display = "none";
    errorDiv.style.display = "block";
    return null;
  }

  let fileId = url.split(pattern)[1].split("/")[0];
  let finalUrl = `https://lh3.googleusercontent.com/d/${fileId}`;

  errorDiv.style.display = "none";
  successBtn.style.display = "block";
  successDiv.style.display = "block";
  successDiv.value = finalUrl;
}

async function copyURL(e) {
  successBtn.innerText = "Copied ☑";
  setTimeout(() => {
    successBtn.innerText = "Copy";
  }, 2000);
  await window.navigator.clipboard.writeText(successDiv.value);
}
