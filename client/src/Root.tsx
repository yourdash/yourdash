import React, { useEffect, useState } from "react";
import Header from "./components/Header";

const Root: React.FC = () => {
  const [ taglineInd, setTaglineInd ] = useState( 0 )
  
  useEffect( () => {
    if (taglineInd + 1 >= 3) {
      setTimeout( () => setTaglineInd( 0 ), 3000 )
    } else {
      setTimeout( () => setTaglineInd( taglineInd + 1 ), 3000 )
    }
  }, [ taglineInd ] )
  
  return <main className={ `bg-base-900 min-h-screen` }>
    <Header/>
    <section
        className={ `animate__animated animate__fadeIn w-full h-[30rem] overflow-hidden relative bg-base-800 [clip-path:_polygon(0_0,_100%_0%,_100%_85%,_0%_100%);] grid md:grid-cols-2 grid-cols-1 gap-10 pb-4` }>
      <div className={ `flex flex-col items-end justify-center overflow-hidden md:ml-0 md:mr-0 ml-auto mr-auto` }>
        <h1 className={ `text-6xl font-bold text-base-50 animate__jackInTheBox animate__animated` }>
          YourDash
        </h1>
        {/* Taglines scroller */ }
        <div
            className={ `relative whitespace-nowrap w-full animate__animated animate__slideInRight animate__delay-500ms` }>
          <span
              className={ `absolute flex items-end text-end transition-all duration-500` }
              style={ {
                right: taglineInd === 0
                       ? 0
                       : "-100%",
                opacity: taglineInd === 0
                         ? 1
                         : 0
              } }>
            Manage your files with ease
          </span>
          <span
              className={ `absolute flex items-end text-end transition-all duration-500` }
              style={ {
                right: taglineInd === 1
                       ? 0
                       : "-100%",
                opacity: taglineInd === 1
                         ? 1
                         : 0
              } }>
            Collaborate seamlessly
          </span>
          <span
              className={ `absolute flex items-end text-end transition-all duration-500` }
              style={ {
                right: taglineInd === 2
                       ? 0
                       : "-100%",
                opacity: taglineInd === 2
                         ? 1
                         : 0
              } }>
            Make it your own
          </span>
        </div>
        <div
            className={ `flex gap-4 pt-8 items-center justify-center animate__animated animate__fadeIn animate__delay-750ms` }>
          <a href={ `/login` }
             className={ `pl-4 pr-4 pb-1.5 pt-1.5 hover:bg-theme-500 active:bg-theme-400 bg-theme-600 transition-colors select-none cursor-pointer rounded-full animate__animated animate__tada animate__delay-1s` }>Login</a>
          <a href={ `/login/signup` }
             className={ `hover:text-theme-500 active:text-theme-400 text-theme-200 transition-colors select-none cursor-pointer` }>Signup</a>
        </div>
      </div>
      <div className={ `relative md:block hidden` }>
        <img
            className={ `w-24 absolute top-36 left-56 aspect-square animate__animated animate__bounceInDown animate__1000ms` }
            src={ `/assets/promo-apps/store.avif` }
            alt={ `` }/>
        <img
            className={ `w-24 absolute top-44 left-36 aspect-square animate__animated animate__bounceInDown animate__750ms` }
            src={ `/assets/promo-apps/code-studio.avif` }
            alt={ `` }/>
        <img
            className={ `w-24 absolute top-36 left-16 aspect-square animate__animated animate__bounceInDown animate__500ms` }
            src={ `/assets/promo-apps/checklist.avif` }
            alt={ `` }/>
        <img
            className={ `w-24 absolute top-40 left-0 aspect-square animate__animated animate__bounceInDown animate__250ms` }
            src={ `/assets/promo-apps/files.avif` }
            alt={ `` }/>
      </div>
    </section>
    <section className={ `flex items-center justify-center text-3xl font-semibold pt-16` }>
      Coming soon...
    </section>
  </main>
}

export default Root