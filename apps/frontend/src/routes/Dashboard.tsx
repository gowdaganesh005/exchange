import { Card } from "@/components/ui/card.tsx"
import { UserDashboard } from "@/components/UserDashboard.tsx"

export const Dashboard = ()=>{
    return (
        <>
        <div className="pt-16">
            <UserDashboard />
        </div>
        </>
    )
}