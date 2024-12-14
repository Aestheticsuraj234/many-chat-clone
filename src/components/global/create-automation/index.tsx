import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { AutomationDuoToneBlue, AutomationDuoToneWhite } from '@/icons'

const CreateAutomation = () => {
    // WIP: Create the automation in the database using mutate
  return (
    <Button className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352cc] font-medium to-[#1c2d70]'>
        <Loader state={false}>
            <AutomationDuoToneWhite/>
            <p className='lg:inline hidden'>
                Create an Automation
            </p>
        </Loader>
    </Button>
  )
}

export default CreateAutomation