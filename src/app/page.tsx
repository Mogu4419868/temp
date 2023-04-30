import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className="mx-auto max-w-7xl py-16 px-4 sm:px-6 md:max-w-7xl lg:px-8">
        <div className="text-center">
          Root Page
        </div>
          <Link href={'rsid/rs1921992/section-1/1'}>
              Go to Rsid Page
          </Link>
      </main>
  )
}
