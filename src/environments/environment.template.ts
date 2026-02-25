export const environment = {
  production: true,
  // Contentful
  spaceId: 'YOUR_CONTENTFUL_SPACE_ID',
  accessToken: 'YOUR_CONTENTFUL_ACCESS_TOKEN',

  // Supabase
  supabaseUrl: 'YOUR_SUPABASE_URL',
  supabaseKey: 'YOUR_SUPABASE_KEY',

  // S3 Storage (Will be injected by Vercel)
  s3Config: {
    endpoint: 'YOUR_S3_ENDPOINT',
    region: 'ap-south-1',
    accessKeyId: 'YOUR_S3_ACCESS_KEY',
    secretAccessKey: 'YOUR_S3_SECRET_KEY',
    bucket: 'YOUR_S3_BUCKET'
  },
  contactApiUrl: '/api/send-email',
  gmailUser: 'YOUR_GMAIL_USER',
  gmailAppPassword: 'YOUR_GMAIL_APP_PASSWORD'
};
