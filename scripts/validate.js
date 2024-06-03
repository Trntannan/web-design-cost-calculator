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
    "Rocketspark",
  ];
  return validPlatformTypes.includes(platformType);
}
