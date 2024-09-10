import { Prabhadevi } from "./Prabhadevi";
import { Rabale } from "./Rabale";

export function Learning() {
    let comapanyName="NeoSoft"
    let joinLocation="rabale";
    let companyOfficess=["Dadar, Mumbai","Rable, Mumbai","Parel, Mumbai","Ahmedabad,Gujrat","Noida"];
    const liNodes=companyOfficess.map((city,index)=><li key={'c'+index} >{city}</li>)
    let getMessage=function(){
        return "hello we are implementing examples on JSX expression..."
    }
    // function getMessage(){
    //     return "hello we are implementing examples on JSX expression..."
    // }
    // let getMessage=()=>{
    //     return "hello we are implementing examples on JSX expression..."
    // }
    return(
        <>
        <h5>{comapanyName}</h5>   {/*jsx expression*/}
        <div>
            <h2>If then else</h2>
            {
                joinLocation=='rabale' ? 
                <address>Unit No 501, Sigma IT Park, Plot No <br/>
                    R-203,204, Midc TTC Industrial Area. Rabale,<br/>
                     Navi Mumbai, Maharashtra 400701</address>
                :<address>NeoSOFT, Unique Industrial Estate, <br/>
                    124, Swatantryaveer Savarkar Rd, Off, <br/>
                    Prabhadevi, Mumbai, Maharashtra 400025</address>
            }
        </div>
        <div>
        <h2>If then</h2>
            {
                joinLocation=='rabale' && 
                <address>Unit No 501, Sigma IT Park, Plot No <br/>
                    R-203,204, Midc TTC Industrial Area. Rabale,<br/>
                     Navi Mumbai, Maharashtra 400701</address>
                
            }
        </div>
        <div>
        <h2>If then</h2>
            {
                joinLocation=='prabhadevi' && 
                <address>NeoSOFT, Unique Industrial Estate, <br/>
                    124, Swatantryaveer Savarkar Rd, Off, <br/>
                    Prabhadevi, Mumbai, Maharashtra 400025</address>
            }
        </div>
        <div>
        <h2>If then else (template in component)</h2>
            {
                joinLocation=='rabale'?<Rabale/>:<Prabhadevi/>
            }
        </div>
        <div>
            <b>{getMessage()}</b>
            <i>{5645*345}</i>
        </div>
        <div>
            <h4>companyOfficess:</h4>
            <ol>
            {liNodes} 
            </ol>
        </div>
        {/* <div>
            <ol>
            {companyOfficess.map(city=><li>{city}</li>)} 
            </ol>
        </div> */}
        </>
    )
}