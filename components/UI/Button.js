const Button = (props) => {
  return (
    <button className={`${props.className} ml-8 inline-flex w-1/2 items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700"`}>
      {props.children}
    </button>
  )
}

export default Button
