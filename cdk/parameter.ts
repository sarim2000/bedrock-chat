import { BedrockChatParametersInput } from "./lib/utils/parameter-models";

export const bedrockChatParams = new Map<string, BedrockChatParametersInput>();
// You can define multiple environments and their parameters here
// bedrockChatParams.set("dev", {});

// If you define "default" environment here, parameters in cdk.json are ignored
bedrockChatParams.set("test", {
  envName: "test",                    // Set explicit environment name
  envPrefix: "test",                  // Set explicit environment prefix
  bedrockRegion: "us-east-1",                  // Or your desired region for this POC
  userPoolDomainPrefix: "kemper-bedrockv3-poc", // VALID: Globally unique Cognito prefix
  allowedSignUpEmailDomains: ["kemper.com"],   // VALID: Restrict sign-ups to kemper.com emails
  selfSignUpEnabled: true,                     // Example for a POC
  enableRagReplicas: false,                    // For a POC, you might not need replicas
  // ... fill in other necessary parameters from BedrockChatParametersInput
  // or let them take defaults from the schema.
}); 
