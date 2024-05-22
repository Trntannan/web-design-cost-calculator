document.addEventListener("DOMContentLoaded", function () {
  // Get references to the slider and range value elements
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
  // Add event listener to slider to listen for changes in value
  slider.addEventListener("input", updatePageCountValue);

  // Call the function initially to set the initial value
  updatePageCountValue();

  // Function to handle input changes for page count
  function handleInputChanges(inputId, valueId) {
    let input = document.getElementById(inputId);
    let value = document.getElementById(valueId);
    input.addEventListener("input", function () {
      value.textContent = this.value;
    });
  }

  // Call handleInputChanges function for page count
  handleInputChanges("page-count", "page-count-value", "range-value");

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

  // Call handleButtonClicks function for styling, e-com, CMS, and database
  handleButtonClicks("style");
  handleButtonClicks("e_com");
  handleButtonClicks("cms");
  handleButtonClicks("data_base");

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
        console.log("On-page SEO");
      } else if (button.value === "YES") {
        console.log("Technical SEO");
      }
    });
  });
});


function calculatePrice() {
  let platformType = document.querySelector(".platformOptions").value;

  // Calculate pagePrice based on pageCount
  let pagePriceA = "";
  let pagePrice = "";
  let pageCount = document.getElementById("range-value").value;
  if (pageCount === "1-10") {
    pagePrice = 100;
    pagePriceA = 1000; 
  } else if (pageCount === "10-50") {
    pagePrice = 1000;
    pagePriceA = 5000; 
  } else if (pageCount === "50-150") {
    pagePrice =  5000 &&  15000;
  } else if (pageCount === "150-250") {
    pagePrice = 15000 &&  25000; 
  } else if (pageCount === "250+") {
    pagePrice = 25000; 
  }

  let seoPrice = 0;
  let seoType = document.querySelector(".seo-btn.chosen").value;
  if (seoType === "NO") {
    seoPrice = 0;
  } else if (seoType === "YES") {
    seoPrice = 2000 + pageCount * 100;
  }

  let stylePrice = 0;
  let styleType = document.querySelector(".style .choice-btn.chosen").value;
  if (styleType === "Simple") {
    stylePrice = 1000;
  } else if (styleType === "Moderate") {
    stylePrice = 3000;
  } else if (styleType === "High-End") {
    stylePrice = 5000;
  } else if (styleType === "World Class") {
    stylePrice = 10000;
  }

  let ecommercePrice = 0;
  let ecommerceType = document.querySelector(".e_com .choice-btn.chosen").value;
  if (ecommerceType === "Basic") {
    ecommercePrice = 3000;
  } else if (ecommerceType === "Advanced") {
    ecommercePrice = 6000;
  } else if (ecommerceType === "Enterprise") {
    ecommercePrice = 10000;
  }

  let databasePrice = 0;
  let databaseType = document.querySelector(
    ".data_base .choice-btn.chosen"
  ).value;
  if (databaseType === "Basic") {
    databasePrice = 2000;
  } else if (databaseType === "Advanced") {
    databasePrice = 5000;
  } else if (databaseType === "Full") {
    databasePrice = 10000;
  }

  let cmsPrice = 0;
  let cmsType = document.querySelector(".cms .choice-btn.chosen").value;
  if (cmsType === "Basic") {
    cmsPrice = 2000;
  } else if (cmsType === "Advanced") {
    cmsPrice = 4000;
  } else if (cmsType === "Enterprise") {
    cmsPrice = 8000;
  }

  let platformPrice = 0;
  // Applying platform cost adjustments
  if (platformType === "Custom") {
    platformPrice = 0;
  } else if (platformType === "Webflow") {
    platformPrice = 0.9; // 10% discount
  } else if (platformType === "Shopify" || platformType === "Squarespace" || platformType === "Wordpress" || platformType === "Woocommerce") {
    platformPrice = 0.75; // 25% discount
  } else if (platformType === "Wix" || platformType === "Rocketspark") {
    platformPrice = 0.7; // 30% discount
  } else {
    platformPrice = 1; // No change
  }

  // Calculate total price
  let totalPriceA =
    pagePrice +
    seoPrice +
    stylePrice +
    ecommercePrice +
    databasePrice +
    cmsPrice +
    platformPrice;
  
    let totalPriceB =
    pagePriceA +
    seoPrice +
    stylePrice +
    ecommercePrice +
    databasePrice +
    cmsPrice +
    platformPrice;  

  // Construct the quote statement
  let quoteStatement = `We estimate your project will cost between $${totalPriceA} and $${totalPriceB}. Please complete the form below to receive an email detailing the estimate.`;

  // Construct the quote details
  let quoteDetailsArray = [
    `<li>Number of Pages: ${pageCount}</li><br>`,
    `<li>Style of Design: ${styleType}</li><br>`,
    `<li>SEO Type: ${seoType}</li><br>`,
    `<li>eCommerce Functionality: ${ecommerceType}</li><br>`,
    `<li>CMS: ${cmsType}</li><br>`,
    `<li>Database Integration: ${databaseType}</li><br>`,
    `<li>Platform Type: ${platformType}</li><br>`,
    `<li>Estimated Price: $${totalPriceA} - $${totalPriceB}</li>`
  ];

  // Wrap the quote details in <ul> tags to create a list
  let quoteDetails = '<ul>' + quoteDetailsArray.join('') + '</ul>';

  // Set the quote statement and details in the emailForm page
  document.getElementById("quote-statement").textContent = quoteStatement;
  document.getElementById("quoteDetails").innerHTML = quoteDetails;

  // Switch between forms
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("emailForm").style.display = "block";
}
