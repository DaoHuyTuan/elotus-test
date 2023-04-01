/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'images.unsplash.com',
      'www.gravatar.com',
      'www.themoviedb.org'
    ]
  },
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { subsets: ['latin'] }
      }
    ]
  }
}

export default nextConfig
