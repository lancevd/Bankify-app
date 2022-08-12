
import RecentActivities from "./recent-dashboard";

export default function Dashboard() {
    return (
      <>  
        <div className="cards">
          <div className="balance-card">
            <p>Current Balance</p>
            <h2 className="balance">&#8358;<span>0</span> </h2>
          </div>
    
          <div className="savings-card">
            <p>Total Savings</p>
            <h2 className="savings">&#8358;<span>0</span> </h2>
          </div>
        </div>
    
        <RecentActivities />
      </>
    )
}




