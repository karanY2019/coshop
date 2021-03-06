import Link from 'next/link'
import Head from 'next/head'
import { FaTimes, FaLongArrowAltRight } from 'react-icons/fa'

function Notice () {
    return (
      <>
      <Head>
      <title>First Post</title>
    </Head>
      <h1>Invitation token generated !</h1>
      <h1>One time loggin account: david@coshop.com</h1>
      <h1>One time loggin password: 111111</h1>
      <h2>
        <Link href="/admin2" className="flex flex-1 justify-end">
        {/* <Link href="/invited"> */}
        <a aria-label="Join the Cart Now!">
           <div className="cursor-pointer flex items-center">
           <p className="text-purple-600 text-bg mr-2">Confirm </p>
           <FaLongArrowAltRight className="text-purple-600" />
       </div>
       </a>
          {/* <a>Join the Cart Now!</a> */}
        </Link>
      </h2>
    </>
        
      
      )
     }
export default Notice

{/* <Link href="/collab" className="flex flex-1 justify-end">
<a aria-label="Check out">
  <div className="cursor-pointer flex items-center">
    <p className="text-gray-600 text-sm mr-2">Invite Collaborators </p>
    <FaLongArrowAltRight className="text-gray-600" />
  </div>
</a>
</Link>   */}