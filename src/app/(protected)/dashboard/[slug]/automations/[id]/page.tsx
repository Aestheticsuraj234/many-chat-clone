import Trigger from '@/components/global/automations/trigger'
import AutomationBreadCrumb from '@/components/global/bread-crumbs/automations'
import { Warning } from '@/icons'
import React from 'react'


// WIP: "Set some metadata"
type Props = {
  params: { id: string }
}
const Page = ({ params }: { params: { id: string } }) => {
    // WIP:"pre-fetch usr automations data"
  return (
    <div className='flex flex-col items-center gap-y-20'>
      <AutomationBreadCrumb id={params.id}/>
      <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
      <div className="flex gap-x-2">
        <Warning/>
        When...
      </div>
      <Trigger id={params.id} />
      </div>
    </div>
  )
}

export default Page