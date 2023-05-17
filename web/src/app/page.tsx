import { User } from 'lucide-react'
import Image from 'next/image'
import nlwlogo from '../assets/logo.svg'
export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover">
      <div className="relative  flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
        <div className="rigth-0 absolute top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
        <div className="  absolute bottom-0 right-2  top-0 w-2  bg-stripes"></div>
        <a
          href=""
          className="text-lef  flex items-center gap-3 transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-[170px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>
        <div>
          <Image src={nlwlogo} alt="" />
          <h1>Sua cápsula do tempo</h1>
          <p>
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </p>
          <a href="">CADASTRAR LEMBRANÇA</a>
        </div>
      </div>
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece{' '}
            <a className="underline hover:text-gray-50" href="#">
              a criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
