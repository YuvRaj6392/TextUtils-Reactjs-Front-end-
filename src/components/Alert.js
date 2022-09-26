import React from 'react'

export default function Alert(props) {
  return (
    //if props.alert is null than the things written after && will not get evaluated else it will get evaluated!
  props.alert &&  <div className="alert alert-success alert-dismissible fade show" role="alert">
  {props.alert.msg}
 
</div>
   
  )
}
