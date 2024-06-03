// Handle page count button clicks
document.querySelectorAll(".page-count-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".page-count-btn").forEach((btn) => {
      btn.classList.remove("chosen");
      btn.classList.add("not-chosen");

      console.log(btn.value);
    });
    button.classList.remove("not-chosen");
    button.classList.add("chosen");

    console.log(button.value);
  });
});

// Function to handle button clicks for styling, e-com, CMS, and database
function handleButtonClicks(groupClassName) {
  document
    .querySelectorAll("." + groupClassName + " .choice-btn")
    .forEach((button) => {
      button.addEventListener("click", () => {
        document
          .querySelectorAll("." + groupClassName + " .choice-btn")
          .forEach((btn) => {
            btn.classList.remove("chosen");
            btn.classList.add("not-chosen");

            console.log(btn.value);
          });
        button.classList.remove("not-chosen");
        button.classList.add("chosen");

        console.log(button.value);
      });
    });
}

// Handle SEO button clicks
document.querySelectorAll(".seo-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".seo-btn").forEach((btn) => {
      btn.classList.remove("chosen");
      btn.classList.add("not-chosen");
    });
    button.classList.remove("not-chosen");
    button.classList.add("chosen");

    if (button.value === "NO") {
      console.log("No SEO");
    } else if (button.value === "YES") {
      console.log("Yes SEO");
    }
  });
});

// Handle Responsive Design button clicks
document.querySelectorAll(".design-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".design-btn").forEach((btn) => {
      btn.classList.remove("chosen");
      btn.classList.add("not-chosen");
    });
    button.classList.remove("not-chosen");
    button.classList.add("chosen");

    if (button.value === "NO") {
      console.log("On-page SEO");
    } else if (button.value === "YES") {
      console.log("Technical SEO");
    }
  });
});

// Call handleButtonClicks function for styling, e-com, CMS, and database
handleButtonClicks("style");
handleButtonClicks("e_com");
handleButtonClicks("cms");
handleButtonClicks("data_base");
handleButtonClicks("page_count");

