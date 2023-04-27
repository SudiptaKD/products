import Header from "components/Header/Header"


const ParentLayout = ({children}) => {
  return (
    <div className='bg-[#FAFAFA] h-full' >
        <Header/>
        {children}
    </div>
  )
}

export default ParentLayout