import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'


const CategoriesView = () => {
  window.top.document.title = 'Categoreis Fixxo.'
  return (
    <>
        <MainMenuSection />
        <FooterSection />
    </>
  )
}

export default CategoriesView