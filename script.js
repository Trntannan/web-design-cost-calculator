// Handlers
let pageCountValue = document.getElementById("range-value");
let slider = document.getElementById("page-count");

// Function to update pageCountValue based on slider value
function updatePageCountValue() {
  let sliderValue = parseInt(slider.value);
  let pageCount = "";

  // Determine pageCount range based on the slider steps
  if (sliderValue === 1) {
    pageCountValue.value = "1-10";
    pageCount = "1-10";
    console.log("1-10");
  } else if (sliderValue === 2) {
    pageCountValue.value = "10-50";
    pageCount = "10-50";
    console.log("10-50");
  } else if (sliderValue === 3) {
    pageCountValue.value = "50-150";
    pageCount = "50-150";
    console.log("50-150");
  } else if (sliderValue === 4) {
    pageCountValue.value = "150-250";
    pageCount = "150-250";
    console.log("150-250");
  } else if (sliderValue === 5) {
    pageCountValue.value = "250+";
    pageCount = "250+";
    console.log("250+");
  }
}

// Function to handle input changes for page count
function handleInputChanges(inputId, valueId) {
  let input = document.getElementById(inputId);
  let value = document.getElementById(valueId);
  input.addEventListener("input", function () {
    value.textContent = this.value;
  });
}

// handle custom slider input
const range = document.querySelector("#page-count");
range.addEventListener("input", () => {
  const min = range.min;
  const max = range.max;
  const currentVal = range.value;

  range.style.backgroundSize =
    ((currentVal - min) / (max - min)) * 100 + "% 100%";
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

// Add event listener to slider to listen for changes in value
slider.addEventListener("input", updatePageCountValue);

// Call the function initially to set the initial value
updatePageCountValue();

// Call handleInputChanges function for page count
handleInputChanges("page-count", "page-count-value", "range-value");

// Call handleButtonClicks function for styling, e-com, CMS, and database
handleButtonClicks("style");
handleButtonClicks("e_com");
handleButtonClicks("cms");
handleButtonClicks("data_base");


// Function to validate page count input
function validatePageCount(pageCount) {
  const validPageCounts = ["1-10", "10-50", "50-150", "150-250", "250+"];
  return validPageCounts.includes(pageCount);
}

// Function to validate SEO button selection
function validateSEO(seoType) {
  return seoType === "YES" || seoType === "NO";
}

// Function to validate Responsive Design button selection
function validateDesign(designType) {
  return designType === "YES" || designType === "NO";
}

// Function to validate Style button selection
function validateStyle(styleType) {
  const validStyleTypes = ["Simple", "Moderate", "High-End", "World Class"];
  return validStyleTypes.includes(styleType);
}

// Function to validate E-commerce button selection
function validateEcommerce(ecommerceType) {
  const validEcommerceTypes = ["Basic", "Advanced", "Enterprise"];
  return validEcommerceTypes.includes(ecommerceType);
}

// Function to validate CMS button selection
function validateCMS(cmsType) {
  const validCMSTypes = ["Basic", "Advanced", "Enterprise"];
  return validCMSTypes.includes(cmsType);
}

// Function to validate Database button selection
function validateDatabase(databaseType) {
  const validDatabaseTypes = ["Basic", "Advanced", "Full"];
  return validDatabaseTypes.includes(databaseType);
}

// Function to validate Platform selection
function validatePlatform(platformType) {
  const validPlatformTypes = [
    "Custom",
    "Webflow",
    "Shopify",
    "Squarespace",
    "Wordpress",
    "Woocommerce",
    "Wix",
    "Rocketspark"
  ];
  return validPlatformTypes.includes(platformType);
}


function calculatePrice() {
  // Check if any option is not selected
  let errorMessages = [];

  if (document.querySelector(".seo-btn.chosen") === null) {
    errorMessages.push("Please select a SEO option.");
  }
  if (document.querySelector(".design-btn.chosen") === null) {
    errorMessages.push("Please select a Responsive Design option.");
  }
  if (document.querySelector(".style .choice-btn.chosen") === null) {
    errorMessages.push("Please select a design style.");
  }
  if (document.querySelector(".e_com .choice-btn.chosen") === null) {
    errorMessages.push("Please select an e-commerce functionality.");
  }
  if (document.querySelector(".cms .choice-btn.chosen") === null) {
    errorMessages.push("Please select a CMS integration option.");
  }
  if (document.querySelector(".data_base .choice-btn.chosen") === null) {
    errorMessages.push("Please select a database integration option.");
  }
  if (document.querySelector(".platform-options").value === "Select Platform") {
    errorMessages.push("Please select a platform.");
  }
  if (errorMessages.length > 0) {
    // Display error messages
    displayErrorModal(errorMessages);
    return;
  }

  // platform type
  let platformType = document.querySelector(".platform-options").value;

  // Set pagePriceA and pagePriceB based on pageCount
  let pagePriceA = "";
  let pagePriceB = "";
  let pageCount = document.getElementById("range-value").value;
  if (pageCount === "1-10") {
    pagePriceA = 100;
    pagePriceB = 1000;
  } else if (pageCount === "10-50") {
    pagePriceA = 1000;
    pagePriceB = 5000;
  } else if (pageCount === "50-150") {
    pagePriceA = 5000;
    pagePriceB = 15000;
  } else if (pageCount === "150-250") {
    pagePriceA = 15000;
    pagePriceB = 25000;
  } else if (pageCount === "250+") {
    pagePriceA = 25000;
    pagePriceB = 0;
  }

  // See seoPriceA and seoPriceB based on pageCount
  let seoPriceA = "";
  let seoPriceB = "";
  let seoBasePrice = 2000;
  let seoType = document.querySelector(".seo-btn").value;
  if (seoType === "NO") {
    seoPriceA = 0;
    seoPriceB = 0;
  } else if (seoType === "YES") {
    seoPriceA = seoBasePrice + pagePriceA;
    seoPriceB = seoBasePrice + pagePriceB;
  }

  // Set designPrice
  let designPrice = 0;
  let designType = document.querySelector(".design-btn").value;
  if (designType === "NO") {
    designPrice = 0;
  } else if (designType === "YES") {
    designPrice = 1500;
  }

  // Set stylePrice
  let stylePrice = 0;
  let styleType = document.querySelector(".style .choice-btn").value;
  if (styleType === "Simple") {
    stylePrice = 1000;
  } else if (styleType === "Moderate") {
    stylePrice = 3000;
  } else if (styleType === "High-End") {
    stylePrice = 5000;
  } else if (styleType === "World Class") {
    stylePrice = 10000;
  }
  // Set ecommercePrice
  let ecommercePrice = 0;
  let ecommerceType = document.querySelector(".e_com .choice-btn").value;
  if (ecommerceType === "Basic") {
    ecommercePrice = 3000;
  } else if (ecommerceType === "Advanced") {
    ecommercePrice = 6000;
  } else if (ecommerceType === "Enterprise") {
    ecommercePrice = 10000;
  }
  // Set databasePrice
  let databasePrice = 0;
  let databaseType = document.querySelector(".data_base .choice-btn").value;
  if (databaseType === "Basic") {
    databasePrice = 2000;
  } else if (databaseType === "Advanced") {
    databasePrice = 5000;
  } else if (databaseType === "Full") {
    databasePrice = 10000;
  }

  // Set cmsPrice
  let cmsPrice = 0;
  let cmsType = document.querySelector(".cms .choice-btn").value;
  if (cmsType === "Basic") {
    cmsPrice = 2000;
  } else if (cmsType === "Advanced") {
    cmsPrice = 4000;
  } else if (cmsType === "Enterprise") {
    cmsPrice = 8000;
  }

  // Set platformPrice
  let platformPrice = 0;
  if (platformType === "Custom") {
    platformPrice = 0;
  } else if (platformType === "Webflow") {
    platformPrice = 0.9;
  } else if (
    platformType === "Shopify" ||
    platformType === "Squarespace" ||
    platformType === "Wordpress" ||
    platformType === "Woocommerce"
  ) {
    platformPrice = 0.75;
  } else if (platformType === "Wix" || platformType === "Rocketspark") {
    platformPrice = 0.7;
  } else {
    platformPrice = 1;
  }

  // Calculate total price
  const totalPriceA =
    pagePriceA +
    seoPriceA +
    stylePrice +
    designPrice +
    ecommercePrice +
    databasePrice +
    cmsPrice +
    platformPrice;

  const totalPriceB =
    pagePriceB +
    seoPriceB +
    stylePrice +
    designPrice +
    ecommercePrice +
    databasePrice +
    cmsPrice +
    platformPrice;

  // Construct the quote statement
  const quoteStatement = `We estimate your project will cost between $${totalPriceA} and $${totalPriceB}. Please complete the form below for an exact quote from WebFX website design strategist.`;

  // Construct the quote details
  const quoteDetailsArray = [
    `<li>Number of Pages: ${pageCount}</li>`,
    `<li>Style of Design: ${styleType}</li>`,
    `<li>Responsive Design: ${designType}</li>`,
    `<li>SEO Integration: ${seoType}</li>`,
    `<li>Database Integration: ${databaseType}</li>`,
    `<li>eCommerce Functionality: ${ecommerceType}</li>`,
    `<li>CMS: ${cmsType}</li>`,
    `<li>Platform: ${platformType}</li>`,
    `<li>Estimated Price: $${totalPriceA} - $${totalPriceB}</li>`,
  ];

  // Wrap the quote details in <ul> tags to create a list
  const quoteDetails = "<ul>" + quoteDetailsArray.join("") + "</ul>";

  // Set the quote statement and details in the emailForm page
  document.getElementById("quote-statement").textContent = quoteStatement;
  document.getElementById("quoteDetails").innerHTML = quoteDetails;

  // Reset browser to the top
  window.scrollTo(0, 0);

  // Switch between forms only if there are no errors
  if (errorMessages.length === 0) {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("emailForm").style.display = "block";
  }
}

// Function to display error messages in a modal
function displayErrorModal(errorMessages) {
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");
  const errorMessagesContainer = document.getElementById(
    "errorMessagesContainer"
  );

  // Clear existing messages
  errorMessagesContainer.innerHTML = "";

  // Add error messages to the modal
  errorMessages.forEach((message) => {
    const errorMessageElement = document.createElement("p");
    errorMessageElement.textContent = message;
    errorMessagesContainer.appendChild(errorMessageElement);
  });

  // Display the modal
  modal.style.display = "block";

  // Close the modal when clicking on the close button
  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close the modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

function getQuote() {
  window.location.href = "completed.html";
}
