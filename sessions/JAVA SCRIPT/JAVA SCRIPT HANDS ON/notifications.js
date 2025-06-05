let notificationInterval;
let originalTitle = document.title;
let originalFavicon = document.querySelector("link[rel='icon']");
let originalFaviconHref = originalFavicon ? originalFavicon.href : null;

function startNotification(text) {
  endNotification();

  let toggle = false;

  const bellIcon = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bell_icon.svg";

  notificationInterval = setInterval(() => {
    document.title = toggle ? originalTitle : text;

    let icon = document.querySelector("link[rel='icon']") || document.createElement("link");
    icon.type = "image/png";
    icon.rel = "icon";
    icon.href = toggle ? originalFaviconHref : bellIcon;

    if (!icon.parentElement) {
      document.head.appendChild(icon);
    }

    toggle = !toggle;
  }, 1000);
}

function endNotification() {
  clearInterval(notificationInterval);
  document.title = originalTitle;

  if (originalFaviconHref) {
    let icon = document.querySelector("link[rel='icon']") || document.createElement("link");
    icon.type = "image/png";
    icon.rel = "icon";
    icon.href = originalFaviconHref;

    if (!icon.parentElement) {
      document.head.appendChild(icon);
    }
  }
}
