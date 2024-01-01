
function Nav() {
  const styleTitle={fontFamily:'monospace'}  
  const styleButton={backgroundColor:'orange',borderRadius:'14px',padding:'7px',border:'1px solid orange',color:'white'}  
  return (
    <>
    <nav className="position-relative shadow d-flex align-items-center justify-content-between">
        <div className="logo d-flex align-items-center container m-2">
            <span className="fs-3"><ion-icon name="boat-outline"></ion-icon></span>
            <h3 style={styleTitle}>Travel App</h3>
        </div>
        <div className="sign-up m-2 ">
            <button className="btn" style={styleButton}>Sign up</button>
        </div>
    </nav>
    </>
  )
}

export default Nav