import { useLocation, Link } from "react-router-dom"

export default function Breadcrumbs() {
  const location = useLocation()
  console.log(location)
  let currentLink = ''

  const crumbs = location.pathname.split('/') 
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`
      console.log("crumb", crumb,"currentLink", currentLink)

      return (
        <div className="breadcrumb-item m-3" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  return (
    <div className="breadcrumb">
      {crumbs}
    </div>
  )
}