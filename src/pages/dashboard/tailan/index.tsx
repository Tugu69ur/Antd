import UserTable from 'components/Table'
import React from 'react'
import Header from 'components/headerTool'

function index() {
  return (
    <div className='mt-[-30px]'>
      <div className='mb-4'>
        <Header />
    </div>
    <div className="w-full h-full bg-white rounded-2xl p-1">
    <UserTable 
    searchQuery={""} 
    setTotalUsers={(count: number) => {}} 
    onEditUser={null} />
    </div>
    </div>

  )
}

export default index