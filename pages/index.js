import HomePage from '@/components/Home/Home'
import ParentLayout from '@/components/Layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ParentLayout>
      <HomePage/>
    </ParentLayout>
  )
}
