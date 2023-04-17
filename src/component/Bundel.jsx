import React,{useRef, forwardRef, useState} from 'react'
import ReactToPrint from 'react-to-print';

export const ComponentToPrint = forwardRef((props, ref) => {
    console.log(props.count);
    return (
      <div ref={ref}>My cool content here! {props.count}</div>
    );
  });


const Bundel = () => {
    const [count, setCount] = useState(0);
    const componentRef = useRef();

  return (
    <div className='nx-container'>
        <h1>{count}</h1>
        <button className='nx-btn nx-m-2 nx-w-100px'  onClick={() => setCount(count + 1)}><p style={{fontSize:30}}>+</p></button>
        <ReactToPrint
            trigger={() => <button>Print</button>}
            content={() => componentRef.current}
        />
        <ComponentToPrint count={count} ref={componentRef}/>
    </div>
  )
}

export default Bundel