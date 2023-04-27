import Header from "components/Header/Header"


const ParentLayout = ({children}) => {
  return (
    <div className='bg-white h-full' >
        <Header/>
        {children}
    </div>
  )
}

export default ParentLayout