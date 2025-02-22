const button = ({ children }) => {
  return (
    <div>
      <button className="px-4 py-4 w-full h-full bg-[#e9e9e9] rounded cursor-pointer hover:bg-black hover:text-[#DFB83B] transition-all duration-300">{children}</button>
    </div>
  )
}
export default button
