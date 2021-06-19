// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2cvq2hmo43vfl2flt7g30fhp8q",     // CognitoClientID
  "api_base_url": "https://t1ergz9vo4.execute-api.ap-southeast-2.amazonaws.com/{StageNameParam}",   // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-todostack19062021.auth.ap-southeast-2.amazoncognito.com",   // CognitoDomainName
  "redirect_url": "https://master.d1pfnmmf688rg1.amplifyapp.com" // AmplifyURL
};

export default config;
