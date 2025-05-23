
export default function Footer() {
    
    return (
        <div style={{padding: "12px 0px", backgroundColor : "rgb(232, 227, 227)", textAlign: 'center', position:'fixed', width: '100%',height : '85px', bottom : '0', left: '0', right: '0', zIndex : '999'}}>
            
            <div className="text-center">
                    <h5>
                        Made with ❤️ by <a href="https://akshata-ganbote.netlify.app/" style={{textDecoration : "none", color: "red"}}>Muhammad Adil</a>
                    </h5>
            </div> 

            <div className="text-center pt-1">
                <a href="https://www.linkedin.com/in/adil-khan-3085aa219/" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin mx-2" style={{fontSize : "20px"}}></i>
                </a>
                
                <a href="https://www.instagram.com/adilkhanikik2002/" target="_blank" rel="noreferrer">
                    <i className="bi bi-instagram mx-2" style={{fontSize : "20px"}}></i>
                </a>

                <a href="https://github.com/adilkhanikik2002" target="_blank" rel="noreferrer">
                    <i className="bi bi-github mx-2" style={{fontSize : "21px"}}></i>
                </a>

                
            </div> 
             
        </div>
       
    )
}
