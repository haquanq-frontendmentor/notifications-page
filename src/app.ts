const markNotificationAsReadButton = document.querySelector("#mark-all-read-btn") as HTMLButtonElement;
const newNotificationCount = document.querySelector("#notifications-counter") as HTMLElement;
const notifications = Array.from(document.querySelectorAll(".notification__item"));

markNotificationAsReadButton.addEventListener("click", () => {
    notifications.forEach((element) => {
        element.classList.remove("new");
    });

    newNotificationCount.style.display = "none";
});
