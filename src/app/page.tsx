import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const HomePage = () => {
  return (
    <section className='bg-hub-white h-screen w-11/12 flex py-12'>
      <Card className='rounded border-none shadow-lg w-1/2 flex flex-col justify-center bg-hub-white'>
        <CardHeader className='-mt-28'>
          <CardTitle>
            <span className='text-5xl text-hub-black'>Olá, seja bem-vindo(a) ao
              <strong className='text-hub-blue font-bold'> campus_hub</strong>
            </span>
          </CardTitle>
          <CardDescription className='mr-14'>
            <span className='font-medium text-base text-hub-middlegray'>
              Aqui, você pode ficar por dentro das mais diversas novidades do mundo acadêmico.
              Entre agora e faça parte da nossa comunidade!
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className='mt-3 flex gap-3'>
          <Button className='border-2 rounded border-hub-blue bg-hub-white text-hub-blue
            hover:bg-hub-blue hover:text-hub-white hover:border-hub-blue gap-1 h-9'>
            <FcGoogle size={20} /> Para alunos
          </Button>
          <Link href=''
            className='border-2 rounded flex items-center justify-center px-4 text-sm h-9 text-center
          text-hub-white bg-hub-blue border-hub-blue hover:text-hub-blue hover:bg-hub-white'>Para instituições</Link>
        </CardContent>
      </Card>
      <Card className='rounded border-none shadow-lg bg-hub-white relative overflow-hidden h-full w-1/2 flex flex-col justify-center items-center'>
        <Image
          src='./landing-page-image.jpg'
          alt='Imagem vetorial de um grupo de pessoas'
          width={2000}
          height={2000}
          className='object-cover'
        />
      </Card>
    </section>
  )
}

export default HomePage
