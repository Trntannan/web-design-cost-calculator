document.addEventListener("DOMContentLoaded", function() {
  // Function to handle input changes for page count and SEO count
  function handleInputChanges(inputId, valueId) {
      let input = document.getElementById(inputId);
      let value = document.getElementById(valueId);
      input.addEventListener("input", function() {
          value.textContent = this.value;
      });
  }

  // Call handleInputChanges function for page count and SEO count
  handleInputChanges("page-count", "page-count-value");
  handleInputChanges("seo-page-count", "seo-page-count-value");

  // Function to handle button clicks for styling, e-com, CMS, and database
  function handleButtonClicks(groupClassName, valueClassName) {
      document.querySelectorAll("." + groupClassName + " .choice-btn").forEach((button) => {
          button.addEventListener("click", () => {
              document.querySelectorAll("." + groupClassName + " .choice-btn").forEach((btn) => {
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
  handleButtonClicks("style", "chosen");
  handleButtonClicks("e_com", "chosen");
  handleButtonClicks("cms", "chosen");
  handleButtonClicks("data_base", "chosen");

  // Handle SEO button clicks
  document.querySelectorAll(".seo-btn").forEach((button) => {
      button.addEventListener("click", () => {
          document.querySelectorAll(".seo-btn").forEach((btn) => {
              btn.classList.remove("chosen");
              btn.classList.add("not-chosen");
          });
          button.classList.remove("not-chosen");
          button.classList.add("chosen");

          if (button.value === "On-page SEO") {
              console.log("On-page SEO");
              document.getElementById("seo-page-count").style.display = "inline";
              document.getElementById("seo-page-count-value").style.display = "inline";
          } else if (button.value === "Technical SEO") {
              console.log("Technical SEO");
              document.getElementById("seo-page-count").style.display = "none";
              document.getElementById("seo-page-count-value").style.display = "none";
          }
      });
  });
});

function calculatePrice() {
  let pagePrice = parseInt(document.getElementById("page-count").value) * 100;
  let pageCount = parseInt(document.getElementById("page-count").value);
  let seoPageCount = parseInt(document.getElementById("seo-page-count").value);
  let platformType = document.querySelector(".platformOptions").value;

  let seoPrice = 0;
  let seoType = document.querySelector(".seo-btn.chosen").value;
  if (seoType === "On-page SEO") {
    seoPrice = document.getElementById("seo-page-count").value * 100;
  } else if (seoType === "Technical SEO") {
    seoPrice = 2000;
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
  let databaseType = document.querySelector(".data_base .choice-btn.chosen").value;
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

  let platformPrice = parseInt(document.querySelector(".platformOptions").value);

  // Calculate total price
  let totalPrice = pagePrice + seoPrice + stylePrice + ecommercePrice + databasePrice + cmsPrice + platformPrice;

  // Construct the quote statement
  let quoteStatement = `We estimate your project will cost ${totalPrice}. Please complete the form below to receive an email detailing the estimate.`;
    
  // Construct the quote details
  let quoteDetails = `Page Count: ${pageCount}, SEO Page Count: ${seoPageCount}, Style Type: ${styleType}, E-commerce Type: ${ecommerceType}, CMS Type: ${cmsType}, Database Type: ${databaseType}, Platform Type: ${platformType}, Estimated Price: ${totalPrice}`;


  // Set the quote statement and details in the emailForm page
  document.getElementById("quote-statement").innerText = quoteStatement;
  document.getElementById("quoteDetails").value = quoteDetails;

 // Switch between forms
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("emailForm").style.display = "block";
  

}
