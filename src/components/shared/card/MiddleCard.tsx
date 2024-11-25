import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card'

import React from 'react'

interface Props { children: React.ReactNode }

const MiddleCard = ({ children }: Props) =>
    <Card className='min-h-screen lg:w-[760px] rounded-none shadow-none border-2 border-grays-five bg-grays-seven'>{children}</Card>

const MiddleCardHeader = ({ children, isLP = false }: { children: React.ReactNode, isLP?: boolean }) => {
    if (isLP) return <CardHeader className='relative text-center gap-1 lg:mx-24 flex flex-col justify-center items-center'>{children}</CardHeader>

    else return <CardHeader className='text-center flex flex-col gap-1'>{children}</CardHeader>
}

const MiddleCardTitle = ({ children, isLP = false }: { children: React.ReactNode, isLP?: boolean }) => {
    if (isLP) return <CardTitle className='text-4xl font-bold text-grays-seven'>{children}</CardTitle>

    else return <CardTitle className='lg:text-3xl font-bold text-blues-three'>{children}</CardTitle>
}

const MiddleCardDescription = ({ children, isLP = false }: { children: React.ReactNode, isLP?: boolean }) => {
    if (isLP) return <CardDescription className='text-lg lg:text-xl md:text-xl font-medium text-grays-five'>{children}</CardDescription>

    else return <CardDescription className='lg:text-sm font-normal text-grays-four'>{children}</CardDescription>
}

const MiddleCardContent = ({ children }: Props) =>
    <CardContent className='flex flex-col mx-32'>{children}</CardContent>

const MiddleCardFooter = ({ children, isLP = false }: { children: React.ReactNode, isLP?: boolean }) => {
    if (isLP) return <CardFooter className='relative flex gap-4 justify-center'>{children}</CardFooter>

    else return <CardFooter className='flex flex-col text-center gap-4 lg:mx-32 items-center'>{children}</CardFooter>
}

export {
    MiddleCard,
    MiddleCardHeader,
    MiddleCardTitle,
    MiddleCardDescription,
    MiddleCardContent,
    MiddleCardFooter
}