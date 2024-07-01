export default function Show({children}: {children: JSX.Element}) {
  return (
    <div className="hidden lg:flex">{children}</div>
  )
}
