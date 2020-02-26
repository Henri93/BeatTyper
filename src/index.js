import React from 'react'
import { PostSection } from './components/PostSection'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => (
  <div className='col-md-12'>
    <div className='d-flex align-items-center p-3 my-3 bg-purple rounded box-shadow'>
      <div className='container'>
        <div className='row justify-content-center'>
          <h1 className='display-4'> CIS 197 MEMEPAGE </h1>
        </div>
      </div>
    </div>

    <PostSection />
  </div>
)

export default App
