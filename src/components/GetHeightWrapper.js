import React, { useState, useEffect, useRef } from 'react'

const GetHeightWrapper = ({ children }) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [height])

  return (
    <div height={height} ref={ref}>
      {children}
    </div>
  )
}

export default GetHeightWrapper;

// const measureElement = element => {
//   const DOMNode = ReactDOM.findDOMNode(element);
//   return {
//     width: DOMNode.offsetWidth,
//     height: DOMNode.offsetHeight,
//   };
// }

// const ConditionalWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;

// const CarCard = ({ link, brand, model, image, description, price }) => {
//   return (
//     <section className="car-card">
//       <ConditionalWrapper
//         condition={link}
//         wrapper={children => <a href={link}>{children}</a>}
//       >
//         <Fragment>
//           <h2>{brand}</h2>
//           <h3>{model}</h3>
//           <img src={image} alt="" />
//           <p>{description}</p>
//           <p>{price}</p>
//         </Fragment>
//       </ConditionalWrapper>
//     </section>
//   );
// };