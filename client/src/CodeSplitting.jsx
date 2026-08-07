import React, { Suspense } from 'react'
// import LazyLoading from './LazyLoading'

// import('./add').then((result) => {
//    console.log("Result: " + result.add(4,8))
// })

const LazyLoading = React.lazy(() => import('./LazyLoading'))

const CodeSplitting = () => {
  return (
    <Suspense fallback={<h2>Wait...</h2>}>
      {/* <h2>Code Splitting</h2> */}
      <LazyLoading />
    </Suspense>
  )
}

export default CodeSplitting