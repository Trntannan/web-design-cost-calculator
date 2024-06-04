function calculatePrice() {
  // Check if any option is not selected
  let errorMessages = [];

  if (document.querySelector(".page-count-btn.chosen") === null) {
    errorMessages.push("Please select a Page Count option.");
  }
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
  let platformType = document.querySelector(".platform-choices").value;

  // Set pagePriceA and pagePriceB based on pageCount
  let pagePriceA = "";
  let pagePriceB = "";
  let pageCount = document.querySelector(".page-count-btn.chosen").value;
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
    pagePriceB = 25000;
  }

  // See seoPriceA and seoPriceB based on pageCount
  let seoPriceA = "";
  let seoPriceB = "";
  const seoBasePrice = 2000;
  let seoType = document.querySelector(".seo-btn.chosen").value;
  if (seoType === "NO") {
    seoPriceA = 0;
    seoPriceB = 0;
  } else if (seoType === "YES") {
    seoPriceA = seoBasePrice + pagePriceA;
    seoPriceB = seoBasePrice + pagePriceB;
  }

  // Set designPrice
  let designPrice = 0;
  let designType = document.querySelector(".design-btn.chosen").value;
  if (designType === "NO") {
    designPrice = 0;
  } else if (designType === "YES") {
    designPrice = 1500;
  }

  // Set stylePrice
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
  // Set ecommercePrice
  let ecommercePrice = 0;
  let ecommerceType = document.querySelector(".e_com .choice-btn.chosen").value;
  if (ecommerceType === "Basic") {
    ecommercePrice = 3000;
  } else if (ecommerceType === "Advanced") {
    ecommercePrice = 6000;
  } else if (ecommerceType === "Enterprise") {
    ecommercePrice = 10000;
  }
  // Set databasePrice
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

  // Set cmsPrice
  let cmsPrice = 0;
  let cmsType = document.querySelector(".cms .choice-btn.chosen").value;
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
  const quoteStatement = `We estimate your project will cost between $${totalPriceA} and $${totalPriceB}. Please complete the form below for an exact quote from Take2 website design strategist.`;

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
  document.getElementById("quoteStatement").textContent = quoteStatement;
  document.getElementById("quoteDetails").innerHTML = quoteDetails;

  // Reset browser to the top
  window.scrollTo(0, 0);

  // Switch between forms only if there are no errors
  if (errorMessages.length === 0) {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("emailForm").style.display = "block";
  }
}
