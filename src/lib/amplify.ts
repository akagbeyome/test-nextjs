import { Amplify } from 'aws-amplify'

const amplifyConfig = {
  API: {
    REST: {
      api: {
        endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3000/api',
        region: process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1'
      }
    }
  }
}

Amplify.configure(amplifyConfig, { ssr: true })

export default amplifyConfig