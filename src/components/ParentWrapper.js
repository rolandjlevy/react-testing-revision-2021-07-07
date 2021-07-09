import React from 'react';

function ParentWrapper({ data, height }){
  return (
    <div>
      <Child dataParentToChild={data} height={height}>
        {children}
      </Child>
    </div>
  )
}

const Child = ({dataParentToChild, height}) => (
  <div>
    {dataParentToChild} 
    {height < 20 ? 'small' : 'large'}
    {children}
  </div>
);

export default ParentWrapper;