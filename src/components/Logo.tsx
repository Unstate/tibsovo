import logo from '../assets/main/logo.svg'

function Logo() {
  return (
    <div className="w-full flex items-center justify-center px-4 py-4 md:px-6 md:py-4">
      <div className="w-[100px] h-[28px] md:w-[491px] md:h-auto flex items-center justify-center">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-full h-auto"
          style={{
            objectFit: 'contain'
          }}
        />
      </div>
    </div>
  )
}

export default Logo

