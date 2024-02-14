import { RollinLogo } from "../../assets/icons/Icons"

const HeaderLogin = ({icon1, icon2}) => {
    return (
        <>
            <header className="HeaderLoginBackground" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '10px',
                    alignItems: 'center'
            }}>
                <RollinLogo/>
                <div style={{display: 'flex'}}>
                    {icon1}
                    <div style={{marginLeft:'20px', marginRight: '20px'}}>
                        {icon2}
                    </div>
                </div>
            </header>
            
        </>
    )
}

export default HeaderLogin