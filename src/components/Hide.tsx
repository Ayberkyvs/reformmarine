export default function Hide({children}: {children: JSX.Element}) {
    return (
      <div className="flex lg:hidden">{children}</div>
    )
  }
  