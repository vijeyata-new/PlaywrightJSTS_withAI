let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";

    console.log(`Base URL for ${environment} environment: ${baseUrl}`);