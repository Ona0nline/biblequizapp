import React from "react"

import { Watch } from 'react-loader-spinner'

export default function Loader(){
 return (<div><Watch
  visible={true}
  height="80"
  width="80"
  radius="48"
  color="#4fa94d"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /></div>)
}
