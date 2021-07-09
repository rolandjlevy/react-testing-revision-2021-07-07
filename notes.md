### Notes

- https://testing-library.com/docs/react-testing-library/example-intro

- https://stackoverflow.com/questions/35153599/reactjs-get-height-of-an-element

- https://blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2

- https://medium.com/@jasminegump/passing-data-between-a-parent-and-child-in-react-deea2ec8e654

- https://stackoverflow.com/questions/27864951/how-to-access-a-childs-state-in-react

- https://reactjs.org/docs/composition-vs-inheritance.html

- https://medium.com/trabe/measuring-elements-in-react-6bf343b65347



  https://stackoverflow.com/questions/57043129/get-width-from-responsive-react-element-during-first-render

  window.getComputedStyle(itemRef.current).width

  useLayoutEffect
  https://www.codegrepper.com/code-examples/javascript/reactjs+listen+to+div+div+height+change 

  https://stackoverflow.com/questions/35153599/reactjs-get-height-of-an-element

```js
import React, { useState, useEffect, useRef } from 'react'

export default () => {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })

  return (
    <div ref={ref}>
      {height}
    </div>
  )
}
```