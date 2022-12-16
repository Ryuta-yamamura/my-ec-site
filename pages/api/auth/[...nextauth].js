import NextAuth from 'next-auth'
import GoogleProviders from 'next-auth/providers/google'

const options = {
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile}) {
      if (
        account.provider === 'google' &&
        profile.email_verified &&
        profile.email.endsWith('@example.com')
      ) {
        return true
      } else {
        return false
      }
    },
  },
  database: process.env.DATABASE_URL,
}

export default (req, res) => NextAuth(req, res, options)