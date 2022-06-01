const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`${props.className} ml-8 inline-flex md:w-1/2 xs:w-full items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-orange-600 hover:bg-orange-700 px-4 py-2 sm:text-xs md:text-base md:font-medium text-white shadow-sm hover:bg-orange-700"`}>
      {props.children}
    </button>
  )
}

export default Button
