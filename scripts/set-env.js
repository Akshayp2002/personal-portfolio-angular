const fs = require('fs');
const path = require('path');

// Ensure output directory exists before attempting to write files
const environmentsDir = path.resolve(__dirname, '../src/environments');
if (!fs.existsSync(environmentsDir)) {
    fs.mkdirSync(environmentsDir, { recursive: true });
}

// Target paths
const targetPath = path.resolve(__dirname, '../src/environments/environment.ts');
const targetPathDev = path.resolve(__dirname, '../src/environments/environment.development.ts');

const envConfigFile = `
export const environment = {
  production: true,
  // Contentful
  spaceId: '${process.env.CONTENTFUL_SPACE_ID || ""}',
  accessToken: '${process.env.CONTENTFUL_ACCESS_TOKEN || ""}',

  // Supabase
  supabaseUrl: '${process.env.SUPABASE_URL || ""}',
  supabaseKey: '${process.env.SUPABASE_KEY || ""}',

  // S3 Storage (Will be injected by Vercel)
  s3Config: {
    endpoint: '${process.env.S3_ENDPOINT || ""}',
    region: '${process.env.S3_REGION || ""}',
    accessKeyId: '${process.env.S3_ACCESS_KEY || ""}',
    secretAccessKey: '${process.env.S3_SECRET_KEY || ""}',
    bucket: '${process.env.S3_BUCKET || ""}'
  }
};
`;

console.log('Generating environment.ts with variables:');
console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? 'SET' : 'NOT SET');
console.log('S3_ACCESS_KEY:', process.env.S3_ACCESS_KEY ? 'SET' : 'NOT SET');

fs.writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        console.log(err);
    }
    console.log(`Output generated at ${targetPath}`);
});

fs.writeFile(targetPathDev, envConfigFile, function (err) {
    if (err) {
        console.log(err);
    }
    console.log(`Output generated at ${targetPathDev}`);
});

