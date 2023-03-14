// import React from 'react'
// import { useEffect,useRef,useState } from 'react'

// export default function App(){
//     const [name,setName] = useState( '' )
//     const previousName = useRef('')
//     useEffect(() => {
//         previousName.current = name
//     },[name])
//   return (
//     <div>
//         <input value={name} onChange={e => setName(e.target.value)} />
//         <div>Name: {name} previousName = {previousName}</div>
//     </div>
//   )
// }
