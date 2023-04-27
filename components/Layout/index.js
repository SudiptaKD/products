import Header from "components/Header/Header"


const ParentLayout = ({children}) => {
  return (
    <div className='bg-[#FAFAFA] min-h-screen' >
        <Header/>
        {children}
    </div>
  )
}

export default ParentLayout