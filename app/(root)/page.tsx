import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import TotalBalance from '@/components/TotalBalanceBox'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async ({searchParams:{id,page}}:SearchParamProps) => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id
  });

  if (!accounts) return;
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId })

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
           <TotalBalanceBox
           accounts={[accountsData]}
           totalBanks={accounts?.totalBanks}
           totalCurrentBalance={accounts?.totalCurrentBalance}
           />
        </header>
        {/* Add your main content here */}
      </div>
      <RightSideBar
       user={loggedIn}
       transactions={[accounts?.transactions]}
       banks={accountsData?.slice(0, 2)}
       />
    </section>
  )
}

export default Home