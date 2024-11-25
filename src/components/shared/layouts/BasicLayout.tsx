import React from 'react'

const BasicLayout = ({ children }: { children: React.ReactNode }) =>
    <section className='w-full min-h-screen flex flex-col justify-center items-center'>{children}</section>

export default BasicLayout