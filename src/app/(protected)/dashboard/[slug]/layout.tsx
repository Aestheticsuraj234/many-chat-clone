import Sidebar from '@/components/global/sidebar'
import React from 'react'

type Props = {
    children:React.ReactNode
    params:{slug:string}
}

const Layout = ({children , params}: Props) => {
    // Query
    // WIP:Query client fetch data

  return (
    <div className='p-3'>
        {/* sidebar */}
        <Sidebar slug={params.slug}/>
        {children}
        {/* navbar */}
    </div>
  )
}

export default Layout