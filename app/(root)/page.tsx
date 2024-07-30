import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalance from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName:'Nipun', lastName:'Smrkn', email:'nipun@example.com' } 


  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
           <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'guest'}
            subtext='Access and manage your account and transactions efficiently.'
           />
           <TotalBalance
           accounts={[]}
           totalBanks={1}
           totalCurrentBalance={1000.30}
           />
        </header>
        {/* Add your main content here */}
      </div>
      <RightSideBar
       user={loggedIn}
       transactions={[]}
       banks={[{currentBalance: 123.50},{
        currentBalance: 500.50}]}
       />
    </section>
  )
}

export default Home