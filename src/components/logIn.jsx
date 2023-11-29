import React , {useRef}from 'react' ;


const LogIn = () => {

    const email = useRef(null);
    const password = useRef(null);
    // console.log(email.current.value)

  return (
    <div className='full-div flex'>
      <div className='logInPage w-1/2 border-2 border-red-800 mt-12 mx-10 mr-20'>
        <div>LogIn</div>

        <div>
        <form
        onSubmit={(e) => e.preventDefault()}
        className="" >
            <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2  rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4  my-2  rounded-lg"
        />
        </form>
        </div>



      </div>


      <div className='background w-1/2 justify-center hidden sm:flex mt-24 ' >
<img className="" src="https://todoist.b-cdn.net/assets/images/44245fc51c3e2ab05ee6d92c13e2e08a.png" alt="" />
      </div>
    </div> /* full div */
  )
}

export default LogIn
